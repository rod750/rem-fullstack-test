import { Button } from '@/components/shared/button';
import { TeamCard } from '@/components/teams/card';
import { TrainerContext } from '@/contexts/trainer';
import { Team } from '@/database/models';
import { useContext } from 'react';

export function TeamList() {
  const { trainer, loading } = useContext(TrainerContext);

  if (loading) {
    return null;
  }

  return (
    <div className=''>
      <div className='flex pb-5'>
        <span className='flex-grow text-base font-bold text-black'>
          Equipos
        </span>
        <Button>Añadir Nuevo</Button>
      </div>
      <div className='grid gap-y-3'>
        {trainer.teams.map((t, index) => (<TeamCard team={t} teamIndex={index}></TeamCard>))}
      </div>
    </div>
  );
}
