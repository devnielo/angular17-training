import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]">
    Heave Loader Slow
  </section>
  `
})
export class HeavyLoadersSlowComponent {
  @Input({required: true}) cssClass!: string;
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {

    }
    console.log('Cargado.');

  }
}
