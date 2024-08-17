import { atom } from 'recoil';

export type PetType = 'all' | 'dog' | 'cat';
export type SignalType =
  | 'poop'
  | 'pee'
  | 'throwUp'
  | 'weight'
  | 'drinkAmount'
  | 'breathingDuringSleep';
export type signalDepthType = 'Color' | 'Shape';
export type ImportanceType = 'high' | 'low';
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
    signal: 'poop',
    signalDepth: 'Color',
  },
});

export const alignState = atom<AlignState>({
  key: 'alignState',
  default: {
    importance: 'high',
    risk: 'high',
  },
});
