import { PokemonSelector } from '@/components/pokemon/selector';
import { TrainerContext } from '@/contexts/trainer';
import { Pokemon } from '@/database/models';

import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export function PokemonList({ onChange }: { onChange?: Function }) {
  const router = useRouter();
  const { trainer, loading } = useContext(TrainerContext);
  const { control, trigger } = useFormContext();

  if (loading) {
    return null;
  }

  const teamIndex = parseInt(router.query.teamId as string);
  const team = trainer.teams[teamIndex];

  if (!team) {
    return null;
  }

  return (
    <div className='grid gap-y-3'>
      {team.pokemon.map((p, i) => (
        <Controller
          key={p.id}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState
          }) => <PokemonSelector onChange={(data: any) => onChange(data)} pokemon={p} key={p.id} />}
          name={`teams.${teamIndex}.pokemon.${i}`} />
      ))}
    </div>
  );
}
