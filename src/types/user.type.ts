

 interface IProfile {
   sound: boolean,
}


export interface IUser {
  id: string,
  username: string,
  profile: IProfile,
  avatar: string,
  isLoggedIn: boolean,
  active_game?: boolean,  
}

