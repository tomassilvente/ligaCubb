export const getEquipo = async (id) => {
    try {
        const response = await fetch(`/api/equipos/${id}`, {
            method: 'GET'
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