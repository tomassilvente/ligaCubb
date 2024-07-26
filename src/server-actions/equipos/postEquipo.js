import axios from 'axios'

export const postEquipo = async (formData) => {
    try {
        console.log(formData)
        const response = await axios.post("/api/equipos", formData, {});
        console.log(response)
        if (response) {
            return response
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}