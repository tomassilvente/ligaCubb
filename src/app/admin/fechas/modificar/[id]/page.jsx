'use client'
import axios from 'axios'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

//Server Actions
import { getFecha } from '../../../../../server-actions/fechas/getFecha'
import { updateFecha } from '../../../../../server-actions/fechas/updateFecha'

export default function ModificarFecha(context){

  const {params} = context
  const id = params.id

  const router = useRouter()
  
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    fecha: 0,
    categoria: '', 
    dia: '',
    equipo1: '0',
    logoEquipo1: '',
    equipo2: '',
    logoEquipo2:'', 
    cancha:'',
    horario:'',
    golesEquipo1: 0,
    golesEquipo2: 0,
    autoresEquipo1: '',
    autoresEquipo2: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateFormData = ()=> {

    let valid = true
    const errs = {}
    if (!formData.fecha) errs.fecha = 'Fecha Requerido'
    if (!formData.cancha)errs.cancha = 'Cancha Requerida'
    if (!formData.categoria) errs.categoria = 'Categoria requerida'
    if (!formData.horario) errs.horario = 'Horario Requerido'
    if (formData.banos < 1) errs.banos = 'Al menos 1 baño Requerida'

    if (Object.keys(errs).length > 0) valid = false
    setErrors(errs)
    
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateFormData()) {
        console.log(errors)
        alert(errors)
        return
    }

    let res = updateFecha(formData)
    router.push('/admin/fechas')
    
  }
  
  useEffect(() => {
    const fetchFecha = async () => {
        const fecha = await getFecha(parseInt(id));
        if (fecha) {
            setFormData(fecha)
        };    
    };
    fetchFecha();
}, []);

  return (
    <>
        <h2 className="text-center text-xl my-6">(Administración de fechas)</h2>
        <form 
            onSubmit={handleSubmit} 
            className="max-w-4xl mx-auto p-8 bg-[#ffffff60] hover:bg-[#ffffff74] shadow-lg rounded-lg grid grid-cols-2 gap-x-[30px] gap-y-[30px] text-black"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Fecha</label>
                <select
                    value={formData.fecha}
                    onChange={handleChange}
                    name='fecha' 
                    className="p-2 border border-gray-300 rounded-md"
                >
                    {Array.from({ length: 15 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Categoría</label>
                <select 
                    onChange={e => handleCategory(e)} 
                    value={formData.categoria}
                    name='categoria' 
                    className="p-2 border border-gray-300 rounded-md"
                >
                    {['A', 'B', 'C', 'D', 'E', 'FEM-A', 'FEM-B', 'FEM-C'].map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Día</label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={formData.dia}
                    name='dia' 
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Cancha</label>
                <select
                    value={formData.cancha} 
                    onChange={handleChange}
                    name='cancha'
                    className="p-2 border border-gray-300 rounded-md"
                >
                    {['Sintético 1', 'Sintético 2', 'Sintético 4', 'Sintético 5', 'Cancha 1', 'Cancha 2', 'Cancha 3', 'Cancha 4', 'Cancha 5', 'Cancha 6', 'Cancha 7', 'Cancha 8', 'Cancha 9', 'Cancha 10', 'Cancha 11'].map(cancha => (
                        <option key={cancha} value={cancha}>{cancha}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Horario</label>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={formData.horario}
                    name='horario'
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Equipo 1</label>
                <input
                    value={formData.equipo1} 
                    disabled
                    name='equipo1'
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Equipo 2</label>
                <input 
                    value={formData.equipo2}
                    disabled
                    name='equipo2'
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Goles Equipo 1</label>
                <input
                    value={formData.golesEquipo1} 
                    type="number" 
                    onChange={handleChange}
                    name='golesEquipo1'
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Goles Equipo 2</label>
                <input 
                    value={formData.golesEquipo2}
                    type="number" 
                    onChange={handleChange}
                    name='golesEquipo2'
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Anotadores Equipo 1</label>
                <input
                    value={formData.autoresEquipo1} 
                    type="text" 
                    onChange={handleChange}
                    name='autoresEquipo1'
                    className="p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="text-lg font-semibold">Anotadores Equipo 2</label>
                <input
                    value={formData.autoresEquipo2} 
                    type="text" 
                    onChange={handleChange}
                    name='autoresEquipo2'
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

