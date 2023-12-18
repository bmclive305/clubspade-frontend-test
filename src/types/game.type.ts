import IPlayer, { IHeap } from "./player.type";

export interface ITeam {
  books: number,
  player_list: IPlayer[],
    }

export interface IGameSolo {
  creator: string,
  create_time: string,
  game_id: string,
      score: number,
      player_list: string[],
      teamA: ITeam,
      teamB: ITeam,
      stack: string[],
      heap: IHeap[],
      round: number,
      game_log: string[],
      hasStarted: boolean,
      hasFinished: boolean,
      
    }
