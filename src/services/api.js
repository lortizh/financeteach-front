import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/process-sms-back-web-services"
  });