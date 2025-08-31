import leia = require("readline-sync");
import { colors } from "./SRC/util/colors";

export function main() {

    let opcao: number;

    console.log(colors.bg.red, colors.fg.black,
        "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset
        );

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt();

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(colors.fg.yellowstrong,"\n\nCriar Conta\n\n");
                break;
            case 2:
                console.log(colors.fg.yellowstrong,"\n\nListar todas as Contas\n\n");
                break;
            case 3:
                console.log(colors.fg.yellowstrong,"\n\nConsultar dados da Conta - por número\n\n");
                break;
            case 4:
                console.log(colors.fg.yellowstrong,"\n\nAtualizar dados da Conta\n\n");
                break;
            case 5:
                console.log(colors.fg.yellowstrong,"\n\nApagar uma Conta\n\n");
                break;
            case 6:
                console.log(colors.fg.yellowstrong,"\n\nSaque\n\n");
                break;
            case 7:
                console.log(colors.fg.yellowstrong,"\n\nDepósito\n\n");
                break;
            case 8:
                console.log(colors.fg.yellowstrong,"\n\nTransferência entre Contas\n\n");
                break;
            default:
                console.log(colors.fg.yellowstrong,"\nOpção Inválida!\n");
                break;
        }

}
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Aknni Silva ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();