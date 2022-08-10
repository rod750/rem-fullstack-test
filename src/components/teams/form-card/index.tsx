import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';
import { Input } from '@/components/shared/input';
import { TrainerContext } from '@/contexts/trainer';

import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useFormContext } from "react-hook-form";

type TeamFormCardProps = React.PropsWithChildren &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TeamFormCard({ ...props }: TeamFormCardProps) {
  const router = useRouter();
  const { trainer, loading, saveTrainer } = useContext(TrainerContext);
  const { register } = useFormContext();

  if (loading) {
    return null;
  }

  const teamIndex = parseInt(router.query.teamId as string)

  const team = trainer.teams[teamIndex];

  if (!team) {
    return null;
  }

  return (
    <Card {...props}>
      <div className='flex-items-center flex flex-col gap-y-6'>
        <Input name={`teams.${teamIndex}.name`} label='Nombre' defaultValue={team.name} register={register}></Input>
        <Button onClick={() => saveTrainer()}>Guardar</Button>
      </div>
    </Card>
  );
}
