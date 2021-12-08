import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getQueries } from "../../apis/queryForm";
import NavBar from "../../components/navbar";
import styles from "./styles.module.scss";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
const tableHeading = [
  { name: "Ticket No.", value: "ticket_no" },
  { name: "Organization Name", value: "organization_name" },
  { name: "Customer Name", value: "customer_name" },
  { name: "Customer Email ID", value: "customer_email_id" },
  { name: "Customer Mob.No.", value: "mobile_no" },
  { name: "Query Type", value: "type_of_query" },
  { name: "Status", value: "status" },
  { name: "Other Query Type", value: "other query type" },
  { name: "Query Description", value: "query description" },
  { name: "Query Nature", value: "Query Nature" },
  { name: "Query Assigned To", value: "Query Assigned To" },
  { name: "Team Name", value: "Team Name" },
  { name: "Query Status", value: "Query Status" },
  { name: "Stage Change Date", value: "Stage Change Date" },
  { name: "Future Request Reason", value: "Future Request Reason" },
  { name: "Query Ageing", value: "Query Ageing" },
  { name: "Created Date and Time", value: "Created Date and Time" },
  { name: "Created By", value: "Created By" },
  { name: "Modify Date and Time", value: "Modify Date and Time" },
  { name: "Modify By", value: "Modify By" },
  { name: "Closure Date and Time", value: "Closure Date and Time" },
  { name: "Testing Status", value: "Testing Status" },
  { name: "Testing Done By", value: "Testing Done By" },
  { name: "Testing Ageing", value: "Testing Ageing" },
  { name: "Priority", value: "Priority" },
  { name: "Notes", value: "Notes" },
  { name: "Attachment", value: "attachment" },
  { name: "Total Ageing", value: "Total Ageing" },
  { name: "Customer Rating", value: "Customer Rating" },
  { name: "Customer Feedback", value: "Customer Feedback" },
];

const ProjectPage = () => {
  const [queriesArr, setQueriesArr] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getQueries()
      .then((data) => {
        console.log("query", data);
        if (data.isValidExecution) {
          setQueriesArr(data.queries);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.root}>
      <NavBar />
      <div className={styles.second_nav_header}>
        <div></div>
        <div className={styles.search_bar}>
          <input placeholder="Search" /> <AiOutlineSearch />
        </div>
        <button
          className={styles.add_project}
          onClick={() => {
            history.push("/addqueryForm");
          }}
        >
          <GrAdd color={"#FFF"} />
          Add Query
        </button>
      </div>

      <div className={styles.prodcuts_table_container}>
        <table className={styles.prodcuts_table}>
          <tr>
            <th>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                placeholder="Search"
              />
              Sr No.
            </th>
            {tableHeading.map((item, index) => (
              <th key={index}>
                <div>
                  {item.name}
                  <AiOutlineDown />
                </div>
              </th>
            ))}
          </tr>

          {queriesArr.map((query, index) => (
            <tr key={index}>
              <td>{index}</td>
              {tableHeading.map((heading, index) => (
                <td key={index}>{query[heading.value] || " "}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
