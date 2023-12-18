import { Cards } from './Cards';

export type CardStateDefinition = {
  card: Cards | string;
  show?: boolean;
};