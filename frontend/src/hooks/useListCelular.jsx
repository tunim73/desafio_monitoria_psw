export const useListCelular = () => {
  const listCelular = [
    {
      id: 1,
      marca: "Samsung",
      modelo: "Galaxy S21",
      capacidade_memoria_gb: 256,
      data_lancamento: "2021-01-29",
    },
    {
      id: 2,
      marca: "Xiaomi",
      modelo: "Redmi Note 10",
      capacidade_memoria_gb: 128,
      data_lancamento: "2021-03-04",
    },
    {
      id: 3,
      marca: "Motorola",
      modelo: "Moto G Power",
      capacidade_memoria_gb: 64,
      data_lancamento: "2020-04-01",
    },
  ];

  return { listCelular };
};
