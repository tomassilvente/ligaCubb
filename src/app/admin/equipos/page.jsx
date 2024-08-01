'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { getEquipos } from "../../../server-actions/equipos/getEquipos";
import { deleteEquipo } from "../../../server-actions/equipos/deleteEquipo";

import Image from "next/image";

export default function AdminEquipos(){

    const router = useRouter()

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchEquipos = async () => {
            const equipos = await getEquipos();
            if (equipos) setData(equipos);
        };
        fetchEquipos();
    }, []);

    const handleDelete = (e,equipo) =>{
        e.preventDefault()
        
        let eliminar = confirm(`Realmente desea eliminar a ${equipo.equipo}`)
        if(eliminar){
            let res = deleteEquipo(equipo)
            router.refresh()
        }
        else return  
    }

  return (
    <div className=" text-white">
    <div suppressHydrationWarning={true} className='justify-center flex py-12'>
            <table className="text-center bg-[#ddd] rounded-lg text-black mx-[5%]">
                <thead>
                    <tr className='text-lg h-12 bg-[#cbcbcb]'>
                        <th className='px-2'>Logo</th>
                        <th className='px-2'>Equipo</th>
                        <th className='px-2'>Categoría</th>
                        <th className="px-2 ">Puntos</th>
                        <th className="px-2 ">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.sort(function(a,b){
                            if(a.categoria > b.categoria) return 1
                            if(a.categoria < b.categoria) return -1
                        }).map((equipo, index) => (
                        <tr key={equipo.id} className={`text-lg ${index % 2 == 0 ? 'bg-[#eee]' : ''} `}>
                            <td className='px-2'><Image width={50} height={50} alt={equipo.equipo} src={equipo.logo} /></td>
                            <td className='px-2'>{equipo.equipo}</td>
                            <td className='px-2'>{equipo.categoria}</td>
                            <td className='px-2'>{equipo.puntos}</td>
                            <td className='px-2 flex justify-around mt-[10px]'>
                                <a href={`/admin/equipos/modificar/${equipo.id}`} className="text-blue-500">Modificar</a>
                                <button 
                                    onClick={e => handleDelete(e,equipo)} 
                                    className="text-red-700 ml-5">
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
