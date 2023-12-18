import Card from "@/components/Card";
import { Cards } from "@/types/Cards";
import { IGameSolo } from "@/types/game.type";

export function CardTable(currentGame: IGameSolo) {
   
    return (
        <div id="table" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-40">
                    <div id="stack">
                        <div id="stack-row1" className="flex justify-center items-center">
                            <div id="card-player3" className="absolute z-30">
                            <div>
                            <Card
                              card= {{
                              card: Cards['AS']
                              }}
                              cardIndex={0}
                              onRevealCard={() => {}}  
                            />
                          </div>
                            </div>
                        </div>
                        <div id="stack-row2" className="flex justify-center">
                            <div id="card-player2" className="absolute mr-16 z-10">
                            <div>
                            <Card
                              card= {{
                              card: Cards['AS']
                              }}
                              cardIndex={0}
                              onRevealCard={() => {}}  
                            />
                          </div>
                              </div>
                            <div id="card-player4" className="absolute ml-16 z-40">
                            <div>
                            <Card
                              card= {{
                              card: Cards['AS']
                              }}
                              cardIndex={0}
                              onRevealCard={() => {}}  
                            />
                          </div>
                            </div>
                        </div>
                        <div id="stack-row3" className="flex justify-center">
                            <div id="card-player1" className="absolute mt-16 z-30">                       
                            <div>
                            <Card
                              card= {{
                              card: Cards[currentGame.teamA.player_list[0].stack[currentGame.teamA.player_list[0].stack.length-1] as any]
                              }}
                              cardIndex={0}
                              onRevealCard={() => {}}  
                            />
                          </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }



