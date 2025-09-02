import { Conta } from "../model/conta";

export interface ContaRepository {
    // CRUD da conta
    procurarporNumero(numero:number): void;
    listarTodas(): void;
    cadastrar(conta:Conta): void
    atualizar(conta:Conta): void;
    deletar(numero: number): void;

    // Método bancarios
    sacar(number:number, valor:number): void;
    depositar(numero: number, valor: number):void;
    transferir(numeroOrigigem: number, numeroDestino: number, valor: number): void;
}