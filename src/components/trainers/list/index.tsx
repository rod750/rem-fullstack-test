import { TrainerCard } from '@/components/trainers/card';

export function TrainersList() {
  return (
    <div className='w-100 grid grid-cols-4'>
      <TrainerCard name='Ash' imageUrl='./images/ash-card.png'></TrainerCard>
    </div>
  );
}
