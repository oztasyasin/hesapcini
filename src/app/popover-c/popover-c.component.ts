import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-popover-c',
  templateUrl: './popover-c.component.html',
  styleUrls: ['./popover-c.component.scss'],
})
@NgModule({
  imports: [
    CommonModule,FormsModule
]
})
export class PopoverCComponent implements OnInit {
  @Input() data;
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.data);
    
  }

}
