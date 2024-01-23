export type AreaDataType = {
  pm10Value: string;
  pm25Value: string;
};

// setState에 대한 타입 정의
export type SetStateType = React.Dispatch<
  React.SetStateAction<{
    state: string;
    img: string;
  }>
>;
