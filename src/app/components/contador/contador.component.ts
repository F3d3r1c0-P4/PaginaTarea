import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  numero:number = 0

  sumar(){
    this.numero += 1
  }

  restar(){
    this.numero -= 1
  }

  ngOnInit(): void {
  }

}
