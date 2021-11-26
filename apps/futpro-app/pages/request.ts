import axios from '../Axios';

export const getCountries = async () => {
  try {
    const req = await axios.get(
      `https://api-football-v1.p.rapidapi.com/v2/countries`
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