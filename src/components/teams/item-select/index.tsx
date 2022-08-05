import { api } from "@/api";
import { Item } from "@/database/models"
import { useEffect, useState } from "react"

export function ItemSelect({ defaultValue }: { defaultValue?: number }) {
  const [state, setState] = useState<{ items: Item[] }>({ items: [] });

  useEffect(() => {
    const getItems = async () => {
      const items = await api.adapter.getItems();

      setState({ ...state, items });
    };

    !state.items.length && getItems();
  }, []);

  return (
    <select>
      <option>Selecciona un item...</option>
      {state.items.map(p => <option selected={defaultValue === p.apiId} key={p.apiId} value={p.apiId}>{p.name}</option>)}
    </select>
  );
}