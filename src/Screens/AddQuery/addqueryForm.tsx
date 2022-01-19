import React, { useRef, useState, useEffect } from "react";
import TextInput from "../../components/TextInput/TextInput";
import styles from "./addqueryForm.module.css";
import { FaUser } from "react-icons/fa";
import { emailValidate, phoneValidate } from "../../Values/validators";
import Loading from "../../components/Loading/Loading";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import { addQuery } from "../../apis/queryForm";
import { useHistory } from "react-router-dom";
// import { showSnackbarAction } from "../../Redux/action";
import { useDispatch } from "react-redux";

const AddQuery = () => {
  const history = useHistory();
  const mobileNoRef: any = useRef();
  const organizationNameRef: any = useRef();
  const customerNameRef: any = useRef();
  const customereEmailIdRef: any = useRef();
  const queryTypeRef: any = useRef();
  const attachmentRef: any = useRef();
  const descriptionRef: any = useRef();
  const [load, setLoad] = useState(false);
  const [note, setNote] = useState("");
  const [querytype, setQuerytype] = useState("");

  const queryTypeOptions = [
    { value: "Analytics/Reports issue", label: "Analytics/Reports issue" },
    { value: "Buttons are not working", label: "Buttons are not working" },
    { value: "Leads are not visible", label: "Leads are not visible" },
    { value: "Redirection Issue", label: "Redirection Issue" },
    { value: "Permission Issue", label: "Permission Issue" },
    { value: "Accessibility issue", label: "Accessibility issue" },
    { value: "Other", label: "Other" },
  ];

  const onSubmit = async () => {
    const data = await addQuery({
      mobile_no: mobileNoRef.current.value,
      organization_name: organizationNameRef.current.value,
      customer_name: customerNameRef.current.value,
      customer_email_id: customereEmailIdRef.current.value,
      type_of_query: querytype,
      attachment: attachmentRef.current.value,
      description: descriptionRef.current.value,
    });

    console.log(customerNameRef);
  };

  return (
    <div className={styles.parent}>
      {load === true && <Loading />}
      <div className={styles.child}>
        <div className={styles.headerView}>
          <p className={styles.heading}> {"Add Query Details"}</p>
          <AiOutlineClose
            className={styles.closeIcon}
            size={25}
            onClick={() => history.replace("/")}
          />
        </div>
        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Mobile No</p>
              <p className={styles.two}>*</p>
            </div>
            <div>
              <TextInput
                title={"Enter Mobile no"}
                style={{ backgroundColor: "#fff" }}
                ref={mobileNoRef}
              >
                <FaUser color={"#808080"} />
              </TextInput>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Type of Query</p>
              <p className={styles.two}>*</p>
            </div>
            <div>
              <Select
                ref={queryTypeRef}
                options={queryTypeOptions}
                onChange={(e) => {
                  setQuerytype(e?.value || "");
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Organization Name</p>
              <p className={styles.two}></p>
            </div>
            <div>
              <TextInput
                title={"Organization Name"}
                style={{ backgroundColor: "#fff" }}
                ref={organizationNameRef}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Name</p>
              <p className={styles.two}></p>
            </div>
            <div>
              <TextInput
                title={"Customer Name"}
                style={{ backgroundColor: "#fff" }}
                ref={customerNameRef}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Email Id</p>
              <p className={styles.two}></p>
            </div>
            <div>
              <TextInput
                title={"Customer Email Id"}
                style={{ backgroundColor: "#fff" }}
                ref={customereEmailIdRef}
              />
            </div>
          </div>
        </div>

        {/* <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Mob No</p>
              <p className={styles.two}></p>
            </div>
            <div>
              <TextInput
                title={"Customer Mob No"}
                style={{ backgroundColor: "#fff" }}
                ref={customerMobNoRef}
              />
            </div>
          </div>
        </div> */}

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Attachment</p>
              <p className={styles.two}></p>
            </div>
            <div>
              <TextInput
                title={"Attachment"}
                style={{ backgroundColor: "#fff" }}
                ref={attachmentRef}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide} style={{ width: "100%" }}>
            <div className={styles.title}>
              <p className={styles.one}>Description</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <textarea
                style={{ width: "100%", resize: "none", marginTop: "13px" }}
                rows={4}
                cols={10}
                placeholder={"Enter Note"}
                ref={descriptionRef}
                onChange={(e) => setNote(e.target.value)}
                value={note}
              ></textarea>
            </div>
          </div>
        </div>

        <button
          className={styles.button}
          onClick={() => {
            onSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddQuery;
