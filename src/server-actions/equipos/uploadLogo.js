import axios from "axios";

export const uploadLogo = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post('/api/logo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data.url;
  }