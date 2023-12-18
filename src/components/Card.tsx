import Image from 'next/image';
import { CardStateDefinition } from '@/types/card.state.type';
import { CardsMap } from '@/icons/cards/CardsMap';

type Props = {
  card: CardStateDefinition;
  cardIndex: number;
  onRevealCard: (cardIndex: number) => void;
};
//  className='h-10'
export default function Card({card, cardIndex, onRevealCard}: Props) {
  let cardBg = 'bg-white/10';



  return (
    <div
      className={`transition flex card-width`}
    >
      <Image
        alt=''
        src={CardsMap(card.card)}
        className={`
          max-h-32
          

          transition
          hover:scale-[1.2]
          ${card.card === null ? 'cursor-pointer' : ''}
          ${cardIndex % 2 === 0 ? 'hover:rotate-[-8deg]' : 'hover:rotate-[8deg]'}
        `}
        onClick={() => card.card === null && onRevealCard(cardIndex)}
      />
    </div>
  );
}

export function Card2({card, cardIndex, onRevealCard}: Props) {
  let cardBg = 'bg-white/10';



  return (
    <div
      className={`transition card-width rotate-90`}
    >
      <Image
        alt=''
        src={CardsMap(card.card)}
        className={`
          max-h-32
          

        `}
      />
    </div>
  );
}