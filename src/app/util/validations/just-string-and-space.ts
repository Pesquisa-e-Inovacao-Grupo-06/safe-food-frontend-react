import {InputValidator} from "./input-validator";

export class JustStringAndSpaceValidator implements InputValidator{
    private regexStringAndSpace = /^[a-zA-Z\s]+$/;
    private regexNotStringAndSpace = /[^a-zA-Z\s]/g;

    constructor(private min: number, private max: number){

    }
    public format(str: string) {
        return str.replace(this.regexNotStringAndSpace, "").substring(0, this.max);
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
            errors.push(`O valor deste campo está inválido`)
        }
        return errors;  
    }

    private isRegexValid = (str: string) => this.regexStringAndSpace.test(str);
    private hasMinLength = (str: string) => str.length <= this.min;
    private hasMaxLength = (str: string) => str.length > this.max;
}