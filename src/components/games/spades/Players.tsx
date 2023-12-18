import IPlayer from "@/types/player.type";
import { Avatar, Badge, Typography } from "@material-tailwind/react";

export function Player1Spades(currentPlayer: IPlayer) {
   
    return (
        <div id="player1" className='absolute bottom-0 mb-8 pb-8 m-auto left-0 right-0'>
            <div id="display-panel" className="flex  justify-center">
                <div id="display-player1" className="text-center">
                    <div id="avatar-player1">
                        <Badge placement="top-end" color="green">
                            <Avatar
                                variant="circular"
                                alt=""
                                className="rounded-full h-12 w-12 inline-block border border-white z-30"
                                src= {currentPlayer.avatar}
                                />    
                        </Badge>
                    </div>
                </div>

            </div>  
        </div>
    );
  }

export function Player2Spades(currentPlayer: IPlayer) {
   
    return (
        <div id="player2" className="flex justify-center items-center">
        <div id="display-player2">
            <div id="avatar-player2">
                <Badge placement="top-end" color="green" className=" z-20">
                    <Avatar
                    variant="circular"
                    alt=""

                    className=" z-20 rounded-full h-12 w-12 inline-block border border-white hover:scale-[2.0]"
                    src= {currentPlayer.avatar}
                    />    
                </Badge>
            </div>
            <div id="name-player2 absolute pb-5"  >
            <Typography className="z-20">{currentPlayer.username}</Typography>
            </div>
        </div>
        <div id="cards-player2" className="pl-3 block">

        </div>
    </div>
    );
  }

export function Player3Spades(currentPlayer: IPlayer) {
   
    return (
        <div id="player3">
            <div id="display-player3" className="text-center absolute left-0 right-0 mt-36">
                <div id="avatar-player3">
                    <Badge placement="top-end" color="green"> 
                        <Avatar
                            variant="circular"
                            alt=""
                            className=" rounded-full h-12 w-12 inline-block border border-white hover:scale-[2.0]"
                            src= {currentPlayer.avatar}
                        />
                     </Badge>
                </div>
                <div id="name-player3">
                    {currentPlayer.username}
                </div>
            </div>
        </div>
    );
  }

  export function Player4Spades(currentPlayer: IPlayer) {
   
    return (
        <div id="player4" className="flex justify-center items-center">
            <div id="display-player4">
                <div id="avatar-player4">
                    <Badge placement="top-end" color="green" className="z-20">
                        <Avatar
                            variant="circular"
                            alt=""
                            className="z-20 rounded-full h-12 w-12 inline-block border border-white hover:scale-[1.8]"
                            src= {currentPlayer.avatar}
                        />    
                    </Badge>
                </div>
                <div id="name-player4">
                    {currentPlayer.username}
                </div>
            </div>
        </div>
    );
  }