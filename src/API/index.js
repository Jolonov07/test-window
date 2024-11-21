import axios from "axios";

const API_TOKEN = "57bc51fe74bb8b0a3d357e9a50399c6d18f72697";
const BASE_URL = "https://api.pipedrive.com/v1";

const getCustomFields = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dealFields?api_token=${API_TOKEN}`);
    console.log(response.data);
  } catch (error) {
    console.error("Ошибка при получении кастомных полей:", error.response?.data || error.message);
  }
};

export const createPerson = async (personData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/persons?api_token=${API_TOKEN}`,
      personData
    );
    return response.data.data.id; 
  } catch (error) {
    console.error(
      "Ошибка при создании контакта:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createDeal = async (dealData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/deals?api_token=${API_TOKEN}`,
      dealData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Ошибка при создании сделки:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createContactAndDeal = async (formData) => {
  try {
    const personId = await createPerson({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
    });

    const dealData = {
      title: `${formData.firstName} ${formData.lastName} - New Deal`,
      value: formData.dealValue || 1000, 
      currency: formData.currency || "USD",
      person_id: personId, 
      status: "open", 
      "05d983f3aae9b17e5b4ec6e2a29d059e01291bd2": formData.scheduledDate,
      "22a45a7ac4a57bc3e1328dd086232cedd89aef47": formData.jobType,
      "f8fe50153f4fd01ef4584fd3c819968ed59992dc": formData.serviceLocation,
      "32e0ae150e2b54ff3b9cb51c8fc3510fb5149533": formData.startTime,
      "3250a1d34f14df6935f217bb26856f14621e0d5b": formData.endTime, 
      "b0f58afa21fd1ff16afaaa70f72beb515764e3aa": formData.technician,
    };

    const dealResponse = await createDeal(dealData);
    return dealResponse;
  } catch (error) {
    console.error("Ошибка при отправке данных:", error.response?.data || error.message);
    throw error;
  }
};
