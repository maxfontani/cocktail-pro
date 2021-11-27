export type Props = {
  title: string;
  type: "signup" | "register";
  submitFormHandler: (data: any) => void;
};

export type FormValues = {
  login: string;
  password: string;
};
