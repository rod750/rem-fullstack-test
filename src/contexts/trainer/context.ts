import { Trainer } from "@/database/models";
import { createContext, MutableRefObject } from "react";

export const TrainerContext = createContext<{
  loading: boolean,
  trainer: Trainer,
  updateTeam: Function,
  saveTrainer: Function
}>({
  loading: true,
  trainer: new Trainer({}),
  updateTeam: () => { },
  saveTrainer: () => { }
});