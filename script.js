const countriesDB = [
  "Madagascar",
  "Ireland",
  "Ireland2",
  "Antarctica",
  "Antarctica2",
  "Antarctica3",
  "Mauritania",
  "St. Helena",
  "Kuwait",
];

const countrySearch = (searchInput, db) => {
  const matches = db.filter(country => {
    return country.includes(searchInput)
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log(countrySearch("Antarctica"), countriesDB);

module.exports = countrySearch