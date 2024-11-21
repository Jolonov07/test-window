import React from "react";
import cls from "./Scheduled.module.scss";

const Scheduled = ({ values, onChange }) => {
  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0") + ":00";
    return hour;
  });

  return (
    <div className={cls.scheduled}>
      <h1 className={cls.title}>Scheduled</h1>
      <form className={cls.form}>
        <input
          type="date"
          name="scheduledDate"
          value={values.scheduledDate}
          onChange={onChange}
          placeholder="Start"
          className={cls.inputField}
        />
        <div className={cls.container}>
          <select
            name="startTime"
            value={values.startTime}
            onChange={onChange}
            className={cls.selectFieldWithMargin}
          >
            <option value="" disabled hidden>
              Start time
            </option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <select
            name="endTime"
            value={values.endTime}
            onChange={onChange}
            className={cls.selectField}
          >
            <option value="" disabled hidden>
              End time
            </option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <select
          name="technician"
          value={values.technician}
          onChange={onChange}
          className={cls.selectField}
        >
          <option value="" disabled hidden>
            Select technician
          </option>
          <option value="Technician A">Technician A</option>
          <option value="Technician B">Technician B</option>
          <option value="Technician C">Technician C</option>
        </select>
      </form>
    </div>
  );
};

export default Scheduled;
