import { api } from "@/api";
import { PokemonContext } from "@/contexts/pokemon/context";
import { Item, Pokemon } from "@/database/models";
import { ReactNode, useEffect, useState } from "react";

export function PokemonContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ loading: boolean, pokemon: Pokemon[], items: Item[] }>({ loading: false, pokemon: [], items: [] });

  useEffect(() => {
    const getData = async () => {
      const pokemon = await api.adapter.getPokemon();
      const items = await api.adapter.getItems();

      setState({ ...state, pokemon, items });
    };

    getData();
  }, []);

  return (
    <PokemonContext.Provider value={state}>
      {children}
    </PokemonContext.Provider>
  );
}