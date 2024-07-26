'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getFechas } from "../../../server-actions/fechas/getFechas";
import { deleteFecha } from "../../../server-actions/fechas/deleteFecha";

export default function Fechas() {

const router = useRouter()

const [data, setData] = useState([]);

    useEffect(() => {
        const fetchFechas = async () => {
            const fechas = await getFechas();
            if (fechas) setData(fechas);
        };
        fetchFechas();
    }, []);

    const handleDelete = (e,id) =>{
      e.preventDefault()
      
      let eliminar = confirm(`Realmente desea eliminar esta fecha?`)
      if(eliminar){
          let res = deleteFecha(id)
          if(res) router.refresh()
      }
      else return  
  }

  return (
    <div suppressHydrationWarning={true} className='justify-center flex text-black py-[50px]'>
  <div className="overflow-x-auto w-full mx-[5%]">
    <table className="min-w-full text-center rounded-xl bg-[#ddd] text-black">
      <thead>
        <tr className='h-[50px] bg-[#cbcbcb] font-bold'>
          <td className='pl-[5px]'>Fecha</td>
          <td className="w-[5%]">Cat</td>
          <td className="w-[5%]">Día</td>
          <td className="w-[5%]">Horario</td>
          <td className="w-[9%]">Cancha</td>
          <td className="w-[10%]">Equipo 1</td>
          <td className="w-[10%]">Equipo 2</td>
          <td className="w-[5%]">Goles 1</td>
          <td className="w-[5%]">Goles 2</td>
          <td className="w-[13%]">Autores Equipo 1</td>
          <td className="w-[13%]">Autores Equipo 2</td>
          <td className='w-[8%]'></td>
          <td className='w-[8%]'></td>
        </tr>
      </thead>
      <tbody>
        {data.sort((a, b) => (a.fecha < b.fecha ? 1 : -1)).map((fecha, index) => (
          <tr key={fecha.id} className={`${index % 2 === 0 ? 'bg-[#eee]' : ''}`}>
            <td className='pl-[5px]'>{fecha.fecha}</td>
            <td className="text-red-700">{fecha.categoria}</td>
            <td>{fecha.dia}</td>
            <td>{fecha.horario}</td>
            <td>{fecha.cancha}</td>
            <td className="text-green-700">{fecha.equipo1}</td>
            <td className="text-green-700">{fecha.equipo2}</td>
            <td>{fecha.golesEquipo1}</td>
            <td>{fecha.golesEquipo2}</td>
            <td>{fecha.autoresEquipo1}</td>
            <td>{fecha.autoresEquipo2}</td>
            <td><a href={`/admin/fechas/modificar/${fecha.id}`} className="text-blue-500">Modificar</a></td>
            <td className='pr-[5px]'>
              <button 
                onClick={e => handleDelete(e,fecha.id)} 
                className="text-red-700">
                  Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}
