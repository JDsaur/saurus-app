import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-pokedex',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: './pokedex.component.html',
    styleUrl: './pokedex.component.sass',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexComponent { }
