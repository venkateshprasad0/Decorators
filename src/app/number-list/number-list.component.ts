import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numArray: number[] = [1,2,3,4,5,6,7,8,10];

  @ViewChildren(NumberComponent) myValue!: QueryList<NumberComponent>;


  selectAll() {
    this.myValue.forEach(val => {
      val.isChecked = true;
    })
  }

  selectOdd() {
    this.myValue.forEach(val => {
      if (val.numVal % 2 != 0) {
        val.isChecked = true;
      }
    })
  }

  clear() {
    this.myValue.forEach(val => {
      if (val.isChecked) {
        val.isChecked = false;
      }
    })
  }

}
