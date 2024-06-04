import { Injectable } from '@angular/core';
import { TParsedData } from '../../../types/parsed-data.type';

@Injectable({
  providedIn: 'root'
})
export class ParseDataService {

  constructor() { }

  parseDataToGraph(res: any): TParsedData | undefined {
    if(!res) return undefined;

    let parsedData: TParsedData = {
      labels: [],
      dataset: [{
        label: 'Temperature (F)',
        data: [],
        backgroundColor: ''
      }],
      xAxisLabel: 'Periods',
      yAxisLabel: 'Temperature (F)'
    };

    console.log(res);

    let rawLabels: Array<string> = [];
    let rawData: Array<string> = [];
    res.properties?.periods?.forEach(
      (period: any)=>{
        rawLabels.push(period.name);
        rawData.push(period.temperature+'')
      }
    )

    parsedData.labels = rawLabels;
    parsedData.dataset[0].data = rawData;

    return parsedData;
  }
}
