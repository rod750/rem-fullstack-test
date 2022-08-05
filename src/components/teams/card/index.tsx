import { Button } from '@/components/shared/button';
import { Card } from '@/components/shared/card';
import { CircleDisplay } from '@/components/shared/circle-display';

import { Team } from '@/database/models';
import Link from 'next/link';

export function TeamCard({ team, teamIndex }: { team: Team, teamIndex: number }) {


  return (
    <Card backgroundColor='#3B7FD3'>
      <div className='flex flex-row pb-3'>
        <span className='grow text-base font-bold text-white'>{team.name}</span>
        <Link href={`${window.location.href}/teams/${teamIndex}`}><Button opaque>Editar</Button></Link>
      </div>
      <div className='flex gap-5'>
        {team.pokemon.map(p => (<CircleDisplay imageUrl={p.imageUrl}></CircleDisplay>))}
      </div>
    </Card>
  );
}
