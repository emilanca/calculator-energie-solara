import { Component, OnInit } from '@angular/core';
import {CalculatorInitData, CalculatorData} from "./calculatordata";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorData : CalculatorData = CalculatorInitData;

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

  // First CHART
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Energie estimata';
  showYAxisLabel = true;
  yAxisLabel = 'kwh';

  colorScheme = {
    domain: ['#4682B4']
  };

  onSelect(event) {
    console.log(event);
  }

  single = [
    {
      "name": "Ianuarie",
      "value": 8940000
    },
    {
      "name": "Februarie",
      "value": 5000000
    },
    {
      "name": "Martie",
      "value": 7200000
    },
    {
      "name": "Aprilie",
      "value": 5200000
    },
    {
      "name": "Mai",
      "value": 3200000
    }
  ];
  // END of First Chart
}
