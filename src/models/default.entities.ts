import IPlayer from "@/types/player.type";
import { IGameSolo } from "@/types/game.type";
import { IUser } from "@/types/user.type";


export const defaultUser: IUser = {
    id: "0",
    username: "",
    profile: {
        sound: true,
      },
    avatar: "/avatars/default.webp", 
    isLoggedIn: false,
    
  }


  export const defaultPlayer: IPlayer = {
    username: "",
    stack: ['AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', '0H' ],
    avatar: "/avatars/default.webp",
    }

  export const defaultSpades: IGameSolo = {
    score: 0,
    player_list: [],
    create_time: "",
    stack: [],
    heap: [],
    round: 0,
    game_log: [],
    hasStarted: false,
    hasFinished: false,
    creator: "",
    game_id: "",
    teamA: {
      books: 0,
      player_list: [{
        username: "john",
        stack: ['AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', '0H'],
        avatar: "/avatars/default.webp",
        
        }, {
          username: "Bob",
          stack: ['AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', '0H'],
          avatar: "/avatars/default.webp",
          
          }],
        },
    teamB: {
      books: 0,
      player_list: [{
        username: "Susan",
        stack: ['AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', '0H'],
        avatar: "/avatars/default.webp",
        
        }, {
          username: "Dan",
          stack: ['AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', 'AS','KH','QD', 'JC', '0H'],
          avatar: "/avatars/default.webp",
          }], 
        },
  }

