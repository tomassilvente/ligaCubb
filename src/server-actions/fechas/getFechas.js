export const getFechas = async () => {
    try {
        const response = await fetch(`/api/fechas`, {
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