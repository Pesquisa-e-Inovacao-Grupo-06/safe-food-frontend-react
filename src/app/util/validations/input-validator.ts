export interface InputValidator{
    format: (str: string) => string;
    validate: (str: string) => string[];
}