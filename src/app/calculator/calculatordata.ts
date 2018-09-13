export class luna {
  name: string;
  valueKwh: number;
  valueEco: number;
  valueConst: number;
}
export class amortizareTablerow {
  year: number;
  value: number;
  economiiYearlyValue: number;
  amortizareYearlyValue: number;
}
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
  putereInstalataSection: {
    pi: {
      name: string,
      value: number
    },
    perOra: {
      name: string,
      value: number
    },
    perZi: {
      name: string,
      value: number
    },
    perLuna: {
      name: string,
      value: number
    },
    perAn: {
      name: string,
      value: number
    }
  };
  ecologicSection: {
    co2Salvat: {
      name: string,
      value: number
    },
    copaciSalvati: {
      name: string,
      value: number
    },
    becuriAlimentate: {
      name: string,
      value: number
    }
  };
  estimareTable: {
    luni : luna[],
    medie: luna,
    economiiRon: number,
    economiiEur: number


  };
  amortizareTable: {
    rows: amortizareTablerow[]
  };
}

export var CalculatorInitData = {
  baseTable: {
    pretFactura: {
      name: "Pret Factura",
      value: 500
    },
    pretKwh: {
      name: "Pret kwh",
      value: 0.57
    },
    kwhLuna: {
      name: "Kwh/luna",
      value: 0
    },
    kwhZi: {
      name: "Kwh/zi",
      value: 0
    },
    putereInstalataNecesara: {
      name: "Putere instalata necesara",
      value: 0
    },
    watiPanouri: {
      name: "Wati Panouri",
      value: 0.275
    },
    nrPanouri: {
      name: "Numar panouri",
      value: 0
    },
    supNecesar: {
      name: "Supliment necesar",
      value: 0
    }
  },
  putereInstalataSection: {
    pi: {
      name: "Putere instalata",
      value: 3.5
    },
    perOra: {
      name: "Orara",
      value: 0
    },
    perZi: {
      name: "Zilnica",
      value: 0
    },
    perLuna: {
      name: "Lunara",
      value: 0
    },
    perAn: {
      name: "Anuala",
      value: 0
    }
  },
  ecologicSection: {
    co2Salvat: {
      name: "CO2 Salvat(Tone)",
      value: 0
    },
    copaciSalvati: {
      name: "Copaci salvati",
      value: 0
    },
    becuriAlimentate: {
      name: "Becuri alimentate",
      value: 0
    }
  },
  estimareTable: {
    luni: [
      {name: "Ian",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 3.6
      },
      {name: "Feb",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 4.9
      },
      {name: "Mar",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 7.9
      },
      {name: "Apr",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 9.8
      },
      {name: "Mai",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 11.9
      },
      {name: "Iun",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 12.4
      },
      {name: "Iul",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 12.7
      },
      {name: "Aug",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 12.3
      },
      {name: "Sep",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 8.7
      },
      {name: "Oct",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 7.5
      },
      {name: "Nov",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 4.9
      },
      {name: "Dec",
        valueKwh: 0,
        valueEco: 0,
        valueConst: 3.4
      }
    ],
    medie: {name: "Medie",
      valueKwh: 0,
      valueEco: 0,
      valueConst: 100
    },
    economiiRon: 0,
    economiiEur: 0
  },
  amortizareTable: {
    rows: [],

  },
  id: 1
};



