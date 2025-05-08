import { IProduct } from "@/models/product/product";

export const mockProducts: IProduct[] = [
  {
    id: "p1",
    name: "Fatia de chocolate",
    price: 20,
    code: "FAT001",
    promotionalPrice: 17,
    description: "Fatia com massa de chocolate e cobertura de chocolate",
    image: "",
    category: {
      id: "d1",
      name: "Doces",
    },
  },
  {
    id: "p2",
    name: "Coxinha de morango",
    price: 16,
    code: "COXM001",
    description: "Morango coberto com recheio de Ninho",
    image: "",
    category: {
      id: "d1",
      name: "Doces",
    },
  },
  {
    id: "p3",
    name: "Coxinha de frango com catupiry",
    price: 16,
    code: "COXFC001",
    description: undefined,
    image: undefined,
    category: {
      id: "s1",
      name: "Salgados",
    },
  },
];
