'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

//Server Actions
import { getEquipos } from '../../../server-actions/equipos/getEquipos'
import { postFecha } from '../../../server-actions/fechas/postFecha'

export default function NuevaFecha(){

  const router = useRouter()
  const [data, setData] = useState([])
  const [errors, setErrors] = useState({})
  const [equipos, setEquipos] = useState([])
  const [category, setCategory] = useState('')
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

  const handleCategory = (e) =>{
    handleChange(e)
    setCategory(e.target.value)
  }

  const validateFormData = ()=> {

    let valid = true
    const errs = {}
    if (!formData.fecha) errs.fecha = 'Fecha Requerido'
    if (!formData.cancha)errs.cancha = 'Cancha Requerida'
    if (!formData.categoria) errs.categoria = 'Categoria requerida'
    if (!formData.equipo1 || !formData.equipo2) errs.equipo = 'Falta 1 equipo'
    else{
      for(let equipo of data){
        if(equipo.equipo === formData.equipo1 && equipo.categoria === formData.categoria){ 
          formData.logoEquipo1 = equipo.logo
        }
        if(equipo.equipo === formData.equipo2 && equipo.categoria === formData.categoria){ 
          formData.logoEquipo2 = equipo.logo
        }
      }
    }
    if (!formData.horario) errs.horario = 'Horario Requerido'

    if (Object.keys(errs).length > 0) valid = false
    setErrors(errs)
    
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let errores = 'Falta'
    if (!validateFormData()) {
        console.log(errors)
        alert(errores)
        return
    }

    let res = postFecha(formData)
    // router.push('/admin/fechas')
    
  }

  useEffect(() => {
    const fetchEquipos = async () => {
        const equipos = await getEquipos();
        if (equipos){
          setData(equipos);
          let arrayEquipos = []
          for(let equipo of data){
            if(equipo.categoria === category){ 
              arrayEquipos.push(equipo)
            }
          }
          setEquipos(arrayEquipos)
        }
    };
    fetchEquipos();
}, [category]);

  return (
  <>
      <h2 className="text-center text-xl my-[25px]">(Administración de fechas)</h2>
      <form 
      onSubmit={handleSubmit} 
      className="max-w-4xl mx-auto p-8 bg-[#ffffff3e] hover:bg-[#ffffff4b] shadow-lg rounded-lg grid grid-cols-2 gap-x-[30px] gap-y-[30px] text-black"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Fecha</label>
        <select 
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
          onChange={e => (handleCategory(e)) } 
          value={category}
          name='categoria' 
          className="p-2 border border-gray-300 rounded-md"
        >
          {['A', 'B', 'C', 'D', 'E', 'FEMA', 'FEMB', 'FEMC'].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Día</label>
        <input 
          type="text" 
          onChange={handleChange}
          name='dia' 
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Cancha</label>
        <select 
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
          name='horario'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Equipo 1</label>
        <select 
          onChange={handleChange}
          name='equipo1'
          className="p-2 border border-gray-300 rounded-md"
        >
          {equipos.map(equipo => (
            <option key={equipo.equipo} value={equipo.equipo}>{equipo.equipo}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Equipo 2</label>
        <select 
          onChange={handleChange}
          name='equipo2'
          className="p-2 border border-gray-300 rounded-md"
        >
          {equipos.map(equipo => (
            <option key={equipo.equipo} value={equipo.equipo}>{equipo.equipo}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Goles Equipo 1</label>
        <input 
          type="number" 
          onChange={handleChange}
          name='golesEquipo1'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Goles Equipo 2</label>
        <input 
          type="number" 
          onChange={handleChange}
          name='golesEquipo2'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Anotadores Equipo 1</label>
        <input 
          type="text" 
          onChange={handleChange}
          name='autoresEquipo1'
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="text-lg font-semibold">Anotadores Equipo 2</label>
        <input 
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
