import React, { useState } from "react";
import { createContactAndDeal } from "../API";
import ClientDetails from "../Components/ClientDetails";
import JobType from "../Components/JobType";
import ServiceLocation from "../Components/ServiceLocation";
import Scheduled from "../Components/Scheduled";
import Button from "../Components/Button";
import { IoCloseSharp } from "react-icons/io5";
import cls from "./ModalWindow.module.scss";

const ModalWindow = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    jobType: "",
    serviceLocation: "",
    scheduledDate: "",
    startTime: "",
    endTime: "",
    technician: "",
  });

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log("DataForm", { ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data before submission:", formData);

      if (!formData.firstName || !formData.lastName) {
        throw new Error("First name and last name are required!");
      }

      const response = await createContactAndDeal(formData);
      console.log("Сделка успешно создана:", response);
      onclose()
    } catch (error) {
      console.error("Ошибка при отправке:", error.message);
    }
  };

  return (
    <div className={cls.modal}>
      <div className={cls.modalContent}>
        <div className={cls.header}>
          <h3 className={cls.title}>NEW Create a Job</h3>
          <IoCloseSharp className={cls.modalClose} onClick={onClose} />
        </div>

        <div className={cls.blocks}>
          <div className={cls.block1}>
            <ClientDetails values={formData} onChange={handleInputChange} />
            <ServiceLocation values={formData} onChange={handleInputChange} />
          </div>
          <div className={cls.block2}>
            <JobType values={formData} onChange={handleInputChange} />
            <Scheduled values={formData} onChange={handleInputChange} />
          </div>
        </div>

        <div className={cls.buttons}>
          <Button
            text="Create Job"
            onClick={handleSubmit}
            className={cls.btnCreate}
          />
          <Button text="Save Info" className={cls.btnSave} />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;

// ====================
// import React, { useState } from "react";
// import { createContactAndDeal } from "../API";
// import ClientDetails from "../Components/ClientDetails";
// import JobType from "../Components/JobType";
// import ServiceLocation from "../Components/ServiceLocation";
// import Scheduled from "../Components/Scheduled";
// import Button from "../Components/Button";
// import { IoCloseSharp } from "react-icons/io5";
// import cls from "./ModalWindow.module.scss";

// const ModalWindow = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     jobType: "",
//     serviceLocation: "",
//     scheduledDate: "",
//     startTime: "",
//     endTime: "",
//     technician: "",
//   });

//   const [errors, setErrors] = useState({}); // Для отслеживания ошибок

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: false })); // Убираем ошибку при изменении значения
//     console.log("DataForm", { ...formData, [name]: value });
//   };

//   const validateFields = () => {
//     const newErrors = {};
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         newErrors[key] = true; // Отмечаем поле как ошибочное, если оно пустое
//       }
//     });
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Возвращаем true, если ошибок нет
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!validateFields()) {
//         alert("Заполните все обязательные поля!");
//         return;
//       }

//       console.log("Form data before submission:", formData);

//       const response = await createContactAndDeal(formData);
//       console.log("Сделка успешно создана:", response);
//       onClose()
//     } catch (error) {
//       console.error("Ошибка при отправке:", error.message);
//     }
//   };

//   return (
//     <div className={cls.modal}>
//       <div className={cls.modalContent}>
//         <div className={cls.header}>
//           <h3 className={cls.title}>NEW Create a Job</h3>
//           <IoCloseSharp className={cls.modalClose} onClick={onClose} />
//         </div>

//         <div className={cls.blocks}>
//           <div className={cls.block1}>
//             <ClientDetails
//               values={formData}
//               onChange={handleInputChange}
//               errors={errors}
//             />
//             <ServiceLocation
//               values={formData}
//               onChange={handleInputChange}
//               errors={errors}
//             />
//           </div>
//           <div className={cls.block2}>
//             <JobType
//               values={formData}
//               onChange={handleInputChange}
//               errors={errors}
//             />
//             <Scheduled
//               values={formData}
//               onChange={handleInputChange}
//               errors={errors}
//             />
//           </div>
//         </div>

//         <div className={cls.buttons}>
//           <Button
//             text="Create Job"
//             onClick={handleSubmit}
//             className={cls.btnCreate}
//           />
//           <Button text="Save Info" className={cls.btnSave} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalWindow;