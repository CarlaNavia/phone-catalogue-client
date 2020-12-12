import axios from "axios";

class PhoneService {
    constructor() {
      this.axios = axios.create({
        baseURL: process.env.REACT_APP_API_URI,
        withCredentials: true,
      });
    }
    getAllPhones() {
      return this.axios.get(`/phones`).then(({ data }) => data);
    }
  
    newPhone = async (phone) => {
      try {
        const res = await this.axios.post(`/phones/new`, phone);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  const axiosRequestFunctions = new PhoneService();
  
  export default axiosRequestFunctions;
  