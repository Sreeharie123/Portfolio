import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isTrue:boolean=false

  open(booleanData:boolean){
    this.isTrue=!booleanData
  }

}
