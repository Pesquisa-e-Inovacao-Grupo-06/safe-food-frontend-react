import {InputValidator} from "./input-validator";

export class EmailValidator implements InputValidator{
    private regexEmailValid = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    constructor(private min: number, private max: number){}
    public format(str: string) {
        return str.trim();
    };
    public validate(str: string){
        let errors = [] as string[];
        if(this.hasMinLength(str)){
            errors.push(`Esse campo precisa de no minimo ${this.min} caracteres`)
        }
        if(this.hasMaxLength(str)){
            errors.push(`Esse campo não pode ultrapassar ${this.max} caracteres`)
        }
        
        if(!this.isRegexValid(str)){
            errors.push(`O email inserido não é válido`)
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexEmailValid.test(str);
    private hasMinLength = (str: string) => str.length <= this.min;
    private hasMaxLength = (str: string) => str.length > this.max;
}