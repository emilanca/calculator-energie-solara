import { Component, OnInit } from '@angular/core';
import {CalculatorData} from "./calculatordata";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorData : CalculatorData = {
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
        name: "Putere inst. nec.",
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
        name: "Supl. nec.",
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
    estimareTable: {},
    amortizareTable: {},
    id: 1
  };

  constructor() { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.calculatorData.baseTable.kwhLuna.value = this.calculatorData.baseTable.pretFactura.value/this.calculatorData.baseTable.pretKwh.value;
    this.calculatorData.baseTable.kwhZi.value = this.calculatorData.baseTable.kwhLuna.value/30;
    this.calculatorData.baseTable.putereInstalataNecesara.value = this.calculatorData.baseTable.kwhZi.value/3.5;
    this.calculatorData.baseTable.nrPanouri.value = this.calculatorData.baseTable.putereInstalataNecesara.value/this.calculatorData.baseTable.watiPanouri.value;
    this.calculatorData.baseTable.supNecesar.value =  this.calculatorData.baseTable.nrPanouri.value*1.68;

    // putere instalata
    this.calculatorData.putereInstalataSection.perOra.value = this.calculatorData.baseTable.putereInstalataNecesara.value;
    this.calculatorData.putereInstalataSection.perZi.value = this.calculatorData.putereInstalataSection.perOra.value*this.calculatorData.putereInstalataSection.pi.value;
    this.calculatorData.putereInstalataSection.perLuna.value = this.calculatorData.putereInstalataSection.perZi.value*30;
    this.calculatorData.putereInstalataSection.perAn.value = this.calculatorData.putereInstalataSection.perZi.value*365;

    //ecologie
    this.calculatorData.ecologicSection.co2Salvat.value = this.calculatorData.putereInstalataSection.perZi.value* 0.392;
    this.calculatorData.ecologicSection.copaciSalvati.value = this.calculatorData.putereInstalataSection.perLuna.value* 1.31;
    this.calculatorData.ecologicSection.becuriAlimentate.value = this.calculatorData.putereInstalataSection.perAn.value* 3.03;
  }

}
