import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  reltedBlogs: any[] = [
    {
      image: '../../../assets/blogs/blog-page.png',
      title: '4 Minute Read',
      sub_title: 'Essential Insurances for Security Guard Companies: 5 Key Types',
      discription: 'Regardless of whether youre starting a new business or operating an established one, obtaining insurance is essential.Why ? Because the business landscape is filled with uncertainties, and there are no guarantees.Therefore, it is always prudent to protect yourself with insurance and be prepared for any unforeseen circumstances....',

    },
    {
      image: '../../../assets/blogs/blog-page.png',
      title: '4 Minute Read',
      sub_title: 'Essential Insurances for Security Guard Companies: 5 Key Types',
      discription: 'Regardless of whether youre starting a new business or operating an established one, obtaining insurance is essential.Why ? Because the business landscape is filled with uncertainties, and there are no guarantees.Therefore, it is always prudent to protect yourself with insurance and be prepared for any unforeseen circumstances....',

    },
    {
      image: '../../../assets/blogs/blog-page.png',
      title: '4 Minute Read',
      sub_title: 'Essential Insurances for Security Guard Companies: 5 Key Types',
      discription: 'Regardless of whether youre starting a new business or operating an established one, obtaining insurance is essential.Why ? Because the business landscape is filled with uncertainties, and there are no guarantees.Therefore, it is always prudent to protect yourself with insurance and be prepared for any unforeseen circumstances....',

    },
  ]
  data: any[] = [
    {
      image: '../../../assets/blogs/blog-page.png',
      title: 'New Blog',
      discription: 'Essential Insurances for Security Guard Companies: 5 Key Types'

    },
    {
      image: '../../../assets/blogs/blog-page.png',
      title: 'New Blog',
      discription: 'Essential Insurances for Security Guard Companies: 5 Key Types'
    },
    {
      image: '../../../assets/blogs/blog-page.png',
      title: 'New Blog',
      discription: 'Essential Insurances for Security Guard Companies: 5 Key Types'

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
