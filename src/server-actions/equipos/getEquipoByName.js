export const getEquipo = async (formData) => {
    try {
        const response = await fetch(`/api/equipo/${formData.equipo}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });
        if (response) {
            const equipos = await response.json();
            return equipos;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}