import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./AntTable.css";
import AntButton from "../AntButton/AntButton";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",

    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 3,
    },
  },
  {
    title: "Specialization",
    dataIndex: "specialization",
    sorter: {
      compare: (a, b) => a.specialization - b.specialization,
      multiple: 3,
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email - b.email,
      multiple: 3,
    },
  },
  {
    title: "Qualification",
    dataIndex: "qualification",
  },
  {
    title: "Experience",
    dataIndex: "experience",
  },
  {
    title: "Availibility",
    dataIndex: "availibility",
  },
  {
    title: "Charges",
    dataIndex: "charges",
  },
  {
    title: "Book",
    dataIndex: "",
    key: "x",
    render: () => (
      <AntButton
        background="#00818F"
        color="#ffff"
        text="Book Appointment"
        link="appointment"
      />
    ),
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
const AntTable = ({ customerLists }) => {
  const [userObj, setUserObj] = useState([]);
  const setData = (customerData) => {
    // console.log("***********", customerData);

    customerData.map((obj) => {
      return setUserObj([
        ...userObj,
        {
          name: obj.doctorDetails.firstName,
          specialization: obj.doctorDetails.specialization,
          email: obj.doctorDetails.emailAddress,
          qualification: obj.personalInfo.qualification,
          experience: obj.personalInfo.experience,
          availibility: obj.personalInfo.availibility,
          charges: obj.personalInfo.charges,
        },
      ]);
    });
    // console.log("name is ", userObj);
  };

  useEffect(() => {
    setData(customerLists);
  }, [customerLists]);

  return (
    <div>
      <Table
        className="AntTable"
        columns={columns}
        dataSource={userObj}
        onChange={onChange}
      />
    </div>
  );
};

export default AntTable;
