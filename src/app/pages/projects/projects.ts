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
      'Tuba Farm Equipment – Tractor Selector is a full-stack web application that helps farmers choose the most suitable tractor model based on key inputs such as farm size, crop type, months worked, and preferred fuel. The goal was to build a smart, user-friendly recommendation tool that connects a lightweight frontend (HTML, CSS, and JavaScript) to a Node.js and Express backend through RESTful APIs.',
      demo: 'https://tractor-selector-15.onrender.com/',
      github: 'https://github.com/akindelejoe/Tractor-selector.git'
    },
    {
      title: 'Crop Harvest Tracker',
      description: 'A Node.js CLI application that helps users track crop planting and harvest timelines. The app stores data in MongoDB Atlas using Mongoose for persistence. Features: Add crops with type, location, and planting date. View all crops with days left until harvest. Delete crops by type. Automatic harvest date calculation. Alert when harvest is less than a week away.',
      github: 'https://github.com/akindelejoe/HarvestTrack.git'
    },
    {
      title: 'Traditional Portolio',
      description:'This portfolio was built entirely with traditional front-end technologies — HTML, CSS, and Vanilla JavaScript — to showcase my ability to create elegant, fully responsive websites without relying on frameworks. The layout was hand-coded from the ground up, focusing on clean structure, semantic HTML, and well-organized styling. One of the standout features of this project is the interactive animated background, which adds motion and life to the page. It gives the portfolio a dynamic, modern feel while still maintaining fast load times and smooth performance. The background reacts subtly as users scroll or hover, demonstrating my attention to user engagement and interface detail.',
      demo:'https://joe-fullstack.netlify.app/',
      github: 'https://github.com/akindelejoe/portfolio.git'
    },
    {
      title: 'Arese Fit',
      description:
        'ARÉSÈJÁBÀTÁ is an e-commerce brand (“Feet & Fits”) that sells footwear (sneakers, boots, sandals, etc.), offering product variants, multiple currencies (USD / NGN), and a polished, visually rich storefront. The site is built on WordPress, leveraging both Elementor and WPBakery page builders to create custom layouts, blended with WooCommerce for the shopping and catalog functionality.',
      demo: 'https://arese.fit/'
    },
    {
      title: 'Bonsai-faq',
      description:
        'A web-based FAQ application built with HTML, CSS, JavaScript, and jQuery. It provides clear and organized answers in an interactive format with smooth toggling effects. Demonstrates ability to enhance interactivity and usability with jQuery.',
      demo: 'https://akindelejoe.github.io/bonsai-faq/'
    },
    {
      title: 'Guess-the-football-player',
      description:
        'An interactive web game built with HTML, CSS, and JavaScript. Players guess the name of a football player from hints. Demonstrates handling user events, DOM manipulation, and creating fun responsive experiences.',
      demo: 'https://guess-the-football-player.netlify.app/',
    },
    {
    title: 'BioSite',
    description:
    'BioSite — A simple personal biography website built with HTML and CSS. It highlights my background, hobbies and interests through a clean, multi-page layout. This project marked my early journey into front-end development and helped me learn the fundamentals of structuring and styling web pages.',
    demo: 'https://akindelejoe.github.io/bioSite/'
    }
  ];
}
