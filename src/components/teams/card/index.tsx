import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';
import { CircleDisplay } from '@/components/shared/circle-display';

import { Team } from '@/database/models';

export function TeamCard({ team }: { team: Team }) {
  return (
    <Card backgroundColor='#3B7FD3'>
      <div className='flex flex-row pb-3'>
        <span className='grow text-base font-bold text-white'>{team.name}</span>
        <Button opaque>Editar</Button>
      </div>
      <div className='flex gap-5'>
        <CircleDisplay imageUrl=''></CircleDisplay>
        <CircleDisplay imageUrl=''></CircleDisplay>
        <CircleDisplay imageUrl=''></CircleDisplay>
        <CircleDisplay imageUrl=''></CircleDisplay>
        <CircleDisplay imageUrl=''></CircleDisplay>
        <CircleDisplay imageUrl=''></CircleDisplay>
      </div>
    </Card>
  );
}
