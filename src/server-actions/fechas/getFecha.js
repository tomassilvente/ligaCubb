export const getFecha = async (id) => {
    try {
        const response = await fetch(`/api/fechas/${id}`, {
            method: 'GET',
        });
        if (response) {
            const fechas = await response.json();
            return fechas;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}