'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

//Server Actions
import { getFecha } from '../../../../../server-actions/fechas/getFecha'
import { getEquipo } from '../../../../../server-actions/equipos/getEquipo'
import { updateEquipo } from '../../../../../server-actions/equipos/updateEquipo'

export default function ModificarFecha(context){

  const {params} = context
  const equipo = params.equipo

  const router = useRouter()

  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    equipo: '',
    zona: '',
    categoria: '', 
    logo: '', 
    puntos: 0,
    partidosJugados: 0,
    partidosGanados: 0,
    partidosEmpatados: 0,
    partidosPerdidos: 0,
    golesFavor: 0,
    golesContra: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateFormData = ()=> {

    
    let valid = true
    const errs = {}
    if (!formData.equipo) errs.equipo = 'equipo Requerida'
    if (!formData.zona) errs.zona = 'Zona Requerido'
    if (!formData.categoria) errs.categoria = 'Categoria requerida'
    if (!formData.puntos) errs.puntos = 'Faltan Puntos'
    if (!formData.logo) errs.logo = 'logo Requerida'
    if (!formData.partidosJugados) errs.partidosJugados = 'Partidos Jugados Requerido'
    if (!formData.partidosGanados) errs.partidosGanados = 'Partidos Ganados Requerido'
    if (!formData.partidosEmpatados) errs.partidosEmpatados = 'Partidos Empatados Requerido'
    if (!formData.partidosPerdidos) errs.partidosPerdidos = 'Partidos Perdidos Requerido'
    if (!formData.golesFavor) errs.golesFavor = 'Goles a Favor Requeridos'
    if (!formData.golesContra) errs.golesContra = 'Goles en Contra Requeridos'

    if (Object.keys(errs).length > 0) valid = false
    setErrors(errs)
    
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateFormData()) {
        alert(errors)
        return 
    }

    let res = updateEquipo(formData)
    router.push('/admin/equipos')
  }
  
  useEffect(() => {
    const fetchEquipo = async () => {
        const respuesta = await getEquipo(equipo)
        if (respuesta) {
            setFormData(respuesta)
            console.log(respuesta)
        };    
    };
    fetchEquipo();
}, []);

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
              value={formData.equipo} 
              onChange={handleChange}
              name='equipo' 
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Categoría</label>
                <select 
                onChange={e => (handleCategory(e)) } 
                value={formData.cateogria}
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
              value={formData.zona}  
              onChange={e => (handleCategory(e)) } 
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
              value={formData.logo} 
              type='text'
              onChange={handleChange}
              name='logo'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Puntos</label>
              <input
              value={formData.puntos} 
              type="number" 
              onChange={handleChange}
              name='puntos'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Partidos Jugados</label>
              <input
              value={formData.partidosJugados}
              type='number' 
              onChange={handleChange}
              name='partidosJugados'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Partidos Ganados</label>
              <input
              value={formData.partidosGanados}
              type='number' 
              onChange={handleChange}
              name='partidosGanados'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Partidos Empatados</label>
              <input
              value={formData.partidosEmpatados}
              type='number' 
              onChange={handleChange}
              name='partidosEmpatados'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Partidos Perdidos</label>
              <input
              value={formData.partidosPerdidos}
              type='number' 
              onChange={handleChange}
              name='partidosPerdidos'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Goles a Favor</label>
              <input
              value={formData.golesFavor}
              type='number' 
              onChange={handleChange}
              name='golesFavor'
              className="p-2 border border-gray-300 rounded-md"
              />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="text-lg font-semibold">Goles en Contra</label>
              <input
              value={formData.golesContra}
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
    )
}
