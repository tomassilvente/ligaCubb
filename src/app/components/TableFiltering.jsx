import { TableHead } from './TableHead'
import { TeamInfo } from './TeamInfo'

export const TableFiltering = ({data, category, zona}) => {
  return (
    <table className='text-center bg-[#ddd] rounded-lg z-10 py-[30px] animate__animated animate__fadeInUp'>
        <TableHead />
        {data.filter((team) => team.categoria === category && team.zona == zona).sort(function(a,b){
            if(a.puntos < b.puntos) return 1
            if(a.puntos > b.puntos) return -1
            if((a.golesFavor - a.golesContra) < (b.golesFavor - b.golesContra)) return 1
            else return -1
        }).map((team, index) =>
        (
            <TeamInfo key={team.team} index={index} team={team} />
        )
        )}
    </table>
  )
}
