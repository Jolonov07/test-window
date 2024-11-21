import React from "react";
import cls from "./ClientDetails.module.scss";

const ClientDetails = ({ values, onChange }) => {
  return (
    <div className={cls.clientDetails}>
      <h1 className={cls.title}>Client Details</h1>
      <form className={cls.form}>
        <div className={cls.container}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={onChange}
            className={cls.inputField}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={onChange}
            className={cls.inputField}
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={values.phone}
          onChange={onChange}
          className={cls.inputField2}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={onChange}
          className={cls.inputField2}
        />
      </form>
    </div>
  );
};

export default ClientDetails;
