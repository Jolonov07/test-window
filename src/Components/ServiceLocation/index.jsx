import React from "react";
import cls from "./ServiceLocation.module.scss";

const ServiceLocation = ({ values, onChange }) => {
  return (
    <div className={cls.serviceLocation}>
      <h1 className={cls.title}>Service Location</h1>
      <form className={cls.form}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={onChange}
          className={cls.inputField}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={values.city}
          onChange={onChange}
          className={cls.inputField}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={values.state}
          onChange={onChange}
          className={cls.inputField}
        />
        <div className={cls.container}>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={values.postalCode}
            onChange={onChange}
            className={cls.inputField2}
          />
          <select
            name="area"
            value={values.area}
            onChange={onChange}
            className={cls.inputField2}
          >
            <option value="" disabled hidden>Area</option>
            <option value="Batken">Batken</option>
            <option value="Osh">Osh</option>
            <option value="Jalal-Abad">Jalal-Abad</option>
            <option value="Issyk-Kul">Issyk-Kul</option>
            <option value="Naryn">Naryn</option>
            <option value="Talas">Talas</option>
            <option value="Chuy">Chuy</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default ServiceLocation;
