import { InputContext } from '@/components/Input';
import { useContext } from 'react';

const useInputContext = () => {
  const context = useContext(InputContext);

  if (context === undefined) {
    throw new Error('<Input /> 태그 안에서 사용해주세요.');
  }
  return context;
};

export default useInputContext;
