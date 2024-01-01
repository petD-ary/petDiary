import { atom } from "recoil";

interface PetInfoProps {
  name: string;
  born: string;
  together: string;
}

export const petInfoState = atom<PetInfoProps>({
  key: "petInfoState",
  default: {
    name: "",
    born: "",
    together: "",
  },
});


