export const deleteEquipo = async (formData) => {
    try {
        console.log(formData)
        const response = await fetch(`/api/equipos/${formData.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body:  formData.id  // Convertir formData a una cadena JSON
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to delete equipo:", error);
        return null;
    }
}