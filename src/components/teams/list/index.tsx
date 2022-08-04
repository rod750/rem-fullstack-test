import { Button } from '@/components/shared/button';
import { TeamCard } from '@/components/teams/card';

export function TeamList({ trainerId }: { trainerId: string }) {
  return (
    <div className=''>
      <div className='flex pb-5'>
        <span className='flex-grow text-base font-bold text-black'>
          Equipos
        </span>
        <Button opaque>Añadir Nuevo</Button>
      </div>
      <div className='grid gap-y-3'>
        <TeamCard
          team={{ trainerId: trainerId, pokemon: [], name: 'Fuego' }}
        ></TeamCard>
        <TeamCard
          team={{ trainerId: trainerId, pokemon: [], name: 'Fuego' }}
        ></TeamCard>
        <TeamCard
          team={{ trainerId: trainerId, pokemon: [], name: 'Fuego' }}
        ></TeamCard>
        <TeamCard
          team={{ trainerId: trainerId, pokemon: [], name: 'Fuego' }}
        ></TeamCard>
        <TeamCard
          team={{ trainerId: trainerId, pokemon: [], name: 'Fuego' }}
        ></TeamCard>
      </div>
    </div>
  );
}
