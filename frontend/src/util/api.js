import axios from 'axios';

const API_PATH = 'http://localhost:8080';
const EMAILS = '/emails'

export async function getEmails() {
  const emails = await axios.get(`${API_PATH}${EMAILS}`).then(result => result);
  return await emails.data.slice(0, 10);
}
