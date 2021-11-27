import axios from '../../Instance';

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

  export default listAllTeams;