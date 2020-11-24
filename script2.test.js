const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", (done) => {
  // expect.assertions() good to use with async tests
  expect.assertions(1)
  swapi.getPeopleAsync(fetch).then(data => {
    expect(data.count).toEqual(82)
    done();
  })
})