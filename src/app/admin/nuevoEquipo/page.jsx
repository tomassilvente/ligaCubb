'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postEquipo } from '../../../server-actions/equipos/postEquipo';

export default function NuevoEquipo() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    equipo: '',
    zona: '',
    categoria: '',
    puntos: 0,
    partidosJugados: 0,
    partidosGanados: 0,
    partidosEmpatados: 0,
    partidosPerdidos: 0,
    golesFavor: 0,
    golesContra: 0
  });
  const [logoFile, setLogoFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setLogoFile(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateFormData = () => {
    let valid = true;
    const errs = {};
    if (!formData.equipo) errs.equipo = 'equipo Requerida';
    if (!formData.zona) errs.zona = 'Zona Requerido';
    if (!formData.categoria) errs.categoria = 'Categoria requerida';
    if (!formData.puntos) errs.puntos = 'Faltan Puntos';
    if (!formData.partidosJugados) errs.partidosJugados = 'Partidos Jugados Requerido';
    if (!formData.partidosGanados) errs.partidosGanados = 'Partidos Ganados Requerido';
    if (!formData.partidosEmpatados) errs.partidosEmpatados = 'Partidos Empatados Requerido';
    if (!formData.partidosPerdidos) errs.partidosPerdidos = 'Partidos Perdidos Requerido';
    if (!formData.golesFavor) errs.golesFavor = 'Goles a Favor Requeridos';
    if (!formData.golesContra) errs.golesContra = 'Goles en Contra Requeridos';

    if (Object.keys(errs).length > 0) valid = false;
    setErrors(errs);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      console.log(errors);
      return;
    }

    try {

      if (logoFile) {

        const logo = new FormData()
        logo.append('file', logoFile)
        
        let result = await fetch('/api/upload',{
            method: 'POST',
            body: logo
        })
        let image = await result.json()
        
        if(result){
            
            const teamData = { ...formData, logo: image.url };
            
            let res = await postEquipo(teamData);
            if (res) {
                router.push('/admin/equipos');
            }
        }
    }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <h2 className="text-center text-xl my-[25px]">(Administración de Equipos)</h2>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-4xl mx-auto p-8 bg-[#ffffff3e] hover:bg-[#ffffff4b] shadow-lg rounded-lg grid grid-cols-2 gap-x-[30px] gap-y-[30px] text-black"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Nombre Equipo</label>
          <input 
            onChange={handleChange}
            name='equipo' 
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Categoría</label>
          <select 
            onChange={handleChange}
            name='categoria' 
            className="p-2 border border-gray-300 rounded-md"
          >
            {['A', 'B', 'C', 'D', 'E', 'FEM-A', 'FEM-B', 'FEM-C'].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Zona</label>
          <select 
            onChange={handleChange}
            name='zona' 
            className="p-2 border border-gray-300 rounded-md"
          >
            {[1, 2, 3, 4].map(zona => (
              <option key={zona} value={zona}>{zona}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Logo</label>
          <input 
            type='file'
            onChange={handleChange}
            name='logo'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Puntos</label>
          <input 
            type="number" 
            onChange={handleChange}
            name='puntos'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Partidos Jugados</label>
          <input
            type='number' 
            onChange={handleChange}
            name='partidosJugados'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Partidos Ganados</label>
          <input
            type='number' 
            onChange={handleChange}
            name='partidosGanados'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Partidos Empatados</label>
          <input
            type='number' 
            onChange={handleChange}
            name='partidosEmpatados'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Partidos Perdidos</label>
          <input
            type='number' 
            onChange={handleChange}
            name='partidosPerdidos'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Goles a Favor</label>
          <input
            type='number' 
            onChange={handleChange}
            name='golesFavor'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-lg font-semibold">Goles en Contra</label>
          <input
            type='number' 
            onChange={handleChange}
            name='golesContra'
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button 
          type="submit" 
          className="col-span-2 bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700"
        >
          Enviar
        </button>
      </form>
    </>
  );
}