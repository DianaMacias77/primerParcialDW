import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements AfterViewInit, OnInit {
  @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

  source = [{ Browser: 'Profesores', Share: 68.95 }, { Browser: 'Alumnos', Share: 10.67 }];
    caption = 'Visitas';
    showLegend = true;
    showBorderLine = true;
    legendPosition = { left: 520, top: 140, width: 100, height: 100 };
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSource = this.source;
    seriesGroups = [
        {
            type: 'pie',
            showLabels: true,
            series: [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 15,
                    radius: 30,
                    centerOffset: 0,
                    formatFunction: function (value) {
                        if (isNaN(value)) {
                            // Legend labels formatting
                            return value;
                        }
                        return parseFloat(value) + '%';
                    },
                    useGradientColors: false
                }
            ]
        }
    ];

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.init();
}
init(): void {

}

}
