import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentData: string = 'Sonu';
  childDataInParent: string = '';

  getDataFromChild = (dataFc: string) => {
    // console.log(dataFc);
    this.childDataInParent = dataFc;
  };
}
