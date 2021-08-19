import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashCard = [
    { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 20, title: 'EMPLOYEES', icon: 'list_employee' },
    { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 250, title: 'SESSIONS', icon: 'session' },
    { colorDark: '#66BB6A', colorLight: '#81C784', number: 348, title: 'SATISFIED USER', icon: 'box' },
    { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 154, title: 'UNSATISFIED USER', icon: 'box' },
  ];

  constructor() { }

  ngOnInit() {}
}
