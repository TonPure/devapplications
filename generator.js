const carbone = require('carbone');
const fs = require('fs');

/*
  datapath: путь к json файлу
  templpath: путь к шаблону
  resultpath: путь директория по которому нужно сгенерировать результат
 */
module.exports.generate=(datapath,templpath,resultpath)=>{
    
    const data = JSON.parse( fs.readFileSync(datapath,'utf8'));

    const option ={
        lang: 'ru'
    }

    carbone.render(templpath,data,option,(err,res)=>{

        if(err){
            console.log(err);
        }

        fs.writeFileSync(resultpath,res);
    })
}