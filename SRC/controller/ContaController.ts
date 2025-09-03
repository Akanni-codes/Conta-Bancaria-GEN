import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/colors";

export class ContaController implements ContaRepository {
  private listaConta: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  listarTodas(): void {
    for (let conta of this.listaConta) {
      conta.visualizar();
    }
  }

  procurarporNumero(numero: number): void {
    throw new Error("Method not implemented.");
  }

  cadastrar(conta: Conta): void {
    this.listaConta.push(conta);
    console.log(
      colors.fg.green,
      `\nA Conta número: ${conta.numero} foi criada com sucesso!`,
      colors.reset
    );
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(numero: number): void {
    throw new Error("Method not implemented.");
  }
  sacar(number: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(
    numeroOrigigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    throw new Error("Method not implemented.");
  }

  /**
   * gerarNumero
   */
  public gerarNumero(): number {
    return ++ this.numero;
  }
}
