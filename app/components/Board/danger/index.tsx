'use client';
import ListHeader from '@/components/Board/BoardList/Header';
import BoardList from '@/components/Board/BoardList/List';
import FilterCategory from '@/components/Board/Filter/FilterCategory';

let danger = ['전체', '강아지', '고양이'];

const mockData = [
  {
    id: 1,
    substance: '과일씨',
    symptoms: '구토, 복막염, 설사, 소화기 궤양, 장페색',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 2,
    substance: '마늘',
    symptoms:
      '구토, 무력감, 빈혈로 휘청거림, 설사, 식욕부진, 호흡곤란 / 혈뇨 : 간장색, 갈색, 적색',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 3,
    substance: '마카다미아',
    symptoms:
      '고열, 구토, 권태감, 복통, 무기력, 비틀거림, 소화불량, 설사, 충혈',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 4,
    substance: '아보카도',
    symptoms:
      '구토, 경련, 보랏빛 혀, 복통, 붉은 가래, 붓기, 설사, 식욕저하, 축축한 기침, 호흡 곤란',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 5,
    substance: '알코올',
    symptoms:
      '강한 갈증, 경련,구토, 고열, 발작, 불규칙한 심장 박동, 불안과 과민성, 비틀거림, 설사, 호흡 곤란',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 6,
    substance: '양파',
    symptoms: '구토, 무기력감, 설사, 식용부진, 용혈성 빈혈, 호흡 곤란',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 7,
    substance: '익힌 닭 뼈',
    symptoms: '구토, 변비, 복통, 설사, 식욕부진, 혈변, 호흡 곤한',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 8,
    substance: '자일리톨',
    symptoms: '구토, 기력저하, 발작, 설사, 심부전, 저혈당 쇼크',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 9,
    substance: '초콜릿',
    symptoms: '구토, 경련, 발열, 발작, 빈맥, 설사, 호흡 곤란',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
  {
    id: 10,
    substance: '카페인',
    symptoms:
      '경련, 구토, 근육 보조화, 과호흡, 불규칙한 혈압, 불안과 과민성, 불안정한 중추신경계 · 무의식 상태 · 혼수상태 등의 심각한 증상, 설사, 심장 박동 수 증가',
    petType: '강아지 · 고양이',
    risk: '높음',
  },
];

const Danger = () => {
  return (
    <>
      <FilterCategory filterItem={danger} />
      <ListHeader title='위험 음식' />
      <BoardList
        substance='음식명'
        effect='먹은 후 나타나는 증상'
        mockData={mockData}
      />
    </>
  );
};

export default Danger;
