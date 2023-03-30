import { Component, HostListener } from '@angular/core';

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



darkNav:boolean=false

@HostListener('document:scroll')

onScroll(){
if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){

  this.darkNav=true
}else{
  this.darkNav=false
}
}


}
