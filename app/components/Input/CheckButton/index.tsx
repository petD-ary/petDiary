import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";

// const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-left: 8px;
//   /* 숨겨진 기본 체크박스 숨기기 */
//   input[type="checkbox"] {
//     display: none;
//   }

//   /* 커스텀 체크박스 스타일링 */
//   label[for="customCheckbox"] {
//     display: inline-block;
//     padding: 0;
//     width: 22px;
//     height: 22px;
//     margin-right: 8px;
//     background-color: #f0f0f0;
//     border-radius: 6px;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 900;
//   }
// `;

interface InputProps {
  label: string;
  checked: boolean;
  setState: (value: boolean) => void;
}

const CheckButton = ({ label, checked, setState }: InputProps) => {
  return (
    <div className="flex items-center ml-5">
      <input
        type="checkbox"
        id="customCheckbox"
        checked={checked}
        onChange={(e) => setState(e.target.checked)}
        className="hidden"
      />
      <label
        htmlFor="customCheckbox"
        className="w-8 h-8 mr-5 rounded bg-grayColor-100 font-semibold flex justify-center items-center"
      >
        {checked ? <BsCheckLg /> : null}
      </label>
      <label>{label}</label>
    </div>
  );
};

export default CheckButton;
