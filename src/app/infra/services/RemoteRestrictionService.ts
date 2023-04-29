import { Restriction } from "@/app/domain/entities/Restriction";
import { RestrictionService } from "@/app/domain/services/RestrictionService";
import { HttpClient } from '../../domain/services/HttpClient';

export type RemoteRestrictionResponse = {
    tipoRestricao: {
        tipoRestricao: string,
        id: number
    },
    restricao: string,
    descricao: string,
    id: number
};

export class RemoteRestrictionService implements RestrictionService {
    constructor(private httpClient: HttpClient) { }
    async findAllRestriction(): Promise<Restriction[]> {
        const res = await this.httpClient.execute<RemoteRestrictionResponse[]>({
            url: '/restricoes',
            method: "GET"
        });
        if (res.statusCode != 200) {
            console.error(res);
            throw new Error("erro na requisição");
        }
        const restrictions: Restriction[] = res.data!.map(restriction => new Restriction(
            restriction.id,
            restriction.restricao,
            restriction.descricao
        ));
        return restrictions;
    }

}