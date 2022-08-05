import { Trainer } from '@/database/models';

import { TrainerCard } from '@/components/trainers/card';

export function TrainersList({ trainers }: { trainers: Trainer[] }) {
  return (
    <div className='w-100 grid grid-cols-4'>
      {trainers.map((t) => (
        <TrainerCard key={t.id} trainer={t}></TrainerCard>
      ))}
    </div>
  );
}
