const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
  // expect.assertions() good to use with async tests
  // expect is an assertion
  expect.assertions(2)
  return swapi.getPeopleAsync(fetch).then(data => {
    expect(data.count).toEqual(82)
    expect(data.results.length).toBeGreaterThan(5)
  })
})