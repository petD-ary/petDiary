import { modalState } from '@/recoil/Modal/atom';
import { useRecoilState } from 'recoil';

export const useModal = () => {
  const [modalList, setModal] = useRecoilState(modalState);

  const addModal = (value: string) => {
    console.log(value);
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
    modalList,
  };
};
