import { Button } from '@/components/shared/button';
import { TeamCard } from '@/components/teams/card';
import { Team } from '@/database/models';

export function TeamList({ teams }: { teams: Team[] }) {
  return (
    <div className=''>
      <div className='flex pb-5'>
        <span className='flex-grow text-base font-bold text-black'>
          Equipos
        </span>
        <Button opaque>Añadir Nuevo</Button>
      </div>
      <div className='grid gap-y-3'>
        {teams.map(t => (<TeamCard team={t}></TeamCard>))}
      </div>
    </div>
  );
}
