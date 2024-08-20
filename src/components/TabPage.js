import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "./Tables";
import data from "../data.js";
import { useState } from "react";
import BarChart from "./BarChart";

function TabPage() {
  const [checkedRows, setCheckedRows] = useState({});
  const selectedData = {
    entries: data.entries.filter((row) => checkedRows[row.id]),
  };
  const handleCheckChange = (id) => {
    setCheckedRows((prevRows) => ({
      ...prevRows,
      [id]: !prevRows[id],
    }));
  };

  return (
    <Tabs
      defaultActiveKey="all"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="all" title="All">
        <Table
          data={data}
          checkedRows={checkedRows}
          onCheckChange={handleCheckChange}
        />
      </Tab>
      <Tab eventKey="selected" title="Selected">
        <BarChart checkedRows={selectedData.entries} />
        <Table
          data={selectedData}
          checkedRows={checkedRows}
          onCheckChange={handleCheckChange}
        />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default TabPage;
