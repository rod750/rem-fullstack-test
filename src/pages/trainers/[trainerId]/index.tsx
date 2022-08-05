import { api } from '@/api';
import { Card } from '@/components/shared/card';
import { Layout } from '@/components/shared/layout';
import { TeamList } from '@/components/teams/list';
import { TrainerFormCard } from '@/components/trainers/form-card';
import { Trainer } from '@/database/models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TrainersDetail() {
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

  return (
    <Layout>
      <div className='flex flex-row gap-x-5 pt-5'>
        <TrainerFormCard
          className='min-w-[25%] shrink'
          trainer={state.trainer}
        ></TrainerFormCard>
        <Card className='grow'>
          <TeamList teams={state.trainer.teams}></TeamList>
        </Card>
      </div>
    </Layout>
  );
}
