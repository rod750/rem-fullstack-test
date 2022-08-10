import { api } from "@/api";
import { PokemonContext } from "@/contexts";
import { Item } from "@/database/models"
import { useContext, useEffect, useState } from "react"

export function ItemSelect({ defaultValue, onChange }: { defaultValue?: number, onChange: Function }) {
  const { items, loading } = useContext(PokemonContext);

  const handleOnChange = (e: any) => {
    onChange && onChange(items.find(p => p.apiId == e.target.value));
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
      <option>Selecciona un item...</option>
      {items.map(p => <option selected={defaultValue === p.apiId} key={p.apiId} value={p.apiId}>{p.name}</option>)}
    </select>
  );
}