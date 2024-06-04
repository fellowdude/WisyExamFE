import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { TDataset } from '../../types/dataset.type';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnInit{
  public chart: any;

  @Input() labels: Array<string> = []
  @Input() datasets: Array<TDataset> = []
  @Input() xAxisLabel: string = ''
  @Input() yAxisLabel: string = ''

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: this.labels,
	      datasets: this.datasets,
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              text: this.yAxisLabel,
              display: true,
              align: 'center'
            }
          },
          x: {
            title: {
              text: this.xAxisLabel,
              display: true,
              align: 'center'
            }
          }
        },
        responsive: false
      },
    });
  }
}
