import Image from 'next/image';

export const ResultadoTabla = ({ fecha }) => {
    return (
        <>
            <tr className="text-sm md:text-lg" key={fecha.id}>
                <td className="w-1/6 bg-red-700 text-white p-1">
                    <p className="py-1">{fecha.dia}</p>
                    <p className="py-1">{fecha.horario}</p>
                    <p className="py-1">{fecha.cancha}</p>
                </td>
                <td className="w-1/3 py-2">
                    <div className="flex justify-center">
                        <Image width={40} height={40} alt={fecha.equipo1} className="mx-2 md:mx-5" src={fecha.logoEquipo1} />
                    </div>
                    <p className="truncate">{fecha.equipo1}</p>
                </td>
                <td className="w-1/8 text-2xl md:text-4xl">{fecha.golesEquipo1}</td>
                <td className="w-1/8 text-2xl md:text-4xl">{fecha.golesEquipo2}</td>
                <td className="w-1/3 py-2">
                    <div className="flex justify-center">
                        <Image width={40} height={40} alt={fecha.equipo2} className="mx-2 md:mx-5" src={fecha.logoEquipo2} />
                    </div>
                    <p className="truncate">{fecha.equipo2}</p>
                </td>
            </tr>
            <tr className="bg-gray-100 text-sm md:text-lg">
                <td className="w-1/6 py-2">GOLES ⚽️</td>
                <td className="w-1/3 py-2">{fecha.autoresEquipo1}</td>
                <td className="w-1/8 py-2"></td>
                <td className="w-1/8 py-2"></td>
                <td className="w-1/3 py-2">{fecha.autoresEquipo2}</td>
            </tr>
        </>
    );
};