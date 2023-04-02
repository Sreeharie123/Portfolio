import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { Services } from 'src/app/models/services';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }

  constructor(private tostr:ToastrService){}

  servcesList: Services[] = [
    {
      title: 'Web Development',
      icon: 'fa fa-desktop',
      content: `
  My approach to web development is focused on creating solutions that
  are both technically sound and visually appealing. I believe in a
  collaborative approach, working closely with clients to understand
  their needs and goals and finding the best solutions to achieve them.
  I'm always learning and experimenting with new technologies and design
  trends to create innovative and effective web solutions.

  `
    },
    {
      title: 'Web Design',
      icon: 'fa-solid fa-globe',
      content: `
  I believe that good design should be functional,
  aesthetically pleasing, and user-centered. When i
  designing so many website, I focused on creating a
  clean and modern design that would make it easy for
  users to find the information they need and engage with
  the brand. I also used color and typography to create a
  cohesive visual identity that aligns with the company's
  branding guidelines. Overall, my goal was to create a website
  hat not only looks good but also helps the client achieve
  their business goals.

  `
    },
    {
      title: 'frontEnd Development',
      icon: 'fa-brands fa-angular',
      content: `
      As the frontend developer for this project, I was
      responsible for designing and implementing the user
       interface, integrating with the backend team to ensure
        seamless functionality, and implementing responsive design
         to optimize the user experience across multiple devices.
         One of the main challenges I faced was integrating with
         the REST API, but I was able to overcome this challenge by
         creating a custom service that allowed for seamless communication
          between the frontend and backend teams.

  `
    },
    {
      title: 'BackEnd Development',
      icon: 'fa-brands fa-node-js',
      content: `
      The backend architecture is built using Node.js and
      Express. The RESTful API is used to connect with the
       frontend of the application. MongoDB is used to store
        data, with Mongoose used as an Object-Document Mapper
         (ODM) to provide a high-level abstraction over the
          database. JWT is used for authentication, and Stripe
           is used for payment processing.

  `
    },

  ];

  // ---------------------------------------------------node mailer--------------------------------------------------------

  onsubmit(data:NgForm){
    this.tostr.success("Message send successfully")
    data.reset()
  }

}
