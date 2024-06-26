import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Siderbar from "../../components/sidebar/Siderbar";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Siderbar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
