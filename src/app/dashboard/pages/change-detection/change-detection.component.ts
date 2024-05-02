import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />
    <pre>{{ frameworkasSignal() | json }}</pre>
    <pre>{{ frameworkasProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change detection ${this.frameworkasSignal().name}`
  );
  public frameworkasSignal = signal({
    name: 'Angular',
    realeseDate: 2016,
  });

  public frameworkasProperty = {
    name: 'Angular',
    realeseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkasSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      // this.frameworkasProperty.name = 'React';
      console.log('Hecho');
    }, 3000);
  }
}
