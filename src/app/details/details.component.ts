import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private router: Router,private api : ApiService) { }

  ngOnInit(): void {
  this.router.navigateByUrl('/details');  
}
  
}
