import axios from 'axios'

export const updateFecha = async (formData) => {
    try {
        const res = await axios.put(`/api/fechas/${formData.id}`, formData, {});
        console.log(res)
        if (res) {
            return res;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}