import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParticlesComponent } from '../../shared/particles/particles';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ParticlesComponent],
  templateUrl: './about.html',     
  styleUrls: ['./about.css']       
})
export class AboutComponent { }
