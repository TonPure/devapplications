const fs = require("fs");
const carbone = require("carbone");

carbone.set({
  lang: "ru",
});

var data = {
  person: {
    firstname: "Евгения",
    lastname: "Малюшкина",
    patronymic: "Петровна",
    passportNumber: "111111111",
    passportIssued: "Ленинским РУВД",
    passportDate: 20200111,
    adress: "г. Северомуйск, ул. Потерянных челюскинцев, 25 кв. 5 ",
    inn: 54654654654,
    bik: 654654,
    paymentAccount: 65436546546,
    correspondentAccount: 564654,
    selfEmployedDate: 20210320,
    ifnsName: "ИФНС №3",
    tel: 56465465,
    eMail: "555555555@aa.ru",
  },
  contract: {
    number: 5,
    contractDate: 20210115,
    firstDate: 20210325,
    lastDate: 20210425,
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

carbone.render("devapplications/template/contract_onetime.odt", data, function (err, result) {
  if (err) {
    return console.log(err);
  }

  fs.writeFileSync("result.odt", result);
});
