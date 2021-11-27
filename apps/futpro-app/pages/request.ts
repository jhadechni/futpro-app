import axios from '../Instance';

const API = process.env.NX_API_LINK;

 export const listAllCountries = async () => {
  try {
    const req = await axios.get(
      `${API}/countries`
    );
    const countries = [];
    let sw = 0;
    while (sw < req.data.api.results) {
      const json = {
        id: req.data.api.countries[sw].code,
        name: req.data.api.countries[sw].country,
        img: req.data.api.countries[sw].flag,
      };
      countries.push(json);
      sw += 1;
    }
    return countries;
  } catch (error) {
    console.error(error);
  }
};

export const listAllTeams = async (countrie : string) => {
  try {
    const req = await axios.get(
      `https://api-football-v1.p.rapidapi.com/v2/teams/search/${countrie}`
    );
    const teams = [];
    let sw = 1;
    while (sw < req.data.api.results) {
      const json = {
        id: req.data.api.teams[sw].team_id,
        name: req.data.api.teams[sw].name,
        img: req.data.api.teams[sw].logo,
      };
      teams.push(json);
      sw += 1;
    }
    
    return teams;
  } catch (error) {
    console.error(error);
  }
};
export const listAllPlayers = async (team: string) => {
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