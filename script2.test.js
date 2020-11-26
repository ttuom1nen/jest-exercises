const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", () => {
  // expect.assertions() good to use with async tests
  // expect is an assertion
  expect.assertions(2);
  return swapi.getPeopleAsync(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// This is a 'mock' 
it("getPeople returns count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () => Promise.resolve({ count: 82, results: [0, 1, 2, 3, 4, 5] }),
    })
  );

  expect.assertions(4);
  return swapi.getPeopleAsync(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
