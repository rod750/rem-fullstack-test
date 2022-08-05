import { db } from '@/database';
import { Trainer } from '@/database/models';

import { Layout } from '@/components/shared/layout';
import { TrainersList } from '@/components/trainers/list';
import { useEffect, useState } from 'react';
import { api } from '@/api';

export default function TrainersIndex() {
  const [state, setState] = useState<{ trainers: Trainer[] }>({ trainers: [] });

  useEffect(() => {
    const getTeams = async () => {
      const trainers = await api.adapter.getTrainers();

      setState({ ...state, trainers });
    }

    getTeams();
  }, []);

  return (
    <Layout>
      <div className='pt-5'>
        <TrainersList trainers={state.trainers}></TrainersList>
      </div>
    </Layout>
  );
}