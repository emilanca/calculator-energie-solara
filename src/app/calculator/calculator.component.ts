import {Component, OnInit} from '@angular/core';
import {amortizareTablerow, CalculatorData, CalculatorInitData} from "./calculatordata";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculatorData : CalculatorData = CalculatorInitData;
  graphData;
  amortizareGraphData;

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

    //estimare

    const constEstimare = this.calculatorData.putereInstalataSection.perAn.value;
    const preKwh = this.calculatorData.baseTable.pretKwh.value;
    let monthArray = this.calculatorData.estimareTable.luni;
    monthArray.map(value => {
        value.valueKwh=constEstimare*value.valueConst/100;
        value.valueEco=preKwh*value.valueKwh;
      }
    );

    this.calculatorData.estimareTable.medie.valueKwh = monthArray.map(
      value => value.valueKwh
    ).reduce((a,b) => a+b)/this.calculatorData.estimareTable.luni.length;

    this.calculatorData.estimareTable.medie.valueEco =this.calculatorData.estimareTable.medie.valueKwh * preKwh;

    this.calculatorData.estimareTable.economiiRon = monthArray.map(value=> value.valueEco).reduce((a,b) => a+b);
    this.calculatorData.estimareTable.economiiEur =this.calculatorData.estimareTable.economiiRon / 4.6;

    this.graphData = this.calculatorData.estimareTable.luni.map(
      element =>
      {
        //let random = Math.floor(Math.random() * (999999 - 100000)) + 100000; SWEETNESS
        let result = {
          "name": element.name,
          "value": element.valueKwh
        };
        return result;
      }
    );

    // amortizarea investitiei

    let amortizareTableRows : amortizareTablerow[] = [];
    let initialRow : amortizareTablerow  = new amortizareTablerow();
    initialRow.year=new Date().getFullYear();
    initialRow.economiiYearlyValue=this.calculatorData.estimareTable.economiiEur;
    initialRow.value=initialRow.economiiYearlyValue;
    initialRow.amortizareYearlyValue=initialRow.economiiYearlyValue*(3/100); // 3% hardcoded

    amortizareTableRows.push(initialRow);

    for (let _year = 1; _year < 20; _year++) {
      let row : amortizareTablerow = new amortizareTablerow();
      let prevRow : amortizareTablerow = amortizareTableRows[amortizareTableRows.length-1];
      row.year = amortizareTableRows[0].year+_year;
      row.economiiYearlyValue =  prevRow.economiiYearlyValue+prevRow.amortizareYearlyValue;
      row.value = prevRow.value+row.economiiYearlyValue;
      row.amortizareYearlyValue = row.economiiYearlyValue*(3/100); // 3% hardcoded
      amortizareTableRows.push(row)
    }
    this.calculatorData.amortizareTable.rows = amortizareTableRows;

    this.amortizareGraphData = this.calculatorData.amortizareTable.rows.map(
      row =>
      {
        return {
          "name": row.year + 1 - new Date().getFullYear(),
          "value": row.value
        };
      }
    );

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
  yAxisLabel = 'kWh';

  colorScheme = {
    domain: ['#4682B4']
  };

  onSelect(event) {
    console.log(event);
  }


  // END of First Chart
}
