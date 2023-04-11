import {InputValidator} from "./input-validator";

export class PasswordValidator implements InputValidator{
    private regexEmailValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    constructor(private min: number, private max: number){}
    public format(str: string) {
        return str.trim();
    };
    public validate(str: string){
        let errors = [] as string[];
        if(this.hasMinLength(str)){
            errors.push(`A senha precisa de no minimo ${this.min} caracteres`)
        }
        if(this.hasMaxLength(str)){
            errors.push(`A senha não pode ultrapassar ${this.max} caracteres`)
        }
        
        if(!this.isRegexValid(str)){
            errors.push(`A senha é fraca (insira com letras maiusculas, minusculas, caracteres especiais e números)`)
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexEmailValid.test(str);
    private hasMinLength = (str: string) => str.length < this.min;
    private hasMaxLength = (str: string) => str.length > this.max;

}