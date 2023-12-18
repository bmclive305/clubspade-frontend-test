import { Suits } from '@/types/Cards';
import {
  Clover,
  
  Diamond,
 
  Heart,
 
  Spade,
  
} from '.';

export const SuitMap = (suit: Suits | string) => {
  switch (suit) {

case Suits['H']:
  return Heart;

      case Suits['C']:
        return Clover;
    
        case Suits['D']:
          return Diamond;
     

        case Suits['S']:
          return Spade;
    
    
  }
};