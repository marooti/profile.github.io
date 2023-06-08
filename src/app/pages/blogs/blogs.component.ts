import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  dataArray: any[] = [
    {
      image: '../../../assets/blogs/blog-page.png',
      date: '19-May-2023',
      heading: 'Essential Insurances for Security Guard Companies: 5 Key Types',
      content: 'Their ability to report, analyze, and present data in real-time is truly remarkable. With their cloud-based technology, accessing and reviewing information has never been easier. The convenience and efficiency it brings to our operations are unmatched.',
      read:'Read more',
    },
    {
      image: '../../../assets/blogs/blog-page.png',
      date: '19-May-2023',
      heading: 'Essential Insurances for Security Guard Companies: 5 Key Types',
      content: 'Their ability to report, analyze, and present data in real-time is truly remarkable. With their cloud-based technology, accessing and reviewing information has never been easier. The convenience and efficiency it brings to our operations are unmatched.',
      read:'Read more',
    },
    {
      image: '../../../assets/blogs/blog-page.png',
      date: '19-May-2023',
      heading: 'Essential Insurances for Security Guard Companies: 5 Key Types',
      content: 'Their ability to report, analyze, and present data in real-time is truly remarkable. With their cloud-based technology, accessing and reviewing information has never been easier. The convenience and efficiency it brings to our operations are unmatched.',
      read:'Read more',
    },
    // Add more items as needed
  ];
  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  navigate(){
  this.route.navigate(['view-blog']);
  }

}
