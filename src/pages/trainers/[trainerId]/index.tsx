import { Card } from '@/components/shared/card';
import { Layout } from '@/components/shared/layout';
import { TeamList } from '@/components/teams/list';
import { TrainerFormCard } from '@/components/trainers/form-card';

export default function TrainersDetail() {
  const trainer = { id: '', name: 'Ash', password: '1111', imageUrl: '' };

  return (
    <Layout>
      <div className='flex flex-row gap-x-5 pt-5'>
        <TrainerFormCard
          className='min-w-[25%] shrink'
          trainer={trainer}
        ></TrainerFormCard>
        <Card className='grow'>
          <TeamList trainerId={trainer.id}></TeamList>
        </Card>
      </div>
    </Layout>
  );
}
