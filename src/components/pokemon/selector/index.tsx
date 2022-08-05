import { Card } from '@/components/shared/card';
import { CircleDisplay } from '@/components/shared/circle-display';
import { Picker } from '@/components/shared/picker';

import { Pokemon } from '@/database/models';

export function PokemonSelector({ pokemon }: { pokemon?: Pokemon }) {
  const pokemonValue = pokemon ? { label: pokemon.name, value: pokemon } : undefined;
  const itemValue = pokemon?.item ? { label: pokemon.item.name, value: pokemon.item } : undefined;

  return (
    <Card backgroundColor='#3B7FD3'>
      <div className='flex flex-row gap-4'>
        <CircleDisplay imageUrl={pokemon?.imageUrl || ""}></CircleDisplay>
        <Picker label='Selecciona un Pokemon...' defaultValue={pokemonValue}></Picker>
        <Picker label='Selecciona un Item...' defaultValue={itemValue}></Picker>
      </div>
    </Card>
  );
}
