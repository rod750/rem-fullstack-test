import { api } from "@/api";
import { TrainerContext } from "@/contexts/trainer/context";
import { Team, Trainer } from "@/database/models";
import { ReactNode, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

export function TrainerContextProvider({ children, trainerId }: { children: ReactNode, trainerId: string }) {

  const [state, setState] = useState<{ trainer: Trainer, loading: boolean }>({ trainer: new Trainer({}), loading: true });
  const methods = useForm();

  useEffect(() => {
    if (trainerId) {
      const getTrainer = async () => {
        const trainer = await api.adapter.getTrainer(trainerId);
        setState({ ...state, trainer, loading: false });
        methods.setValue("name", trainer.name);
        methods.setValue("teams", trainer.teams);
      };

      getTrainer();
    }
  }, [trainerId]);

  const updateTeam = ({ index, team }: { index: number, team: Team }) => {
    if (state.trainer) {
      state.trainer.teams[index] = team;
    }
  };

  const saveTrainer = () => {
    methods.handleSubmit((data: any) => {
      data.id = trainerId;
      api.adapter.updateTrainer(data);
    })();
  }

  return (
    <FormProvider {...methods}>
      <TrainerContext.Provider value={{ updateTeam, saveTrainer, ...state }}>
        {children}
      </TrainerContext.Provider>
    </FormProvider>
  );
}
