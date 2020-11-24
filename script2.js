// https://swapi.dev/api/people/1/

const fetch = require("node-fetch");

const getPeopleAsync = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people")
  const data = await getRequest.json()

  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = { getPeopleAsync }