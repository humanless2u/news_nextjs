import { Toolbar } from "../components/Toolbar";
import styles from "../styles/EOM.module.css";

const EOM = ({ employee }) => {
  let res = employee.employeeOfTheMonth;

  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{res.name}</h3>
          <h6>{res.position}</h6>
          <img src={res.image} />
          <p>{res.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://raw.githubusercontent.com/portexe/next-news/master/db.json"
  );
  const employee = await apiResponse.json();
  return {
    props: { employee },
  };
};

export default EOM;
