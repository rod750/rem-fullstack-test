import { PokemonContext } from "@/contexts";
import { useContext } from "react";


export function PokemonSelect({ defaultValue, onChange }: { defaultValue?: number, onChange?: Function }) {
  const { pokemon, loading } = useContext(PokemonContext);

  const handleOnChange = (e: any) => {
    onChange && onChange(pokemon.find(p => p.apiId == e.target.value));
  }

  if (loading) {
    return (
      <select disabled>
        <option>Cargando...</option>
      </select>
    );
  }

  return (
    <select onChange={handleOnChange}>
      <option>Selecciona un pokemon...</option>
      {pokemon.map(p => <option selected={defaultValue === p.apiId} key={p.apiId} value={p.apiId}>{p.name}</option>)}
    </select>
  );
}