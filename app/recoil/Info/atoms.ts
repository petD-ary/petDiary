import { atom } from 'recoil';

export type PetType = 'all' | 'dog' | 'cat';
export type SignalType =
  | 'all'
  | 'poop'
  | 'pee'
  | 'throwUp'
  | 'weight'
  | 'drinkAmount'
  | 'breadingDuringSleep';
export type signalDepthType = 'color' | 'form';
export type ImportanceType = 'recommend' | 'essential';
export type RiskType = 'high' | 'low';

export interface FilterState {
  petType: PetType;
  signal: SignalType;
  signalDepth: signalDepthType;
}

export interface AlignState {
  importance: ImportanceType;
  risk: RiskType;
}

export const filterState = atom<FilterState>({
  key: 'filterState',
  default: {
    petType: 'all',
    signal: 'all',
    signalDepth: 'color',
  },
});

export const alignState = atom<AlignState>({
  key: 'alignState',
  default: {
    importance: 'recommend',
    risk: 'high',
  },
});
