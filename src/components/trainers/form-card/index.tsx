import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';
import { Input } from '@/components/shared/input';
import { TrainerContext } from '@/contexts/trainer';

import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

type TrainerFormCardProps = React.PropsWithChildren & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TrainerFormCard({ ...props }: TrainerFormCardProps) {
  const { trainer, loading, saveTrainer } = useContext(TrainerContext);
  const { register } = useFormContext();

  if (loading) {
    return null;
  }

  return (
    <Card imageUrl={trainer.imageUrl} {...props}>
      <div className='flex-items-center flex flex-col gap-y-6'>
        <Input register={register} name="name" label='Nombre' defaultValue={trainer.name}></Input>
        <Input register={register} name="password" label='Contraseña' defaultValue={trainer.password}></Input>
        <Button onClick={() => { saveTrainer() }}>Guardar</Button>
      </div>
    </Card>
  );
}
