import { modalState } from "@/recoil/Modal/atom";
import { useSetRecoilState } from 'recoil';

export const useModal = () => {
  const setModal = useSetRecoilState(modalState);

  const addModal = (value: string) => {
    setModal((prevModal) => [...prevModal, value]);
  };

  const removeModal = () => {
    setModal((prevModal) => {
      const newModal = [...prevModal];
      newModal.pop();
      return newModal;
    });
  };

  return {
    addModal,
    removeModal,
  };
}