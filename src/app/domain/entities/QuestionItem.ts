export class QuestionItemEntity {
    type: "cons" | "est";
    title: string;
    text: string;

    constructor(type: any, title: string, text: string) {
        this.title = title;
        this.text = text;
        this.type = type;
    }
};


function QuestionItemEstablishmentListMock(): QuestionItemEntity[] {
    return [

        new QuestionItemEntity(
            "est", "Como posso me cadastrar na plataforma Safe Food para oferecer opções de refeições seguras para pessoas com restrições alimentares?", "Em todas as nossas páginas, você encontrará nosso menu na parte superior direita. Ali, você pode se cadastrar como estabelecimento.",
        ),
        new QuestionItemEntity(
            "est",

            "Quais são as diretrizes que devo seguir para garantir que minhas refeições sejam seguras para pessoas com restrições alimentares?",

            "Para garantir a confiança do público, é fundamental que você estabeleça com clareza as restrições alimentares que atende e forneça informações precisas sobre os alimentos. Assim, você receberá avaliações positivas dos usuários e terá mais visibilidade.",
        ),
        new QuestionItemEntity(
            "est",

            "Como faço para atualizar meu cardápio ou informações sobre os ingredientes utilizados em minhas refeições?",

            "Ao fazer login na página inicial do estabelecimento, você poderá editar suas informações, adicionar ou remover alimentos, além de desativá-los conforme necessário.",
        ),
        new QuestionItemEntity(
            "est",

            "Como a Safe Food me ajuda a alcançar um público maior de pessoas com restrições alimentares?",

            "As pessoas com restrições alimentares muitas vezes enfrentam dificuldades para encontrar lugares que atendam suas necessidades. Através da Safe Food, podemos ajudar o público consumidor que necessita de alimentos seguros para alavancar seu estabelecimento. Quanto mais próximo o estabelecimento estiver do usuário, mais recomendado será.",
        ),
        new QuestionItemEntity(
            "est",

            "Há algum custo para me cadastrar e utilizar a plataforma Safe Food?",

            "Nosso cadastro e uso básico da plataforma são totalmente gratuitos. Não há nenhum custo associado.",
        ),
    ];
}

export const getQuestionEstablishmentListMock: QuestionItemEntity[] = QuestionItemEstablishmentListMock();

function getQuestionItemConsumerListMock(): QuestionItemEntity[] {
    return [

        new QuestionItemEntity(
            "est", "Como posso me cadastrar na plataforma Safe Food para oferecer opções de refeições seguras para pessoas com restrições alimentares?", "Em todas as nossas páginas, você encontrará nosso menu na parte superior direita. Ali, você pode se cadastrar como estabelecimento.",
        ),

    ];
}

//exemplo de como fazer uma lista para mock
export const getQuestionConsumerListMock: QuestionItemEntity[] = getQuestionItemConsumerListMock(); 