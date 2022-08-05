import { Card } from '@/components/shared/card';
import { CircleDisplay } from '@/components/shared/circle-display';
import { Picker } from '@/components/shared/picker';
import { ItemSelect } from '@/components/teams/item-select';
import { PokemonSelect } from '@/components/teams/pokemon-select';

import { Pokemon } from '@/database/models';
import { useEffect, useState } from 'react';

export function PokemonSelector({ pokemon }: { pokemon?: Pokemon }) {
  const [state, setState] = useState<{ pokemon: Pokemon | undefined }>({ pokemon: undefined })

  useEffect(() => {
    if (!state.pokemon) {
      setState({ ...state, pokemon });
    }
  }, [pokemon])

  const onPokemonChange = (pokemon: Pokemon) => {
    setState({ ...state, pokemon });
  }

  return (
    <Card backgroundColor='#3B7FD3'>
      <div className='flex flex-row gap-4'>
        <CircleDisplay imageUrl={state.pokemon?.imageUrl || ""}></CircleDisplay>
        <PokemonSelect onChange={onPokemonChange} defaultValue={state.pokemon?.apiId}></PokemonSelect>
        <ItemSelect defaultValue={state.pokemon?.item?.apiId}></ItemSelect>
      </div>
    </Card>
  );
}
