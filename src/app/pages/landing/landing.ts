import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from '../../shared/particles/particles';

@Component({
  selector: 'app-landing',
  standalone:true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {

}
