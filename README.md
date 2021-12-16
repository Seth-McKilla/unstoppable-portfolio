# Welcome to the [Unstoppable Portfolio](https://unstoppable-portfolio.vercel.app/)!

![image](https://user-images.githubusercontent.com/63591760/146299375-982919cb-b72f-4017-b60b-8fc7352c5ee4.png)

### *A dead simple personal ERC-20 token portfolio powered by the Unstoppable Domains Login.*

## Hackathon submission
This project was created as a submission for the [Integrating “Login With Unstoppable” As A Dapp Login Option](https://gitcoin.co/issue/unstoppabledomains/gitcoin-bounties/1/100027208) bounty within Gitcoin's Grants Round 12 hackathon.

## Motivation for the project
It's a pain to manually create a watchlist of all your assets and many DeFi apps are very cumbersome and information overload. There's a need for an extremely lightweight and simple dApp that allows you to keep track of your current ERC-20 portfolio and its performance over various timeframes.

## Demo of the project
Check out the Youtube video [here](https://www.youtube.com/watch?v=8GG8VAwuOaI)!

## Contact info for questions
**Discord: SethMcKilla#2242**
<br>
**Email: seth@endevrs.dev**
<br>
**Twitter: https://twitter.com/SethMcKilla**
<br>
**Gitcoin: https://gitcoin.co/seth-mckilla**

## The tech stack
NextJS: https://nextjs.org/
<br>
Typescript: https://www.typescriptlang.org/
<br>
Material UI: https://mui.com/
<br>
Unstoppable Domains (@uath/js): https://www.npmjs.com/package/@uauth/js
<br>
Ethplorer API: https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API

## Steps to setup locally
1. Clone the repo and navigate into the directory:
```
git clone https://github.com/Seth-McKilla/unstoppable-portfolio.git
cd unstoppable-portfolio
```

2. Install the dependencies:
```
npm install
```

3. Create a .env file in the root folder and populate it with the following variables:
```
REACT_APP_UAUTH_CLIENT_ID=
REACT_APP_UAUTH_CLIENT_SECRET=
REACT_APP_UAUTH_REDIRECT_URI=
REACT_APP_UAUTH_LOGOUT_REDIRECT_URI=
REACT_APP_ETHPLORER_API_KEY=
```

4. Run the local development environment:
```
npm start
```

5. A browser window should automatically open to http://localhost:3000; if not, simply open one up and navigate to it manually.

### Thanks for stopping by! 🙏
