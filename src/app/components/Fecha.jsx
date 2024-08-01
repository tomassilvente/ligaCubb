'use client';
import { useEffect, useState } from 'react';
import { getFechas } from '../../server-actions/fechas/getFechas';
import { ResultadoTabla } from './ResultadoTabla';

export const Fecha = ({ cat }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchFechas = async () => {
            const equipos = await getFechas();
            if (equipos){ 
                setData(equipos)
            };
        };
        fetchFechas();
    }, []);


    let fechas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [fecha, setFecha] = useState(12);

    const handleFecha = (fec) => {
        setFecha(fec);
    };

    (cat === 'E' || cat ==='FEMC') ? fechas = [8,9,10,11,12,13,14] : ''

    return (
        <div className={`${data.length == 0 ? 'hidden' : 'block'}`}>
            <div  
            className="flex flex-wrap justify-center gap-x-2 gap-y-2 mx-5 py-6 sm:pt-[5%] pt-[25%]">
                {fechas.map((fecha) => (
                    <button
                        onClick={() => handleFecha(fecha)}
                        key={fecha}
                        className="text-black bg-gray-100 mx-2 px-4 py-2 rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-200 shadow-lg animate__animated animate__bounceInUp"
                    >
                        {fecha}
                    </button>
                ))}
            </div>
            <h2 className="text-center text-5xl mt-10">Fecha {fecha}</h2>
            <div className="justify-center flex text-black py-12 w-full">
            <table className="text-center bg-gray-200 lg:w-3/5 w-full mx-auto shadow-lg animate__animated animate__fadeInUp overflow-x-auto">
                <tbody>
                    {data
                        .filter((date) => date.fecha === fecha && date.categoria === cat)
                        .map((fecha) => (
                            <ResultadoTabla fecha={fecha} key={fecha.equipo1} />
                        ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};
