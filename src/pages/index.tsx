import { NextPage } from "next";

import { useState } from "react";
import { useRouter } from "next/router";

import { Typography } from "@material-tailwind/react";
import Card from "@/components/Card";
import { Cards } from "@/types/Cards";
import { defaultPlayer, defaultSpades } from "@/models/default.entities";
import IPlayer from "@/types/player.type";

import { Player2Spades, Player3Spades, Player4Spades } from "@/components/games/spades/Players";
import { CardTable } from "@/components/games/spades/CardTable";


export const SpadesPage: NextPage = () => {


  const router = useRouter()
  const [gameMessage, setGameMessage] = useState("");

  const [timer, setTimer] = useState<number | null>(null);



  const [currentGame, setCurrentGame] = useState(defaultSpades)

  const [currentPlayer, setCurrentPlayer] = useState<IPlayer>(currentGame.teamA.player_list[0]);



  function CardDisplay() {
    return (
      <>
      <div id="cards-player1" className=''>
          <div className='absolute bottom-24 flex-hand'>
              {currentPlayer.stack.length > 0 && (
                  <>
                    {currentPlayer.stack.map((card: any, i) => (
                    <div
                      key={card}
                      className="flex-card"
                    >
                      <Card
                        card= {{
                          card: Cards[card],
                        }}
                        cardIndex={i}
                        onRevealCard={() => {}}
                        
                      />
                    </div>
                  )) }    
                  </>               
              )}
          </div>
        </div>
      </>
    );
  }


  return (

    <>
    <div className='p-0.5'>
        <div id='progressBar' className="border-y-2 grad top-5 py-2 absolute left-0 right-0 z-20">
          <div className="flex  gap-2  items-center justify-center">
            {currentGame.round && (<Typography id='active-round' className="text-md">ROUND: <span className="font-bold">{currentGame.round}</span>/13</Typography>)}
            {timer && (<Typography id='active-timer'  className="text-md text-red font-bold">{timer}</Typography>)}
          </div>
        </div>

        <div className='flex flex-col justify-between overflow-x-clip'>
          <div className=''>
            <Player3Spades {...currentGame.teamA.player_list[1]} /> 
          </div>
          <div className="">
            {/* <CardDisplay2 {...currentGame.teamA.player_list[0]} /> */}
            <div className="z-40 absolute top-1/2"><Player2Spades {...currentGame.teamB.player_list[0]} /></div>
            <CardTable {...currentGame}/>
            <div className="absolute right-0 top-1/2"><Player4Spades {...currentGame.teamB.player_list[1]} /></div>  
          </div>

          <div className='absolute bottom-16 left-0 right-0' id="">

            <Typography className="text-center pb-40 font-bold text-lg">{gameMessage}</Typography>
          <CardDisplay />
          </div>
        </div>
      </div>
   
    </>

  );
}



export default SpadesPage;
