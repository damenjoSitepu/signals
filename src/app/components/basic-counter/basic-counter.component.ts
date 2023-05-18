import { Component, Signal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'basic-counter',
  templateUrl: './basic-counter.component.html',
  styleUrls: ['./basic-counter.component.scss']
})
export class BasicCounterComponent {
    protected counter = signal(0);
    protected computedCounter = computed(() => this.counter() * 3);
    private counterEffect = effect(() => console.log('Counter Changed To: ' + this.counter()));

    protected incrementCounter(): void {
        this.counter.update((current) => current + 1);
    }
}
