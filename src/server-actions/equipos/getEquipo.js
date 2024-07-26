export const getEquipo = async (equipo) => {
    try {
        const response = await fetch(`/api/equipos/${equipo}`, {
            method: 'GET',
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