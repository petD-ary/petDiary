'use client';
import ListHeader from '@/components/Board/BoardList/Header';
import BoardList from '@/components/Board/BoardList/List';
import FilterCategory from '@/components/Board/Filter/FilterCategory';
let disease = ['전체', '강아지', '고양이', ' 위험도 낮은 순', '위험도 높은순'];

const mockData = [
  {
    id: 1,
    substance: '3안검의 돌출 (체리아이)',
    symptoms: '눈 아래 눈꺼풀이 돌출됨, 빨갛게 충혈된 눈',
    petType: '강아지',
    risk: '보통',
  },
  {
    id: 2,
    substance: '각막염',
    symptoms:
      '노란색 또는 녹색 눈곱, 빨갛게 충혈된 눈, 투명하지 않은 과도한 눈물',
    petType: '강아지',
    risk: '보통',
  },
  {
    id: 3,
    substance: '간 문맥 단락',
    symptoms:
      '계속 한자리에서 빙글빙글 돔, 무기력증, 발작, 식사거부, 식욕저하, 자꾸 벽에 부딪침, 최근 체중 감소',
    petType: '강아지',
    risk: '높음',
  },
  {
    id: 4,
    substance: '간부전',
    symptoms:
      '계속 한자리에서 빙글빙글 돔, 노란색 변, 노란색 잇몸 또는 혀, 무기력증, 발작, 벽에 머리를 박고 밀고 있음, 복부팽만, 붉은색 변, 식사거부, 식욕저하, 자꾸 벽에 부딪침 ···',
    petType: '강아지',
    risk: '높음',
  },
  {
    id: 5,
    substance: '간성뇌증',
    symptoms:
      '계속 한자리에서 빙글빙글 돔, 무기력증, 발작, 벽에 머리를 박고 밀고 있음, 복부팽만, 발작, 아무 곳에나 자주 소변을 흘리고 다님, 최근 체중 감소',
    petType: '강아지',
    risk: '높음',
  },
  {
    id: 6,
    substance: '간염',
    symptoms:
      '계속 몸을 떨고 있음, 노란색 또는 녹색 눈곱, 노란색 변, 노란색 잇몸 또는 혀, 무기력증, 발작, 식사거부, 식욕저하, 짙은 갈색(콜라색) 소변, 투명하지 않은 과도한 눈물 ···',
    petType: '강아지',
    risk: '높음',
  },
  {
    id: 7,
    substance: '갑상선 기능 저하증',
    symptoms:
      '갑자기 공격적으로 변함, 계속 몸을 떨고 있음, 식욕저하, 최근 체중 증가, 피부에 붉은 반점, 털 빠짐, 하얀색 잇몸 또는 혀',
    petType: '강아지',
    risk: '높음',
  },
  {
    id: 8,
    substance: '갑상선 기능 항진증',
    symptoms:
      '과식, 물 같은 변, 설사, 최근 체중 감소, 평소보다 많은 물 마시기, 호흡 곤란',
    petType: '강아지',
    risk: '높음',
  },
  {
    id: 9,
    substance: '개선충증',
    symptoms: '피부에 붉은 반점, 피부에 딱지, 털 빠짐',
    petType: '강아지',
    risk: '보통',
  },
  {
    id: 10,
    substance: '뇌전증(간질)',
    symptoms: '계속 몸을 떨고 있음, 발작, 자꾸 벽에 부딪침, 호흡 곤란',
    petType: '강아지',
    risk: '높음',
  },
];

const Disease = () => {
  return (
    <>
      <FilterCategory filterItem={disease} />
      <ListHeader title='질병사전' />
      <BoardList substance='진단명' effect='증상' mockData={mockData} />
    </>
  );
};

export default Disease;
