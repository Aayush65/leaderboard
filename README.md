
# Leaderboard

This is the repository for the backend server for the hosted [Flipgame](https://flipgame.aayuhs65.com) website. This server is hosted on Cyclic.

# Flip Game

It is a Memory-based Game made up of flipped tiles that have some images on their rear side. One has to match cards bearing identical images with the least amount of flips to win the game. Also integrated with a real-time leaderboard.

You can play this amazing game [here](https://flipgame.aayush65.com)

## Site - Features

- Responsive Design
- Clean and Minimalistic UI
- No logging in
- Real-Time Leaderboard


## Tech Stack

- NodeJS
- TypeScript
- Express
- MongoDB Atlas


## Frontend

The front end for this site is hosted on Github Pages.
The repository for the server is [here](https://github.com/Aayush65/leaderboard).


## Deployment

Before deploying the frontend, run the following commands for a successful deployment

```bash
  git clone https://github.com/Aayush65/flipgame
  cd flipgame
```

After doing the above, create a .env file and a MongoDB atlas database.

Set the env variables accordingly:
- MONGO_URL
- PORT

Now, install the required packages and run the server
```bash
  npm install
  npm run dev
```

After deploying the server, deploy the frontend [here](https://github.com/Aayush65/flipgame).


## Performance
![Lighthouse score](https://github.com/Aayush65/leaderboard/assets/79572409/af0beb83-1329-4765-8fba-06e907bff9f2)


## Demo

Hosted site [link](https://flipgame.aayush65.com)

Demo video:

https://github.com/Aayush65/FlipGame/assets/79572409/736d0698-1067-4b51-bd3b-df1ff9e15fa6
