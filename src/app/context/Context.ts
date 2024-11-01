import {
  // Signal,
  signal,
} from "@preact/signals-react";
interface IProgressBarState{
  inProgress: boolean;
  currentStep: number;
  done: number;
} 

interface IAuthUser {
  name: string;
  email: string;
  password: string;
}

export const userCredentialsSignal = signal<IAuthUser>({
  name: "",
  email: "",
  password: "",
});

type IAuthUserWithoutName = Omit<IAuthUser, "name">;

export const ProgressBarSignal = signal<number>();

export const conectedStore = signal<string[]>([]);

export const progressBarStatusSignal = signal<IProgressBarState>({
  currentStep: 1,
  inProgress: true,
  done: 0,
});

export const logedInSignal = signal<IAuthUserWithoutName>({ email: "", password: "" });
