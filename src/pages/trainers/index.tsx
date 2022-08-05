import { db } from '@/database';
import { Trainer } from '@/database/models';

import { Layout } from '@/components/shared/layout';
import { TrainersList } from '@/components/trainers/list';

export default function TrainersIndex({ trainers }: { trainers: Trainer[] }) {
  return (
    <Layout>
      <div className='pt-5'>
        <TrainersList trainers={trainers}></TrainersList>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.adapter.connect();

  const trainers = await db.adapter.getTrainers();

  return {
    props: {
      trainers: JSON.parse(JSON.stringify(trainers)),
    }, // will be passed to the page component as props
  };
}
