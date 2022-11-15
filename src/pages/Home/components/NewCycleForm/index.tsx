import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from "zod";
import { useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react"
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {

    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();
    
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                placeholder="Dê um nome para o seu projeto"
                list="task-suggestions"
                disabled={!!activeCycle}
                {...register("task")}
            />

            <datalist id="task-suggestions">
                <option value="Projeto A" />
                <option value="Projeto B" />
                <option value="Projeto C" />
                <option value="Projeto D" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register("minutesAmount", { valueAsNumber: true })}
            />
            <span>minutos.</span>
        </FormContainer>
    );
}
