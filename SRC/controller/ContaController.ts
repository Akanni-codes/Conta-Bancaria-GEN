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
  sacar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      if (conta.sacar(valor) == true) {
        console.log(
          colors.fg.green,
          "\nO Saque na Conta numero: " + numero + " foi efetuado com sucesso!",
          colors.reset
        );
      }
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta numero: " + numero + " não foi encontrada",
        colors.reset
      );
    }
  }
  depositar(numero: number, valor: number): void {
    let conta = this.buscarNoArray(numero);

    if (conta != null) {
      conta.depositar(valor);
      console.log(
        colors.fg.green,
        "\nO Deposito na Conta numero: " +
          numero +
          " foi efetuado com sucesso!",
        colors.reset
      );
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta numero: " + numero + " não foi encontrada",
        colors.reset
      );
    }
  }
  transferir(
    numeroOrigigem: number,
    numeroDestino: number,
    valor: number
  ): void {
    let contaOrigem = this.buscarNoArray(numeroOrigigem);
    let contaDestino = this.buscarNoArray(numeroDestino);

    if (contaOrigem != null && contaDestino != null) {
      if (contaOrigem.sacar(valor) == true) {
        contaDestino.depositar(valor);
        console.log(
          colors.fg.green,
          "\nA Transferência da Conta numero: " +
            numeroOrigigem +
            " para a Conta numero: " +
            numeroDestino +
            " foi efetuada com sucesso!",
          colors.reset
        );
      }
    } else {
      console.log(
        colors.fg.red,
        "\nA Conta numero: " +
          numeroOrigigem +
          " e/ou Conta numero: " +
          numeroDestino +
          " não foram encontradas!",
        colors.reset
      );
    }
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
