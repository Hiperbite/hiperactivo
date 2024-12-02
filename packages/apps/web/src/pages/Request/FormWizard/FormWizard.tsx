
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";


const steps = [
    { component: Step1, title: "Qual é a sua Marca?" },
    { component: Step2, title: "Informações do produto" },
    { component: Step3, title: "Proprietário" },
    { component: Step4, title: "Autehnticação" },
];

export default function FormWizard() {
    const methods = useForm();

  const { trigger, handleSubmit, register, formState: { errors } } = methods;
    const [stepIndex, setStepIndex] = useState(0);

    const isLastStep = stepIndex === steps.length - 1;
    const CurrentStep = steps[stepIndex].component;

    const handleNext = async () => {
        const isValid = await trigger(); // Valida os campos da etapa atual
        if (isValid) {
          setStepIndex((prev) => prev + 1);
        }
      };

    const handleBack = () => {
        setStepIndex((prev) => prev - 1);
    };

    const onSubmit = (data: any) => {
        console.log("Form Data: ", data);
        alert("Formulário enviado!");
    };

    return (
        <FormProvider {...methods}>
            <pre>{JSON.stringify(errors?.name,null,1)}</pre>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4 className="">{stepIndex + 1}. {steps[stepIndex].title}</h4>
                <CurrentStep register={register} />

                <div className="footer-form-button-wrap" style={{ marginTop: "20px" }}>

                    {stepIndex > 0 && <button className="footer-button w-button" type="button" onClick={handleBack}>Voltar</button>}
                    {isLastStep ? (
                        <button className="footer-button w-button" style={{ backgroundColor: '#094' }} type="submit">Enviar</button>
                    ) : (
                        <button className="footer-button w-button" type="button" onClick={handleNext}>Próximo</button>
                    )}
                </div>
            </form>
        </FormProvider>
    );
}