import { Cards } from '@/types/Cards';
import {
  Back,
  Clover10,
  Clover9,
  Clover8,
  Clover7,
  Clover6,
  Clover5,
  Clover4,
  Clover3,
  Clover2,
  CloverA,
  CloverKing,
  CloverQueen,
  CloverJack,
  Diamond10,
  Diamond9,
  Diamond8,
  Diamond7,
  Diamond6,
  Diamond5,
  Diamond4,
  Diamond3,
  Diamond2,
  DiamondA,
  DiamondKing,
  DiamondQueen,
  DiamondJack,
  Heart10,
  Heart9,
  Heart8,
  Heart7,
  Heart6,
  Heart5,
  Heart4,
  Heart3,
  Heart2,
  HeartA,
  HeartKing,
  HeartQueen,
  HeartJack,
  Spade10,
  Spade9,
  Spade8,
  Spade7,
  Spade6,
  Spade5,
  Spade4,
  Spade3,
  Spade2,
  SpadeA,
  SpadeKing,
  SpadeQueen,
  SpadeJack
} from '.';

export const CardsMap = (card: Cards | string) => {
  switch (card) {
    case null:
      return Back;
    case Cards['00']:
      return Back;

case Cards['AH']:
  return HeartA;
case Cards['KH']:
  return HeartKing;
case Cards['QH']:
  return HeartQueen;
case Cards['JH']:
  return HeartJack;
case Cards['0H']:
  return Heart10;
case Cards['9H']:
  return Heart9;
case Cards['8H']:
  return Heart8;
case Cards['7H']:
  return Heart7;
case Cards['6H']:
  return Heart6;
case Cards['5H']:
  return Heart5;
case Cards['4H']:
  return Heart4;
case Cards['3H']:
  return Heart3;
case Cards['2H']:
  return Heart2;




      case Cards['AC']:
        return CloverA;
      case Cards['KC']:
        return CloverKing;
      case Cards['QC']:
        return CloverQueen;
      case Cards['JC']:
        return CloverJack;
      case Cards['0C']:
        return Clover10;
      case Cards['9C']:
        return Clover9;
      case Cards['8C']:
        return Clover8;
      case Cards['7C']:
        return Clover7;
      case Cards['6C']:
        return Clover6;
      case Cards['5C']:
        return Clover5;
      case Cards['4C']:
        return Clover4;
      case Cards['3C']:
        return Clover3;
      case Cards['2C']:
        return Clover2;

        case Cards['AD']:
          return DiamondA;
        case Cards['KD']:
          return DiamondKing;
        case Cards['QD']:
          return DiamondQueen;
        case Cards['JD']:
          return DiamondJack;
        case Cards['0D']:
          return Diamond10;
        case Cards['9D']:
          return Diamond9;
        case Cards['8D']:
          return Diamond8;
        case Cards['7D']:
          return Diamond7;
        case Cards['6D']:
          return Diamond6;
        case Cards['5D']:
          return Diamond5;
        case Cards['4D']:
          return Diamond4;
        case Cards['3D']:
          return Diamond3;
        case Cards['2D']:
          return Diamond2;
        

        case Cards['AS']:
          return SpadeA;
        case Cards['KS']:
          return SpadeKing;
        case Cards['QS']:
          return SpadeQueen;
        case Cards['JS']:
          return SpadeJack;
        case Cards['0S']:
          return Spade10;
        case Cards['9S']:
          return Spade9;
        case Cards['8S']:
          return Spade8;
        case Cards['7S']:
          return Spade7;
        case Cards['6S']:
          return Spade6;
        case Cards['5S']:
          return Spade5;
        case Cards['4S']:
          return Spade4;
        case Cards['3S']:
          return Spade3;
        case Cards['2S']:
          return Spade2;

    
  }
};