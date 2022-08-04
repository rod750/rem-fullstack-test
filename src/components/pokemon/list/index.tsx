import { PokemonSelector } from '@/components/pokemon/selector';

import { Pokemon } from '@/database/models';

export function PokemonList({ pokemon }: { pokemon: Pokemon[] }) {
  return (
    <div className='grid gap-y-3'>
      {pokemon.map((p) => (
        <PokemonSelector key={p.id} pokemon={p}></PokemonSelector>
      ))}
    </div>
  );
}
