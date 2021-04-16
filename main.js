const fs = require("fs");
const carbone = require("carbone");
const employer = require("./data/employer");
const person = require("./data/person");
const contract = require("./data/contract");

carbone.set({
  lang: "ru",
  timezone: "Europe/Samara",
});

const data = Object.assign(employer, person, contract);

function render(templatePath, data, options) {
  return new Promise((resolve, reject) => {
    const res = carbone.render(templatePath, data, options, (err, res) => {
      if (err) {
        reject(err);
      }

      resolve(res);
    });
  });
}

const options = {
  lang: "ru",
};

const res = render("templates/contract_onetime.odt", data, options).then(
  (res) => {
    fs.writeFileSync("result.odt", res);
  }
);
