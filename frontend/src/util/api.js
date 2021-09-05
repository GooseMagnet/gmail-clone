import Axios from 'axios';

export const axios = Axios.create({
  baseURL: "http://localhost:8080",
  headers: {'Content-Type': 'application/json'}
});

export const getAllEmails = async () => {
  return await axios.get('/emails');
};

export const getOneEmail = async (emailId) => {
  return await axios.get(`/emails/${emailId}`);
};

export const deleteBulkEmails = async (emailIds) => {
  return await axios.post(`/emails/bulk`, JSON.stringify(emailIds));
};

export const updateEmail = async (email) => {
  return await axios.put(`/emails/${email.id}`, JSON.stringify(email));
};

export const sendEmail = async (email) => {
  email.fromEmail = 'g-admin@gmail-clone.com'
  return await axios.post(`/emails`, JSON.stringify(email));
};

export const readEmail = async (emailId) => {
  return await axios.get(`/events/read/${emailId}`);
}
