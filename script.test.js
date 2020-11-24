const countrySearch = require("./script")

dbMock = [
  "Test",
  "Testcountry",
  "Botswana",
  "Laos",
  "Laos",
  "Laos",
  "Laos",
  "Laos",
  "South Africa"
]

describe("sillyTest", () => {
  it("is a silly test", () => {
    expect("hello").toBe("hello")
  })
})

describe("countrySearch", () => {
  it("is searching country", () => {
    expect(countrySearch("testtest", dbMock)).toEqual([])
    expect(countrySearch("Test", dbMock)).toEqual(["Test", "Testcountry"])
  })
  
  it("work with undefined and null input", () => {
    expect(countrySearch(undefined, dbMock)).toEqual([])
    expect(countrySearch(null, dbMock)).toEqual([])
  })
  
  it("does not return more than 3 matches", () => {
    expect(countrySearch("Laos", dbMock).length).toEqual(3)
  })

})
