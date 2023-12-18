import { Cards } from "./Cards";

export default interface IPlayer {
    username: string,
    stack: string[],
    avatar: string,
    }

export interface IHeap {
    winner: string, 
    round: number, 
    book: Array<Cards[]>
}

export interface IPlayerInfo {
    player: string,
    img_url: string,
    
    }


