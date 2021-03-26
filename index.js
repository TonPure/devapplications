const fs = require('fs');
const carbone = require('carbone');

var data = {
  actNumber: '89',
  actDate: {
    day: '25',
    month: '02',
    lastNumberOfYear: '1',
  },
  contractorName: {
    lastName: 'Иванов',
    firstName: 'Денис',
    patronymic: 'Семенович',
    initials: 'Д.С.'
  },
  contractorBirthDate: '22.06.1987',
  passport: 'ТП УФМС России по УР',
  issueDate: '14.06.2012',
  tin: '123456789012',
  bic: '043999999',
  paymentAccount: '40817810024325532124',
  correspondentAccount: '30101810200234535355',
  registrationDate: {
    day: 11,
    month: 'февраля',
    lastNumberOfYear: 1,
  },
  taxInspectionName: 'Межрайонаая инспекция федеральной налоговой службы №111 по УР',
  registrationAdress: 'Россия, УР, г. Ижевск, ул. Пушкинская д.38',
  phoneNumber: '88888888888',
  email: 'user@domain.com',
  contractNumber: '89',
  contractDate: {
    day: '22',
    month: '02',
    lastNumberOfYear: '1',
  },
  contractPeriod: {
    beginningDate: {
      day: '22',
      month: 'февраля',
      lastNumberOfYear: '1',
    },
    endDate: {
      day: '25',
      month: 'февраля',
      lastNumberOfYear: '1',
    }
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