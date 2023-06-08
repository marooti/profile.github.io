import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // page scroll to top 
  scrollPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  makePhoneCall(number: any){
    window.location = number;
  }
  openFacebook() {
    window.open(`/`);
  }
  openTwitter() {
    window.open(``);
  }
  openInstagram() {
    window.open(``);
  }
  openLinkedin(){
    window.open(``);

  }
}
