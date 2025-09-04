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
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      buscaConta.visualizar();
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta numero: " + numero + " não foi encontrada",
        colors.reset
      );
    }
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
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listaConta[this.listaConta.indexOf(buscaConta)] = conta;
      console.log(
        colors.fg.green,
        "\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta número: " + conta.numero + " foi atualizada com sucesso!",
        colors.reset
      );
    }
  }

  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listaConta.splice(this.listaConta.indexOf(buscaConta), 1);
      console.log(
        colors.fg.green,
        "\nA Conta numero: " + numero + " foi apagada com sucesso!",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta numero: " + numero + " não foi encontrada!",
        colors.reset
      );
    }
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

  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listaConta) {
      if (conta.numero === numero) {
        return conta;
      }
    }
    return null;
  }
}
