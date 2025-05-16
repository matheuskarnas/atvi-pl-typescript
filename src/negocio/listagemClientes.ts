import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }
  public listar(): void {
    console.log(`\nLista de todos os clientes:`);
    this.clientes.forEach((cliente) => {
      console.log(`Nome: ` + cliente.nome);
      console.log(`Nome social: ` + cliente.nomeSocial);
      console.log(
        `Data de cadastro: ` + cliente.getDataCadastro.toLocaleDateString()
      );
      console.log(`CPF: ` + cliente.getCpf.getValor);
      console.log(
        `RGs: \n${cliente.getRgs
          .map((rg) => {
            return `Rg: ${
              rg.getValor
            } - Data de emissão: ${rg.getDataEmissao.toLocaleDateString()}`;
          })
          .join("\n")}`
      );
      console.log(
        `Telefones: \n${cliente.getTelefones
          .map((telefone) => {
            return `Telefone: (${telefone.getDdd}) ${telefone.getNumero}`;
          })
          .join("\n")}`
      );
      console.log(
        `Pets: \n${cliente.getPets
          .map((pet) => {
            return `Nome: ${pet.getNome} - Tipo: ${pet.getTipo} - Raça: ${pet.getRaca} - Gênero: ${pet.getGenero}`;
          })
          .join("\n")}`
      );
      console.log(`--------------------------------------`);
    });
    console.log(`\n`);
  }
}
