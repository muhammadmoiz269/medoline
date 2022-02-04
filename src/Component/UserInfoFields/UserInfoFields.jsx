import React, { useState, useEffect } from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "../PrimaryCustomer/PrimaryCustomer.css";
import { Checkbox } from "antd";

function onChange(e) {
  // console.log(`checked = ${e.target.checked}`);
}

const UserInfoFields = ({ isCompany, isAdditionalUser, requiredUser }) => {
  return (
    <div>
      {isCompany ? (
        <div>
          <AntType
            text="Add Personal Information"
            fontSize={3}
            fontWeight={true}
            color="#1D1C1C"
          />

          <Checkbox onChange={onChange}>
            Use company name as customer name
          </Checkbox>
        </div>
      ) : (
        <></>
      )}

      <div className="nameFields">
        <div className="names">
          <AntType
            text={isCompany ? "Qualification" : "*First Name"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            placeholder={isCompany ? "Qualification" : "First Name"}
            isRequired={requiredUser}
            value={
              isAdditionalUser
                ? "addCustomerFirstName"
                : isCompany
                ? "qualification"
                : "firstName"
            }
          />
        </div>
        {isCompany ? (
          <></>
        ) : (
          <div className="names">
            <AntType
              text="*Last Name"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />

            <AntInput
              isRequired={requiredUser}
              regex={/^[A-Za-z]+$/}
              placeholder="Last Name"
              value={isAdditionalUser ? "addCustomerLastName" : "lastName"}
            />
          </div>
        )}
      </div>
      <div className="names">
        {isCompany ? (
          <div>
            <AntType
              text="*Experience"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput
              isRequired={requiredUser}
              regex={/^[0-9]+$/}
              placeholder="Enter Experince"
              value={
                isAdditionalUser
                  ? "addCustomerEmailAddress"
                  : isCompany
                  ? "experience"
                  : "emailAddress"
              }
            />
          </div>
        ) : (
          <div className="names">
            <AntType
              text="*Email Address"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput
              isRequired={requiredUser}
              regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
              placeholder="Email Address"
              value={
                isAdditionalUser
                  ? "addCustomerEmailAddress"
                  : isCompany
                  ? "companyEmailAddress"
                  : "emailAddress"
              }
            />
          </div>
        )}
      </div>
      <div className="nameFields">
        <div className="names">
          <AntType
            text={isCompany ? "Availibility" : "Mobile Phone Number"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            placeholder={isCompany ? "Mon - Fri" : "416-555-000"}
            value={
              isAdditionalUser
                ? "addCustomerMobileNumber"
                : isCompany
                ? "availibility"
                : "mobileNumber"
            }
          />
        </div>
        <div className="names">
          <AntType
            text={isCompany ? "Charges" : "Home Phone Number"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            regex={/^[0-9]+$/}
            placeholder={isCompany ? "3000" : "416-555-000"}
            value={
              isAdditionalUser
                ? "addCustomerHomeNumber"
                : isCompany
                ? "charges"
                : "homeNumber"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoFields;
