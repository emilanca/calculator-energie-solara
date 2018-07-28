export class CalculatorData {
  id: number;
  baseTable: {
    pretFactura: {
      name: string,
      value: number
    },
    pretKwh: {
      name: string,
      value: number
    },
    kwhLuna: {
      name: string,
      value: number
    },
    kwhZi: {
      name: string,
      value: number
    },
    putereInstalataNecesara: {
      name: string,
      value: number
    },
    watiPanouri: {
      name: string,
      value: number
    },
    nrPanouri: {
      name: string,
      value: number
    },
    supNecesar: {
      name: string,
      value: number
    }
  };
  estimareTable: object;
  amortizareTable: object;
}


