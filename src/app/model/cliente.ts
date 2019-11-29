import { VendedorDto } from './vendedor';

export class ClienteDto{

  clienteId: number;
  nome: string;
  cnpj: string;
  razaoSocial: string;
  lat: string;
  longi: string;
  distancia: string;
  vendedorDto: VendedorDto;




}
