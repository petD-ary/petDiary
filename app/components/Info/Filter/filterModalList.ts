import { InfoTab } from '@/(home)/info/page';
import { MODAL_TYPE } from '@/components/Modal';

type FilterType = 'petType' | 'signal' | 'signalDepth';
type SubTabType = 'color' | 'form';
type AlignType = 'importance' | 'risk';

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
    tab: 'riskFood',
    filterDetail: [
      { modalType: MODAL_TYPE.INFO_FILTER_PET_TYPE, filterType: 'petType' },
    ],
  },
  {
    tab: 'safeFood',
    filterDetail: [
      { modalType: MODAL_TYPE.INFO_FILTER_PET_TYPE, filterType: 'petType' },
    ],
    align: [
      {
        modalType: MODAL_TYPE.INFO_FILTER_IMPORTANCE,
        filterType: 'importance',
      },
    ],
  },
];

export const filterList = [
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
      { desc: '전체', value: 'all' },
      {
        desc: '대변',
        value: 'poop',
        depth: [
          { desc: '색상', value: 'color' },
          { desc: '형태', value: 'form' },
        ],
      },
      { desc: '소변', value: 'pee' },
      { desc: '구토', value: 'throwUp' },
      { desc: '몸무게', value: 'weight' },
      { desc: '음수량', value: 'drinkAmount' },
      { desc: '수면 시 호흡 수', value: 'breadingDuringSleep' },
    ],
  },
];

export const alignList = [
  {
    title: '필터',
    modalType: MODAL_TYPE.INFO_FILTER_RISK,
    option: [
      { desc: '위험도 높은 순', value: 'high' },
      { desc: '위험도 낮은 순', value: 'low' },
    ],
  },
  {
    title: '필터',
    modalType: MODAL_TYPE.INFO_FILTER_IMPORTANCE,
    option: [
      { desc: '권장', value: 'recommend' },
      { desc: '필수', value: 'essential' },
    ],
  },
];