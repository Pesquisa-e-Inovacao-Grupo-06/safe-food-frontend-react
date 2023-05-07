import moment from "moment";
export function parseJwt (token: string) {
    const encodedPayload = token.split('.')[1];
    const buffedStringPayload = atob(encodedPayload).toString()
    
    return JSON.parse(buffedStringPayload) as {
        exp: number,
        sub: string
    };
}
export const getExpirationTimeFromToken = (token: string) => 
     moment(parseJwt(token).exp * 1000);

export const isTokenValid = (token: string) => 
    moment().isBefore(getExpirationTimeFromToken(token));
