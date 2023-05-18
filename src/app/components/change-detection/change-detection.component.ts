import { Component, computed, effect, signal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent {
    protected uuid = uuidv4();
    protected counter = signal(0);
    protected computedCounter = computed(() => {
        console.log('Computed Called!');
        return this.counter() * 6;
    });
    private counterEffect = effect(() => console.log('Effect Called ',this.counter()));

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
