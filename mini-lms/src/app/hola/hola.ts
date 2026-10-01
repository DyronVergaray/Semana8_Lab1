import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { estudiantes, estado, prom } from '../store';
@Component({
 selector: 'app-hola',
 imports: [CommonModule, RouterLink],
 templateUrl: './hola.html'
})
export class Hola {
 estudiantes = estudiantes;
 estado = estado;
 prom = prom;
}
