import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentDataInChild: string = '';

  childData: string = 'Monu';

  @Output()
  passData = new EventEmitter<string>();

  sendDataToParent = () => {
    // console.log(this.childData);
    this.passData.emit(this.childData);
  };
}
