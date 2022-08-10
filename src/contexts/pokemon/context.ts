import { Item, Pokemon } from "@/database/models";
import { createContext } from "react";

export const PokemonContext = createContext<{ pokemon: Pokemon[], items: Item[], loading: boolean }>({ pokemon: [], items: [], loading: false });