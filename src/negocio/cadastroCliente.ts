import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Pet from "../modelo/pet";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do cliente: `
    );
    let nomeSocial = this.entrada.receberTexto(
      `Por favor informe o nome social do cliente: `
    );
    let valor = this.entrada.receberTexto(
      `Por favor informe o número do cpf: `
    );
    let data = this.entrada.receberTexto(
      `Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `
    );
    let partesData = data.split("/");
    let ano = new Number(partesData[2].valueOf()).valueOf();
    let mes = new Number(partesData[1].valueOf()).valueOf();
    let dia = new Number(partesData[0].valueOf()).valueOf();
    let dataEmissao = new Date(ano, mes, dia);
    let cpf = new CPF(valor, dataEmissao);

    let newRG = true;
    let rgs: Array<RG> = [];
    while (newRG) {
      let rgValor = this.entrada.receberTexto(
        `Por favor informe o número do rg: `
      );
      let rgData = this.entrada.receberTexto(
        `Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `
      );
      let partesRGData = rgData.split("/");
      let anoRG = new Number(partesRGData[2].valueOf()).valueOf();
      let mesRG = new Number(partesRGData[1].valueOf()).valueOf();
      let diaRG = new Number(partesRGData[0].valueOf()).valueOf();
      let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
      let rg = new RG(rgValor, dataEmissaoRG);
      rgs.push(rg);
      let continuar = this.entrada.receberTexto(
        `Deseja cadastrar mais um rg? (s/n) `
      );
      if (continuar.toLowerCase() == "n") {
        newRG = false;
      }
    }

    let newTelefone = true;
    let telefones: Array<Telefone> = [];
    while (newTelefone) {
      let ddd = this.entrada.receberTexto(
        `Por favor informe o ddd do telefone: `
      );
      let numero = this.entrada.receberTexto(
        `Por favor informe o número do telefone: `
      );
      let telefone = new Telefone(ddd, numero);
      telefones.push(telefone);
      let continuar = this.entrada.receberTexto(
        `Deseja cadastrar mais um telefone? (s/n) `
      );
      if (continuar.toLowerCase() == "n") {
        newTelefone = false;
      }
    }

    let newPet = true;
    let pets: Array<Pet> = [];
    while (newPet) {
      let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
      let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
      let genero = this.entrada.receberTexto(
        `Por favor informe o gênero do pet: `
      );
      let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);
      let pet = new Pet(nome, raca, genero, tipo);
      pets.push(pet);
      let continuar = this.entrada.receberTexto(
        `Deseja cadastrar mais um pet? (s/n) `
      );
      if (continuar.toLowerCase() == "n") {
        newPet = false;
      }
    }

    let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones, pets);
    this.clientes.push(cliente);
    console.log(`\nCadastro concluído :)\n`);
  }
}
