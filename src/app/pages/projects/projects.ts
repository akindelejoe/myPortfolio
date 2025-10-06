import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../shared/particles/particles';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
   {
     title: 'Tuba Farm Equipment - Tractor Selector',
     description: 
     'A full-stack app that recommends a tractor model based on farm inputs (acres, crops, months worked, and preferred fuel). Frontend is plain HTML/CSS/JS; backend is Node/Express. Deployed on Render.',
     demo: 'https://tractor-selector-15.onrender.com/',
     github: 'https://github.com/akindelejoe/Tractor-selector.git'
   },
   {
    title:'Crop Harvest Tracker',
    description:'A Node.js CLI application that helps users track crop planting and harvest timelines. The app stores data in MongoDB Atlas using Mongoose for persistence. Features: Add crops with type, location, and planting date. View all crops with days left until harvest. Delete crops by type. Automatic harvest date calculation. Alert when harvest is less than a week away.',
    github: 'https://github.com/akindelejoe/HarvestTrack.git'
   },
   {
    title: 'Arese Fit',
    description:
      'WordPress-based Business Website with Elementor pagebuilder and WP Bakery.',
      demo: 'https://arese.fit/'
  },
  {
    title: 'Bonsai-faq',
    description:
      'A web-based FAQ application built with HTML, CSS, JavaScript, and jQuery. It provides clear and organized answers in an interactive format with smooth toggling effects. Demonstrates ability to enhance interactivity and usability with jQuery.',
      demo:'https://akindelejoe.github.io/bonsai-faq/'
  },
  {
    title: 'Guess-the-football-player',
    description:
      'An interactive web game built with HTML, CSS, and JavaScript. Players guess the name of a football player from hints. Demonstrates handling user events, DOM manipulation, and creating fun responsive experiences.',
      demo: 'https://guess-the-football-player.netlify.app/',
  }
];
}

