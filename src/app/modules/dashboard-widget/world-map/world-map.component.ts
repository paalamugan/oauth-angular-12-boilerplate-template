import { Component, OnInit, Input } from '@angular/core';

declare const AmCharts : any;
@Component({
  	selector: 'cdk-world-map',
  	templateUrl: './world-map.component.html',
  	styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
	
	@Input() tableData: any = [];
	constructor() { }

  	ngOnInit() {
  		var map = AmCharts.makeChart( "chartdiv", {

		  	"type": "map",
		  	"theme": "light",
		  	"projection": "miller",

		  	"dataProvider": {
		    	"map": "worldLow",
		    	"getAreasFromMap": true
		  	},
		  	"areasSettings": {
		    	"autoZoom": true,
		    	"selectedColor": "#CC0000"
		  	},
		} );
  	}
}
