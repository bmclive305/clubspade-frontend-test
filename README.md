## 'Fan Out' Cards in Player hands
![Screenshot](https://github.com/bmclive305/clubspade-frontend-test/blob/main/screenshot1.PNG)
4 players with cards dealt evenly between.

### Objective

Format CardDisplay in index.tsx to "fan out".
![Player1](https://github.com/bmclive305/clubspade-frontend-test/blob/main/hand.jpg)
![Player 2](https://github.com/bmclive305/clubspade-frontend-test/blob/main/hand3.jpg)

For Players 1 (bottom) and 3 (top) cards display vertically.
Player 2 (left) and  4 (right) should have the hand display horizontal, with Player.

![Player 3](https://github.com/bmclive305/clubspade-frontend-test/blob/main/hand1.jpg)
![Player 4](https://github.com/bmclive305/clubspade-frontend-test/blob/main/hand2.jpg)


End product should look something like this:

![Screenshot](https://github.com/bmclive305/clubspade-frontend-test/blob/main/example.PNG)

there is a component CardDisplay in index.tsx to start with. Objects can be maninpulated through interfaces in: 
models/default.entities.ts 

For players 2 and 4, there are two options.

1. Create CardDisplay component for each player passing a IPlayer object (/types/player.ts)
2. Use custom css classes or tailwind.

#### Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`    

To Start Server:

`npm start`  

To Visit App:

`localhost:3000` 
