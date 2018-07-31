import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  constructor() { }


  public imagesUrl;
  ngOnInit() 
  {
   
    this.imagesUrl = [
      'assets/images/team/beamteam.gif',
      'assets/images/team/bostik.gif',
      'assets/images/team/cleancoat.gif',
      'assets/images/team/esab.gif',
      'assets/images/team/gunjan.gif',
      'assets/images/team/karam.gif',
      'assets/images/team/panasonic.gif',
      ];
}

}
