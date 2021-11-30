import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import styles from "./styles.module.scss";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
// import addquery_form from "../../Screens/AddQuery/addquery_form";
const tableHeading = [
  "Ticket No.",
  "Organization Name",
  "Customer Name",
  "Customer Email ID",
  "Customer Mob.No.",
  "Query Type",
  "Other Query Type",
  "Query Description",
  "Query Nature",
  "Query Assigned To",
  "Team Name",
  "Query Status",
  "Stage Change Date",
  "Future Request Reason",
  "Query Ageing",
  "Created Date and Time",
  "Created By",
  "Modify Date and Time",
  "Modify By",
  "Closure Date and Time",
  "Testing Status",
  "Testing Done By",
  "Testing Ageing",
  "Testing Completion Date",
  "Priority",
  "Notes",
  "Attachment",
  "Total Ageing",
  "Customer Rating",
  "Customer Feedback",
];

const ProjectPage = () => {
  const history = useHistory();
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
                  {item}
                  <AiOutlineDown />
                </div>
              </th>
            ))}
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Christina Berglund</td>
            <td>Christina Berglund</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Francisco Chang</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Roland Mendel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Island Trading</td>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Königlich Essen</td>
            <td>Philip Cramer</td>
            <td>Philip Cramer</td>
            <td>Philip Cramer</td>
            <td>Philip Cramer</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Yoshi Tannamuri</td>
            <td>Yoshi Tannamuri</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
          <tr>
            <td>North/South</td>
            <td>North/South</td>
            <td>North/South</td>
            <td>Simon Crowther</td>
            <td>Simon Crowther</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Paris spécialités</td>
            <td>Marie Bertrand</td>
            <td>Marie Bertrand</td>
            <td>Marie Bertrand</td>
            <td>Marie Bertrand</td>
            <td>France</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
