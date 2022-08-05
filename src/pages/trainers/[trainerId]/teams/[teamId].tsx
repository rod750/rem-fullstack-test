import { api } from '@/api';
import { PokemonList } from '@/components/pokemon/list';
import { Card } from '@/components/shared/card';
import { Layout } from '@/components/shared/layout';
import { TeamFormCard } from '@/components/teams/form-card';
import { Trainer } from '@/database/models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TeamIndex() {
  const router = useRouter();
  const [state, setState] = useState<{ trainer: Trainer | undefined }>({ trainer: undefined });

  useEffect(() => {
    const getTrainer = async () => {
      const trainer = await api.adapter.getTrainer(router.query.trainerId as string);

      setState({ ...state, trainer });
    }

    getTrainer();
  }, [router.query.trainerId])

  if (!state.trainer) {
    return null;
  }

  const team = state.trainer.teams[parseInt(router.query.teamId as string)];

  if (!team) {
    throw new Error("Not found");
  }

  return (
    <Layout>
      <div className='flex flex-row gap-x-5 pt-5'>
        <TeamFormCard className='min-w-[25%] shrink' team={team}></TeamFormCard>
        <Card className='grow'>
          <PokemonList pokemon={team.pokemon}></PokemonList>
        </Card>
      </div>
    </Layout>
  );
}
