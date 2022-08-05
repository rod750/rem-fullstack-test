import { api } from "@/api";
import { Pokemon } from "@/database/models"
import { useEffect, useState } from "react"

export function PokemonSelect({ defaultValue, onChange }: { defaultValue?: number, onChange?: Function }) {
  const [state, setState] = useState<{ pokemon: Pokemon[] }>({ pokemon: [] });

  useEffect(() => {
    const getPokemon = async () => {
      const pokemon = await api.adapter.getPokemon();

      setState({ ...state, pokemon });
    };

    !state.pokemon.length && getPokemon();
  }, []);

  if (!state.pokemon.length) {
    return null;
  }

  const handleOnChange = (e: any) => {
    onChange && onChange(state.pokemon.find(p => p.apiId == e.target.value));
  }

  return (
    <select onChange={handleOnChange}>
      <option>Selecciona un pokemon...</option>
      {state.pokemon.map(p => <option selected={defaultValue === p.apiId} key={p.apiId} value={p.apiId}>{p.name}</option>)}
    </select>
  );
}