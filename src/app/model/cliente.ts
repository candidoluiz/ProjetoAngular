import { VendedorDto } from "./vendedor";

export class ClienteDto{

  clienteId: number;
  cnpj:string;
  razaoSocial: string;
  lat: string;
  longi: string;
  vendedorDto: VendedorDto;


}
