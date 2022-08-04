import { PokemonList } from '@/components/pokemon/list';
import { Card } from '@/components/shared/card';
import { Layout } from '@/components/shared/layout';
import { TeamFormCard } from '@/components/teams/form-card';

export default function TeamIndex() {
  const team = {
    id: '',
    name: 'Ash',
    trainerId: '',
    pokemon: [{ id: '', apiId: '', name: '', imageUrl: '', teamId: '' }],
  };

  return (
    <Layout>
      <div className='flex flex-row gap-x-5 pt-5'>
        <TeamFormCard className='min-w-[25%] shrink' team={team}></TeamFormCard>
        <Card className='grow'>
          <PokemonList pokemon={team.pokemon}></PokemonList>
        </Card>
      </div>
    </Layout>
  );
}
