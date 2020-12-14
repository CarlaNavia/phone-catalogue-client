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

  handleUpload = async (theImage, phoneId) => {
    try {
      const uploadData = new FormData();
      uploadData.append("file", theImage);
      const response = await this.axios.post(
        `/uploadphone/${phoneId}`,
        uploadData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  getAPhone(phoneId) {
    return this.axios.get(`/phones/${phoneId}`).then(({ data }) => data);
  }

  deleteAPhone(phoneId) {
    return this.axios.delete(`/phones/${phoneId}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new PhoneService();

export default axiosRequestFunctions;
