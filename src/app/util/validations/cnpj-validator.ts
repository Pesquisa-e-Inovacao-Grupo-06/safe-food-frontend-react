import {InputValidator} from "./input-validator";

export class CnpjValidator implements InputValidator{
    // 00.000.000/0000-00
    private regexCnpjMask = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
    private regexNotNumber = /[^\d]/g;
    private regexCnpjValid = /(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})/;

    public format(str: string) {
        let val = str.replace(this.regexNotNumber, "");
        return val.replace(this.regexCnpjMask, "$1.$2.$3/$4-$5");
    };
    public validate(str: string){
        let errors = [] as string[];
        if(!this.isRegexValid(str)){
            errors.push(`CNPJ inserido inválido`)
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexCnpjValid.test(str);
}