import axios from 'axios'
export const updateEquipo = async (formData) => {
    try {
        console.log(formData)
        const res = await axios.put(`/api/equipos/${formData.equipo}`, formData, {});
        console.log(res)
        if (res) {
            return res;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}