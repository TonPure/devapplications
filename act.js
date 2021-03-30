const fs = require('fs');
const carbone = require('carbone');

carbone.set({
  lang: 'ru',
  timezone: 'Europe/Samara'
});

var data = {
  actNumber: '89',
  actDate: '2021-02-25',
  contractorName: {
    lastName: 'Иванов',
    firstName: 'Денис',
    patronymic: 'Семенович',
    initials: 'Д.С.'
  },
  contractorBirthDate: '1987-06-22',
  passport: 'ТП УФМС России по УР',
  issueDate: '2012-06-14',
  tin: '123456789012',
  bic: '043999999',
  paymentAccount: '40817810024325532124',
  correspondentAccount: '30101810200234535355',
  registrationDate: '2021-02-11',
  taxInspectionName: 'Межрайонаая инспекция федеральной налоговой службы №111 по УР',
  registrationAdress: 'Россия, УР, г. Ижевск, ул. Пушкинская д.38',
  phoneNumber: '88888888888',
  email: 'user@domain.com',
  contractNumber: '89',
  contractDate: '2021-02-22',
  contractPeriod: {
    beginningDate: '2021-02-22',
    endDate: '2021-02-25'
  },
  services: [
    { name: 'реализация сервиса хранения данных' },
    { name: 'реализация сервиса добавления данных' }
  ],
  price: {
    number: '15000',
    text: 'Пятнадцать тысяч'
  }
};

carbone.render('./templates/actTemplate.odt', data, function(err, result){
  if (err) {
    return console.log(err);
  }
  
  fs.writeFileSync('./results/act.odt', result);
});
