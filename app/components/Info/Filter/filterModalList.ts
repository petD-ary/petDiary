import { InfoTab } from '@/(home)/info/page';
import { MODAL_TYPE } from '@/components/Modal';
import {
  PetType,
  RiskType,
  SignalType,
  FoodCookType,
  SignalDepthType,
} from '@/recoil/Info/atoms';

export type FilterType = 'petType' | 'signal' | 'signalDepth' | 'food';
export type AlignType = 'risk';

interface FilterByTabType {
  tab: InfoTab;
  filterDetail: {
    modalType: MODAL_TYPE;
    filterType: FilterType;
  }[];
  subTab?: {}[];
  align?: { modalType: MODAL_TYPE; filterType: AlignType }[];
}

export const filterByTab: FilterByTabType[] = [
  {
    tab: 'disease',
    filterDetail: [
      { modalType: MODAL_TYPE.INFO_FILTER_PET_TYPE, filterType: 'petType' },
    ],
    align: [{ modalType: MODAL_TYPE.INFO_FILTER_RISK, filterType: 'risk' }],
  },
  {
    tab: 'signal',
    filterDetail: [
      { modalType: MODAL_TYPE.INFO_FILTER_SIGNAL, filterType: 'signal' },
      {
        modalType: MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH,
        filterType: 'signalDepth',
      },
    ],
  },
  {
    tab: 'dangerousFood',
    filterDetail: [],
  },
  {
    tab: 'safeFood',
    filterDetail: [
      { modalType: MODAL_TYPE.INFO_FILTER_PET_TYPE, filterType: 'food' },
    ],
  },
];

export const filterList: {
  title: string;
  modalType: MODAL_TYPE;
  option: { desc: string; value?: PetType | SignalType | FoodCookType }[];
}[] = [
  {
    title: '반려동물 구분',
    modalType: MODAL_TYPE.INFO_FILTER_PET_TYPE,
    option: [
      { desc: '전체', value: 'all' },
      { desc: '강아지', value: 'dog' },
      { desc: '고양이', value: 'cat' },
    ],
  },
  {
    title: '신호',
    modalType: MODAL_TYPE.INFO_FILTER_SIGNAL,
    option: [
      { desc: '대변', value: 'poop' },
      { desc: '소변', value: 'pee' },
      { desc: '구토', value: 'throwUp' },
      { desc: '몸무게', value: 'weight' },
      { desc: '음수량', value: 'drinkAmount' },
      { desc: '수면 시 호흡 수', value: 'breathingDuringSleep' },
    ],
  },
  {
    title: '필터',
    modalType: MODAL_TYPE.INFO_FILTER_FOOD_TYPE,
    option: [
      { desc: '전체', value: undefined },
      { desc: '조리 필수', value: 'cooking' },
      { desc: '손질 필수', value: 'preparation' },
    ],
  },
];

export const alignList: {
  title: string;
  modalType: MODAL_TYPE;
  option: { desc: string; value: RiskType | FoodCookType }[];
}[] = [
  {
    title: '정렬',
    modalType: MODAL_TYPE.INFO_FILTER_RISK,
    option: [
      { desc: '위험도 높은 순', value: 'high' },
      { desc: '위험도 낮은 순', value: 'low' },
    ],
  },
];

export const signalDepth: { desc: string; value: SignalDepthType }[] = [
  { desc: '색상', value: 'Color' },
  { desc: '형태', value: 'Shape' },
];
