import Image from 'next/image';
import { SuitMap } from '@/icons/assets/SuitMap';


export default function Suit(currentSuit: string) {

  return (
    <div
      className={`transition flex card-width shadow-2xl`}
    >
      <Image src={SuitMap(currentSuit)} alt='' className="h-8 w-8 hover:scale-[1.5]" />
    </div>
  );
}