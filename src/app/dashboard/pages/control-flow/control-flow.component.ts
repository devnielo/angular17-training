import { Component, Output, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('F');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Astro', 'React']);
  public frameworks2 = signal([]);

  @Output() title: string = 'Control Flow';

  toogleContent() {
    this.showContent.update((value) => !value);
  }
}
