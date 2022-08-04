import { Layout } from '@/components/shared/layout';
import { TrainersList } from '@/components/trainers/list';

export default function TrainersIndex() {
  return (
    <Layout>
      <div className='pt-5'>
        <TrainersList></TrainersList>
      </div>
    </Layout>
  );
}
