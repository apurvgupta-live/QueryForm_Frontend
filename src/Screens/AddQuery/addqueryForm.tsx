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
  const ticketNoRef: any = useRef();
  const organizationNameRef: any = useRef();
  const customerNameRef: any = useRef();
  const customerEmailIdRef: any = useRef();
  const customerMobNoRef: any = useRef();
  const queryTypeRef: any = useRef();
  const otherQueryTypeRef: any = useRef();
  const queryDescriptionRef: any = useRef();
  const queryNatureRef: any = useRef();
  const queryAssignedtoRef: any = useRef();
  const teamNameRef: any = useRef();
  const queryStatusRef: any = useRef();
  const queryStageRef: any = useRef();
  const stageChangeDateRef: any = useRef();
  const futureRequestRef: any = useRef();
  const queryAgeingRef: any = useRef();
  const createdDateAndTimeRef: any = useRef();
  const createdByRef: any = useRef();
  const modifyDateAndTimeRef: any = useRef();
  const modifyByRef: any = useRef();
  const closureDateAndTimeRef: any = useRef();
  const testingStatusRef: any = useRef();
  const testingDoneByRef: any = useRef();
  const testingAgeingRef: any = useRef();
  const testingCompletionDateRef: any = useRef();
  const priorityRef: any = useRef();
  const notesRef: any = useRef();
  const attachmentRef: any = useRef();
  const totalAgeingRef: any = useRef();
  const customerRatingRef: any = useRef();
  const customerFeedbackRef: any = useRef();
  const [load, setLoad] = useState(false);
  const [note, setNote] = useState("");

  const queryTypeOptions = [
    { value: "Analytics/Reports issue", label: "Analytics/Reports issue" },
    { value: "Buttons are not working", label: "Buttons are not working" },
    { value: "Leads are not visible", label: "Leads are not visible" },
    { value: "Redirection Issue", label: "Redirection Issue" },
    { value: "Permission Issue", label: "Permission Issue" },
    { value: "Accessibility issue", label: "Accessibility issue" },
    { value: "Other", label: "Other" },
  ];

  const queryNatureOptions = [
    { value: "General", label: "General" },
    { value: "Requirement", label: "Requirement" },
    { value: "Issue", label: "Issue" },
  ];

  const queryStatusOptions = [
    { value: "Open", label: "Open" },
    { value: "Closed", label: "Closed" },
    { value: "In Progress", label: "In Progress" },
  ];

  const priorityOptions = [
    { value: "Top p", label: "Top p" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  const futureRequestOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const noteRef: any = useRef();

  const onSubmit = async () => {
    const data = await addQuery({
      ticket_no: ticketNoRef.current.value,
      organization_name: organizationNameRef.current.value,
      customer_name: customerNameRef.current.value,
      customer_email_id: customerEmailIdRef.current.value,
      customer_mob_no: customerMobNoRef.current.value,
      query_type: queryTypeRef.current.value,
      other_query_type: otherQueryTypeRef.current.value,
      query_description: queryDescriptionRef.current.value,
      query_nature: queryNatureRef.current.value,
      query_assigner_to: queryAssignedtoRef.current.value,
      team_name: teamNameRef.current.value,
      query_status: queryStatusRef.current.value,
      query_stage: queryStageRef.current.value,
      stage_change_date: stageChangeDateRef.current.value,
      future_equest: futureRequestRef.current.value,
      query_ageing: queryAgeingRef.current.value,
      create_date_and_time: createdDateAndTimeRef.current.value,
      created_by: createdByRef.current.value,
      modify_date_and_time: modifyDateAndTimeRef.current.value,
      modify_by: modifyByRef.current.value,
      closure_date_and_time: closureDateAndTimeRef.current.value,
      testing_status: testingStatusRef.current.value,
      testing_done_by: testingDoneByRef.current.value,
      testing_ageing: testingAgeingRef.current.value,
      testing_completion_date: testingCompletionDateRef.current.value,
      priority: priorityRef.current.value,
      notes: noteRef.current.value,
      attachment: attachmentRef.current.value,
      total_ageing: totalAgeingRef.current.value,
      customer_rating: customerRatingRef.current.value,
      customer_feedback: customerFeedbackRef.current.value,
    });
    console.log(data);
  };
  // const dispatcher = useDispatch();
  // const create = () => {
  //   if (ticketNoRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Ticket NO Required!!", "error"));
  //     return;
  //   } else if (organizationNameRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Organization Name Required!!", "error"));
  //     return;
  //   } else if (customerNameRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Customer Name Required!!", "error"));
  //     return;
  //   } else if (customerEmailIdRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Customer Email Required!!", "error"));
  //     return;
  //   } else if (customerMobNoRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Customer MobNo Required!!", "error"));
  //     return;
  //   } else if (queryTypeRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Type Required!!", "error"));
  //     return;
  //   } else if (otherQueryTypeRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Other Query Type Required!!", "error"));
  //     return;
  //   } else if (queryDescriptionRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Description Required!!", "error"));
  //     return;
  //   } else if (queryNatureRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Nature Required!!", "error"));
  //     return;
  //   } else if (queryAssignedtoRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Assigned Required!!", "error"));
  //     return;
  //   } else if (teamNameRef.current.valu === "") {
  //     dispatcher(showSnackbarAction("Team Name Required!!", "error"));
  //     return;
  //   } else if (queryStatusRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Status Required!!", "error"));
  //     return;
  //   } else if (queryStageRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Stage Required!!", "error"));
  //     return;
  //   } else if (stageChangeDateRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Stage Change Date Required!!", "error"));
  //     return;
  //   } else if (futureRequestRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Future Request Required!!", "error"));
  //     return;
  //   } else if (queryAgeingRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Query Ageing Required!!", "error"));
  //     return;
  //   } else if (createdDateAndTimeRef.current.value === "") {
  //     dispatcher(
  //       showSnackbarAction("Created Date and Time Required!!", "error")
  //     );
  //     return;
  //   } else if (createdByRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Created By Required!!", "error"));
  //     return;
  //   } else if (modifyDateAndTimeRef.current.value === "") {
  //     dispatcher(
  //       showSnackbarAction("Modify Date and Time Required!!", "error")
  //     );
  //     return;
  //   } else if (modifyByRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Modify By Required!!", "error"));
  //     return;
  //   } else if (closureDateAndTimeRef.current.value === "") {
  //     dispatcher(
  //       showSnackbarAction("Closure Date and Time Required!!", "error")
  //     );
  //     return;
  //   } else if (testingStatusRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Testing Status Required!!", "error"));
  //     return;
  //   } else if (testingDoneByRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Testing Done By Required!!", "error"));
  //     return;
  //   } else if (testingAgeingRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Testing Ageing Required!!", "error"));
  //     return;
  //   } else if (testingCompletionDateRef.current.value === "") {
  //     dispatcher(
  //       showSnackbarAction("Testing Completion Date Required!!", "error")
  //     );
  //     return;
  //   } else if (priorityRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Priority Required!!", "error"));
  //     return;
  //   } else if (noteRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Note Required!!", "error"));
  //     return;
  //   } else if (attachmentRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Attachment Required!!", "error"));
  //     return;
  //   } else if (totalAgeingRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Total Ageing Required!!", "error"));
  //     return;
  //   } else if (customerRatingRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Customer Rating Required!!", "error"));
  //     return;
  //   } else if (customerFeedbackRef.current.value === "") {
  //     dispatcher(showSnackbarAction("Customer Feedback Required!!", "error"));
  //     return;
  //   }
  //   return true;
  // };

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
              <p className={styles.one}>Ticket NO</p>
              <p className={styles.two}>*</p>
            </div>
            <div>
              <TextInput
                title={"Enter Ticket no"}
                style={{ backgroundColor: "#fff" }}
                ref={ticketNoRef}
              >
                <FaUser color={"#808080"} />
              </TextInput>
            </div>
          </div>

          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Organization Name</p>
              <p className={styles.two}>*</p>
            </div>
            <div>
              <TextInput
                title={"Enter Organization Name"}
                style={{ backgroundColor: "#fff" }}
                ref={organizationNameRef}
              >
                <FaUser color={"#808080"} />
              </TextInput>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Name</p>
              <p className={styles.two}>*</p>
            </div>
            <div>
              <TextInput
                title={"Enter Customer Name"}
                style={{ backgroundColor: "#fff" }}
                ref={customerNameRef}
                length={true}
              />
            </div>
          </div>

          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Email ID</p>
            </div>
            <div>
              <TextInput
                title={"Enter Customer Email ID"}
                style={{ backgroundColor: "#fff" }}
                validator={emailValidate}
                ref={customerEmailIdRef}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Mob No</p>
              <p className={styles.two}></p>
            </div>
            <div>
              <TextInput
                title={"Enter Customer Mob No"}
                style={{ backgroundColor: "#fff" }}
                ref={customerMobNoRef}
                length={true}
              />
            </div>
          </div>

          <div className={styles.divide}>
            <div className={styles.title} style={{ marginBottom: "3%" }}>
              <p className={styles.one}>Query Type</p>
              <p className={styles.two}>*</p>
            </div>
            <div>
              <Select ref={queryTypeRef} options={queryTypeOptions} />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Other Query Type</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={otherQueryTypeRef}
                title={"Enter Other Query Type"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>

          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Query Description</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={queryDescriptionRef}
                title={"Enter Query Description"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Query Nature</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select options={queryNatureOptions} ref={queryNatureRef} />
            </div>
          </div>

          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Query Assigned To</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={queryAssignedtoRef}
                title={"Enter Query Assigned To"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Team Name</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={teamNameRef}
                title={"Enter Team Name"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Query Status</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select options={queryStatusOptions} ref={queryStatusRef} />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Query Stage</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select options={queryStatusOptions} ref={queryStageRef} />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Stage Change Date</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={stageChangeDateRef}
                type={"datetime-local"}
                title={"Enter Stage Change Date"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Future Request</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select options={futureRequestOptions} ref={futureRequestRef} />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Query Ageing</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={queryAgeingRef}
                title={"Enter Query Ageing"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Create Date And Time</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={createdDateAndTimeRef}
                type={"datetime-local"}
                title={"Enter Create Date And Time"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Created By</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={createdByRef}
                title={"Enter Created By"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Modify Date and Time</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={modifyDateAndTimeRef}
                type={"datetime-local"}
                title={"Enter Modify Date and Time"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Modify By</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={modifyByRef}
                title={"Enter Modify By"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Closure Date And Time</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={closureDateAndTimeRef}
                title={"Enter Closure Date And Time"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Testing Status</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={testingStatusRef}
                title={"Enter Testing Status"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Testing Done By</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={testingDoneByRef}
                title={"Enter Testing Done By"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Testing Ageing</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={testingAgeingRef}
                title={"Enter Testing Ageing"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Testing Completion Date</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={testingCompletionDateRef}
                type={"datetime-local"}
                title={"Enter Testing Completion Date"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Priority</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select ref={priorityRef} options={priorityOptions} />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Attachment</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={attachmentRef}
                title={"TODO"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Total Ageing</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select ref={totalAgeingRef} options={priorityOptions} />
            </div>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Notes</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <TextInput
                ref={noteRef}
                title={"Enter Notes"}
                style={{ backgroundColor: "#fff" }}
              />
            </div>
          </div>
          <div className={styles.divide}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Rating</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <Select ref={customerRatingRef} options={priorityOptions} />
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.divide} style={{ width: "100%" }}>
            <div className={styles.title}>
              <p className={styles.one}>Customer Feedback</p>
              <p className={styles.two}></p>
            </div>
            <div style={{ marginTop: "7px" }}>
              <textarea
                style={{ width: "100%", resize: "none", marginTop: "17px" }}
                rows={4}
                cols={10}
                placeholder={"Enter Note"}
                ref={customerFeedbackRef}
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
