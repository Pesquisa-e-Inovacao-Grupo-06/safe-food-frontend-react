import {InputValidator} from "./input-validator";

export class PhoneValidator implements InputValidator{
    private regexPhoneMask = /(\d{2})(\d{4,5})(\d{4})/;
    private regexNotNumber = /[^\d]/g;
    private regexPhoneValid = /\((\d{2})\)\s(9?\d{4})-(\d{4})/;

    public format(str: string) {
        let val = str.replace(this.regexNotNumber, "");
        return val.replace(this.regexPhoneMask, "($1) $2-$3");
    };
    public validate(str: string){
        let errors = [] as string[];
        if(!this.isRegexValid(str)){
            errors.push(`Número de celular inválido`)
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexPhoneValid.test(str);
}