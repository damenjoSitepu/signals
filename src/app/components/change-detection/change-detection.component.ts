import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent {
    protected counter = signal(0);
    protected computedCounter = computed(() => {
        console.log('Computed Called!');
        return this.counter() * 6;
    });

    protected inc() {
        this.counter.update(current => {
            return current + 1;
        });
    }

    protected logButton() {
        console.log('Buttons get clicked');
    }

    protected getRandomNumber() {
        return Math.random();
    }
}
