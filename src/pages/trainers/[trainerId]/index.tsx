import { api } from '@/api';
import { Card } from '@/components/shared/card';
import { Layout } from '@/components/shared/layout';
import { TeamList } from '@/components/teams/list';
import { TrainerFormCard } from '@/components/trainers/form-card';
import { TrainerContext, TrainerContextProvider } from '@/contexts/trainer';
import { Trainer } from '@/database/models';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export default function TrainersDetail() {
  const router = useRouter();

  return (
    <Layout>
      <TrainerContextProvider trainerId={router.query.trainerId as string}>
        <div className='flex flex-row gap-x-5 pt-5'>
          <TrainerFormCard
            className='min-w-[25%] shrink'
          ></TrainerFormCard>
          <Card className='grow'>
            <TeamList></TeamList>
          </Card>
        </div>
      </TrainerContextProvider>
    </Layout>
  );
}
