import { PokemonList } from '@/components/pokemon/list';
import { Card } from '@/components/shared/card';
import { Layout } from '@/components/shared/layout';
import { TeamFormCard } from '@/components/teams/form-card';
import { PokemonContextProvider } from '@/contexts';
import { TrainerContextProvider } from '@/contexts/trainer';
import { useRouter } from 'next/router';

export default function TeamIndex() {
  const router = useRouter();

  return (
    <Layout>
      <TrainerContextProvider trainerId={router.query.trainerId as string}>
        <div className='flex flex-row gap-x-5 pt-5'>
          <TeamFormCard className='min-w-[25%] shrink'></TeamFormCard>
          <Card className='grow'>
            <PokemonContextProvider>
              <PokemonList></PokemonList>
            </PokemonContextProvider>
          </Card>
        </div>
      </TrainerContextProvider>
    </Layout>
  );
}
