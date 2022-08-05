import { Trainer } from '@/database/models';

import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';

type TrainerCardProps = React.PropsWithChildren<{
  trainer: Trainer;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TrainerCard({ trainer, ...props }: TrainerCardProps) {
  return (
    <Card imageUrl={trainer.imageUrl} {...props}>
      <div className='flex-items-center flex'>
        <div className='grow self-center align-middle text-sm font-bold text-black'>
          {trainer.name}
        </div>
        <Button>Editar</Button>
      </div>
    </Card>
  );
}
