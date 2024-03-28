import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-card-body',
  standalone: true,
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.scss'
})
export class CardBodyComponent {

  wp:any=false;
  ac:any=false;
  wmachine:any=false;
  fridge:any=false;



  private document = inject(DOCUMENT);
   myFunction(){
    let el=this.document.getElementById("myButton");
    
    setTimeout(() =>this.document.getElementById("myButton")?.focus(),4);
    setTimeout(() => el?.blur(),3000);
  

    
    
    console.log(el);
  }
  detailsClic(sgtr:any){
    console.log(sgtr);
    this.wp=true
  }
  myFunctionwp(){
    let el=this.document.getElementById("myButton");
    
    setTimeout(() =>this.document.getElementById("myButton")?.focus(),10);
    //setTimeout(() => el?.blur(),3000);
  

    
    
    console.log(el);
  }

  bookNowBlur(){
    let el=this.document.getElementById("myButton");
    setTimeout(() => el?.blur(),30);
  }

  detailsClick(abc:any){
    console.log('inside method');
    console.log(abc);
    if(abc=='wp'){
      this.wp=true;
      this.ac=false;
      this.fridge=false;
      this.wmachine=false;
    }else if(abc=='ac'){
      this.ac=true;
      this.wp=false;
      this.fridge=false;
      this.wmachine=false;
    }else if(abc=='wmachine'){
      this.wp=false;
      this.ac=false;
      this.fridge=false;
      this.wmachine=true;

    }else if(abc=='fridge'){
      this.wp=false;
      this.ac=false;
      this.fridge=true;
      this.wmachine=false;
    }
  }
 
}
