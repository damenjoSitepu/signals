import { NgModule } from "@angular/core";
import { BasicCounterComponent } from './basic-counter/basic-counter.component';
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../standalone-components/button/button.component";
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@NgModule({
    declarations: [
        BasicCounterComponent,
        ChangeDetectionComponent
    ],
    imports: [
        CommonModule,
        ButtonComponent
    ],
    exports: [
        BasicCounterComponent,
        ChangeDetectionComponent
    ]
})
export class ComponentsModule {}