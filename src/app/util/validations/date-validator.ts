import {InputValidator} from "./input-validator";

export class DateValidator implements InputValidator{
    // 30/30/3000
    private regexDateMask = /^(0[1-9]|1\d|2\d|3[01])(0[1-9]|1[0-2])([19|20]{2}\d{2})$/;
    private regexDate = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/([19|20]{2}\d{2})$/;
    private regexNotNumber = /[^\d]/g;

    public format(str: string) {
        let val = str.replace(this.regexNotNumber, "");
        return val.replace(this.regexDateMask, "$1/$2/$3");
    };
    public validate(str: string){
        let errors = [] as string[];
        if(!this.isRegexValid(str)){
            errors.push(`Data de nascimento invalida`)
        }
        if(str.length > 8){
            const datas = str.split("/");
            if(+datas[0] > 31){
                errors.push(`Dia invalido`)
            }
            if(+datas[1] > 12){
                errors.push(`Mes invalido`)
            }
            if(datas[2].length != 4 || +datas[2] > 2030){
                errors.push(`Ano invalido`)
            }
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexDate.test(str);
}