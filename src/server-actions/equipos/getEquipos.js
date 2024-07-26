export const getEquipos = async () => {
    try {
        const response = await fetch(`/api/equipos`, {
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