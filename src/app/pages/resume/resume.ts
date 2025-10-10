import { Component } from '@angular/core';
import { ParticlesComponent } from '../../shared/particles/particles';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ParticlesComponent],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class ResumeComponent {
  downloadResume() {
    window.open('assets/Joseph-Akindele-Resume-updated-I.pdf', '_blank');
  }
}