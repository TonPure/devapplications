const fs = require("fs");
const carbone = require("carbone");

carbone.set({
  lang: "ru",
  timezone: "Europe/Samara",
});

var data = {
  employer: {
    fullname: "Публичное акционерное общество 'БыстроБанк'",
    adress: "426008, УР, г. Ижевск, ул. Пушкинская, 268",
    license: 1745,
    okpo: 13068554,
    bik: 049401814,
    ks: 30101810200000000814,
    bank: "НБ Удмуртская Республика",
    inn: 1831002591,
    ogrn: 1021800001508,
    phone: "+7(3412)90-80-90",
    email: "contact@bystrobank.ru",
    person: {
      firstname: "Михаила",
      lastname: "Храмова",
      patronymic: "Андреевича",
    },
    doc: {
      name: "доверенности №149/2",
      date: "2012-02-32",
    },
  },
  person: {
    firstname: "Евгения",
    lastname: "Малюшкина",
    patronymic: "Петровна",
    passportNumber: "111111111",
    passportIssued: "Ленинским РУВД",
    passportDate: "2020-01-11",
    adress: "г. Северомуйск, ул. Потерянных челюскинцев, 25 кв. 5 ",
    inn: 54654654654,
    bik: 654654,
    paymentAccount: 65436546546,
    correspondentAccount: 564654,
    selfEmployedDate: "2021-03-20",
    ifnsName: "ИФНС №3",
    tel: 56465465,
    eMail: "555555555@aa.ru",
  },
  contract: {
    number: 5,
    contractDate: "2021-01-15",
    firstDate: "2021-03-25",
    lastDate: "2021-04-25",
    software: "ПО Договор",
    requirements: [
      { requirement: "требование1" },
      { requirement: "требование2" },
      { requirement: "требование3" },
    ],
    amount: 5465,
    amountInWords: "пять тысяч четыреста шестьдесят пять",
    penny: 0,
    daysOfAmount: 30,
    daysOfAmountInWords: "тридцати",
    daysOfFailure: 3,
    daysOfFailureInWords: "три",
    daysOfWrittenNotice: 10,
  },
};

carbone.render(
  "devapplications/template/contract_onetime.odt",
  data,
  function (err, result) {
    if (err) {
      return console.log(err);
    }

    fs.writeFileSync("result.odt", result);
  }
);
