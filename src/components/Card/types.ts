import { ToggleFav } from "../../hooks/useUserData/types";

export type Props = {
  id: string;
  name: string;
  url: string;
  image: string;
  isFav: boolean;
};
