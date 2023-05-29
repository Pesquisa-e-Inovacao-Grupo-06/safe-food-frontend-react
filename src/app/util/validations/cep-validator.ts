import {InputValidator} from "./input-validator";

export class CepValidator implements InputValidator{
    private regexPhoneMask = /(\d{5})(\d{3})/;
    private regexNotNumber = /[^\d]/g;
    private regexPhoneValid = /(\d{5})-(\d{3})/;

    public format(str: string) {
        let val = str.replace(this.regexNotNumber, "");
        return val.replace(this.regexPhoneMask, "$1-$2");
    };
    public validate(str: string){
        let errors = [] as string[];
        if(!this.isRegexValid(str) && str.length > 0){
            errors.push(`CEP invalido`)
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexPhoneValid.test(str);
}