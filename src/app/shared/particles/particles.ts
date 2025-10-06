import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles.html',
  styleUrls: ['./particles.css']
})
export class ParticlesComponent implements OnInit, OnChanges {
  @Input() count = 25;                  // how many dots
  @Input() color = '0,255,198';         // RGB (mint by default)
  @Input() minSize = 4;                 // px
  @Input() maxSize = 10;                // px
  @Input() minSpeed = 10;               // seconds
  @Input() maxSpeed = 18;               // seconds

  particles: number[] = [];

  ngOnInit() { this.rebuild(); }
  ngOnChanges() { this.rebuild(); }

  private rebuild() { this.particles = Array.from({ length: this.count }, (_, i) => i); }

  // deterministic “random” based on index so particles don’t jump on change
  private r(i: number, min: number, max: number) {
    const x = Math.sin((i + 1) * 9973) * 10000;
    const f = x - Math.trunc(x);
    return min + f * (max - min);
  }

  top(i: number)  { return this.r(i, 5, 95); }            // %
  left(i: number) { return this.r(i + 11, 5, 95); }       // %
  size(i: number) { return Math.round(this.r(i + 23, this.minSize, this.maxSize)); }
  dur(i: number)  { return this.r(i + 41, this.minSpeed, this.maxSpeed); } // s
}
