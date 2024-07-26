export const deleteFecha = async (id) => {
    try {
        const response = await fetch(`/api/fechas/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body:{
                id
            }
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to delete fecha:", error);
        return null;
    }
}