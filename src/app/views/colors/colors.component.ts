import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  actualPage: number = 1;
  
  constructor(public colorService:ColorsService) { }

  

  ngOnInit(): void {
  }

}
