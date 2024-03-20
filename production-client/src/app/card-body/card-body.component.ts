import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-card-body',
  standalone: true,
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.scss'
})
export class CardBodyComponent {

  private document = inject(DOCUMENT);
   myFunction(){
    let el=this.document.getElementById("myButton");
    
    setTimeout(() =>this.document.getElementById("myButton")?.focus(),4);
    setTimeout(() => el?.blur(),3000);
  

    
    
    //console.log(elm);
  }

  bookNowBlur(){
    let el=this.document.getElementById("myButton");
    setTimeout(() => el?.blur(),30);
  }
 
}
