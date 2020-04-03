import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
 
  @Input() year: number;
  @Input() name: string;
  @Input() color: string;
  @Input() pantone: string;
  isCopied: boolean;
  
  constructor() {}

  ngOnInit(): void {
 
  }


}
