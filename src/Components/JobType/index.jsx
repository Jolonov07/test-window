import React from "react";
import cls from "./JobType.module.scss";

const JobType = ({ values, onChange }) => {
  return (
    <div className={cls.jobType}>
      <h1 className={cls.title}>Job type</h1>
      <form className={cls.form}>
        <select
          name="jobType"
          value={values.jobType}
          onChange={onChange}
          className={cls.selectField}
        >
          <option value="" disabled hidden>
            Select job type
          </option>
          <option value="Recall Job">Recall Job</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="jobSubType"
          value={values.jobSubType}
          onChange={onChange}
          className={cls.selectField}
        >
          <option value="" disabled hidden>
            Select job sub-type
          </option>
          <option value="GL_Pinellas">GL Pinellas</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="jobDescription"
          value={values.jobDescription}
          onChange={onChange}
          className={cls.textareaField}
          placeholder="Job description (optional)"
        />
      </form>
    </div>
  );
};

export default JobType;
