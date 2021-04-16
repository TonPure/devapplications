const fs = require("fs");
const carbone = require("carbone");
const employer = require("./data/employer");
const person = require("./data/person");
const contract = require("./data/contract");

carbone.set({
  lang: "ru",
  timezone: "Europe/Samara",
});

const data = Object.assign(
  (employer),
  (person),
  (contract)
);


carbone.render(
  "templates/contract_onetime.odt",
  data,
  function (err, result) {
    if (err) {
      return console.log(err);
    }

    fs.writeFileSync("result.odt", result);
  }
);
