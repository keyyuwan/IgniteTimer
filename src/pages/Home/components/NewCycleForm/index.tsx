import { useFormContext } from "react-hook-form";

import { useCycles } from "../../../../hooks/useCycles";

import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

export function NewCycleForm() {
  const { register } = useFormContext();
  const { activeCycle } = useCycles();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-sugestions">
        <option value="Projeto 01" />
        <option value="Projeto 02" />
        <option value="Projeto Dorper" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
