import Image from 'next/image'

export const TeamInfo = ({team,index}) => {
  return (
    <tr className={`border-[#000] border border-l-0 md:text-lg ${index % 2 == 0 ? 'bg-[#eee]' : ''}`} key={team.equipo}>
        <td className={`text-white ${(index + 1) < 13 ? (index + 1) < 5 ? 'bg-[#156e2a]' : 'bg-[#2ae355]' : 'bg-[#e72a2a]'}`}>{index + 1}</td>
        <td className='flex md:w-[350px]'><Image width={36} height={36} alt={team.equipo} className='md:mx-[20px] mx-[10px]' src={team.logo} /><p className='py-[5px]'>{team.equipo}</p></td>
        <td className='w-[30px] font-bold'>{team.puntos}</td>
        <td className='w-[30px]'>{team.partidosJugados}</td>
        <td className='w-[30px]'>{team.partidosGanados}</td>
        <td className='w-[30px]'>{team.partidosEmpatados}</td>
        <td className='w-[30px]'>{team.partidosPerdidos}</td>
        <td className='w-[30px]'>{team.golesFavor}</td>
        <td className='w-[30px]'>{team.golesContra}</td>
        <td className='w-[40px] pr-[5px]'>{team.golesFavor - team.golesContra}</td>
    </tr>
  )
}
