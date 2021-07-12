import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  public varQuery:string;
  
  constructor(private route:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.varQuery = this.route.snapshot.queryParams.paginaquery

  }

}
