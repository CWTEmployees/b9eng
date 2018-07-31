import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  public imagesUrl;
  ngOnInit() 
  {
   
    this.imagesUrl = [
      'assets/images/slides/coverall.jpg',
      'assets/images/slides/toolbag.jpg',
      'assets/images/slides/lanyards.jpg',
      'assets/images/slides/rope.png',
      'assets/images/slides/shoes.gif',
      'assets/images/slides/jacket.gif',
      'assets/images/slides/fls.png',
      ];
}
}
