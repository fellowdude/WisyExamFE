import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LineChartComponent } from '../../shared/components/line-chart/line-chart.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GraphDataService } from '../../shared/services/api/graph-data/graph-data.service';
import { ParseDataService } from '../../shared/services/content/parse-data/parse-data.service';
import { TParsedData } from '../../shared/types/parsed-data.type';
import { NotificationService } from '../../shared/services/content/notification/notification.service';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule, LineChartComponent, RouterModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit{

  notificationService = inject(NotificationService);

  graphData!: TParsedData | undefined;
  id: string = '';
  title: string = '';


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private graphDataService: GraphDataService, private parseDataService: ParseDataService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ()=>{
        this.title = '';
        this.graphData = undefined;
        this.id = (this.activatedRoute.snapshot.params['id'] as string).toUpperCase();
        switch(this.id){
          case 'TOP': {
            this.title = 'Kansas Forecast';
            break;
          }
          case 'LWX': {
            this.title = 'District of Columbia Forecast';
            break;
          }
          default: {
            this.title = `ID: ${this.id} is unknown` ;
            this.notificationService.show({
              message: `ID: ${this.id} is unknown`,
              classname: 'bg-danger text-light',
              delay: 15000
            })
            this.id = '';
            this.router.navigate(['']);
          }
        }
        this.graphDataService.registerParticipant(this.id).subscribe({
          next: (res) => {
            this.graphData = this.parseDataService.parseDataToGraph(res);
            if(!this.graphData) this.router.navigate(['']);
          },
          error: ()=>{
            this.router.navigate(['']);
          }
        })
      }
    )

  }
}
