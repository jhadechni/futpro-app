import axios from '../Instance';

const API = process.env.NX_API_LINK;
console.log(API);

 const listAllCountries = async () => {
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

export default listAllCountries;