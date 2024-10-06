import { atom } from 'recoil';

export type PetType = 'all' | 'dog' | 'cat';
export type SignalType =
  | 'poop'
  | 'pee'
  | 'throwUp'
  | 'weight'
  | 'drinkAmount'
  | 'breathingDuringSleep';
export type SignalDepthType = 'Color' | 'Shape';
export type FoodCookType = undefined | 'cooking' | 'preparation';
export type RiskType = 'high' | 'low';

export interface FilterState {
  petType: PetType;
  signal: SignalType;
  signalDepth: SignalDepthType;
  food?: FoodCookType;
}

export interface AlignState {
  risk: RiskType;
}

export const filterState = atom<FilterState>({
  key: 'filterState',
  default: {
    petType: 'all',
    signal: 'poop',
    signalDepth: 'Color',
    food: undefined,
  },
});

export const alignState = atom<AlignState>({
  key: 'alignState',
  default: {
    risk: 'high',
  },
});
