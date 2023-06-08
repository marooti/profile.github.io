import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  val2: number = 5;
  numVisibleSlides = 3;
  carouselItems: any[] = [
    {
      content: 'Their ability to report, analyze, and present data in real-time is truly remarkable. With their cloud-based technology, accessing and reviewing information has never been easier. The convenience and efficiency it brings to our operations are unmatched.',
      avatar: '../../../assets/Frame 74.png',
      name: 'Serhiy Hipskyy',
      position: 'CEO'
    },
    {
      content: 'Their ability to report, analyze, and present data in real-time is truly remarkable. With their cloud-based technology, accessing and reviewing information has never been easier. The convenience and efficiency it brings to our operations are unmatched.',
      avatar: '../../../assets/Frame 74.png',
      name: 'Serhiy Hipskyy',
      position: 'CEO'
    },
    {
      content: 'Their ability to report, analyze, and present data in real-time is truly remarkable. With their cloud-based technology, accessing and reviewing information has never been easier. The convenience and efficiency it brings to our operations are unmatched.',
      avatar: '../../../assets/Frame 74.png',
      name: 'Serhiy Hipskyy',
      position: 'CEO'
    },
    // Add more items as needed
  ];
  

  constructor() { }

  ngOnInit(): void {
    this.updateNumVisibleSlides();

  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.updateNumVisibleSlides();
  }
  updateNumVisibleSlides() {
    if (window.innerWidth <= 600) {
      this.numVisibleSlides = 1;
    } else if (window.innerWidth <= 1200) {
      this.numVisibleSlides = 2;
    } else {
      this.numVisibleSlides = 3;
    }
  }

}
