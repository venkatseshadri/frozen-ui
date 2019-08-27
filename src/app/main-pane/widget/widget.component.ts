import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  @Input() title: string | String;
  @Input() amount: string | String;
  @Input() percent: string | String;

  myTitle:String;
  myAmount:String; 
  myPercent:String;

  constructor() {
    this.myTitle = this.title;
    this.myAmount = this.amount;
    this.myPercent = this.percent;
   }

  ngOnInit() {
    this.myTitle = this.title;
    this.myAmount = this.amount;
    this.myPercent = this.percent;

    console.log('Title '+ this.title);
    console.log('Amount '+this.amount);
    console.log('Percent '+this.percent);
  }

}
