import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';
import { Input } from '@/components/shared/input';

import { Trainer } from '@/database/models';

type TrainerFormCardProps = React.PropsWithChildren<{
  trainer: Trainer;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TrainerFormCard({ trainer, ...props }: TrainerFormCardProps) {
  return (
    <Card imageUrl={trainer.imageUrl} {...props}>
      <div className='flex-items-center flex flex-col gap-y-6'>
        <Input label='Nombre' defaultValue={trainer.name}></Input>
        <Input label='Contraseña' defaultValue={trainer.password}></Input>
        <Button>Editar</Button>
      </div>
    </Card>
  );
}
