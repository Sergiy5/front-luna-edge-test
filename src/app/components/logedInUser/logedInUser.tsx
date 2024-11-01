"use client";

import { progressBarStatusSignal, userCredentialsSignal } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import { InfoStep } from "../infoStep/InfoStep";

export const LogedInUser: React.FC = () => {
  const router = useRouter();
    progressBarStatusSignal.value.currentStep = 1;

  
  if (userCredentialsSignal.value.name.length === 0) {
    router.replace("/account-setup");
  }

  return (
    <div className="flex items-center flex-col gap-6 w-full h-32  ">
      <InfoStep
        text={`Hello Luna Edge, My name is ${userCredentialsSignal.value.name}.`}
        title="Welcome"
      />
    </div>
  );
};
