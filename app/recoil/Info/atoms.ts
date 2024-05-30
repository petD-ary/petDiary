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
export type ImportanceType = 'recommend' | 'essential';
export type RiskType = 'high' | 'low';

export interface KnowledgeState {
  petType: PetType;
  signal: SignalType;
  importance: ImportanceType;
  risk: RiskType;
}

export const filterState = atom({
  key: 'filterState',
  default: {
    petType: 'all',
    signal: 'all',
    signalDepth: 'color',
  },
});

export const alignState = atom({
  key: 'alignState',
  default: {
    importance: 'recommend',
    risk: 'high',
  },
});
