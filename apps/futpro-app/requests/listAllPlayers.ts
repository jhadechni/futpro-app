import axios from '../Instance';


const ListAllPlayers = async (team: string) => {
    try {
      const req = await axios.get(
        `https://api-football-v1.p.rapidapi.com/v2/players/squad/${team}/2020`
      );
      const players = [];
      let sw = 0;
      while (sw < req.data.api.results) {
        const json = {
          id: req.data.api.players[sw].player_id,
          img:"https://cdn.discordapp.com/attachments/710593688392171612/914010727990317066/football-player.png",
          name: req.data.api.players[sw].firstname+ " " + req.data.api.players[sw].lastname
        };
        players.push(json);
        sw += 1;
      }
      return players;
    } catch (error) {
      console.error(error);
    }
  };

  export default ListAllPlayers;