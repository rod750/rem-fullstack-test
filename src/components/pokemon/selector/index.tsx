import { Card } from '@/components/shared/card';
import { CircleDisplay } from '@/components/shared/circle-display';
import { Picker } from '@/components/shared/picker';
import { ItemSelect } from '@/components/teams/item-select';
import { PokemonSelect } from '@/components/teams/pokemon-select';

import { Item, Pokemon } from '@/database/models';
import { useEffect, useState } from 'react';

export function PokemonSelector({
  pokemon,
  onChange
}: {
  pokemon?: Pokemon,
  onChange?: Function
}) {
  const [state, setState] = useState<{ pokemon: Pokemon | any }>({ pokemon: undefined })

  useEffect(() => {
    setState({ pokemon });
  }, [pokemon])

  const onPokemonChange = (pokemon: Pokemon) => {
    if (state.pokemon.item) {
      pokemon.item = state.pokemon.item;
    }

    setState({ ...state, pokemon });
    onChange && onChange(pokemon);
  }

  const onItemChange = (item: Item) => {
    const pokemon = { ...state.pokemon, item: item };

    setState({ ...state, pokemon });
    onChange && onChange(pokemon);
  }

  return (
    <Card backgroundColor='#3B7FD3'>
      <div className='flex flex-row gap-4'>
        <CircleDisplay imageUrl={state.pokemon?.imageUrl || ""}></CircleDisplay>
        <PokemonSelect onChange={onPokemonChange} defaultValue={state.pokemon?.apiId}></PokemonSelect>
        <ItemSelect onChange={onItemChange} defaultValue={state.pokemon?.item?.apiId}></ItemSelect>
      </div>
    </Card>
  );
}
