import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';
import { Input } from '@/components/shared/input';

import { Team } from '@/database/models';

type TeamFormCardProps = React.PropsWithChildren<{
  team: Team;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function TeamFormCard({ team, ...props }: TeamFormCardProps) {
  return (
    <Card {...props}>
      <div className='flex-items-center flex flex-col gap-y-6'>
        <Input label='Nombre' defaultValue={team.name}></Input>
        <Button>Editar</Button>
      </div>
    </Card>
  );
}
