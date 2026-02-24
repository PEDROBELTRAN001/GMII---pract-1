import { Component, signal, computed } from '@angular/core'; //signal es una variable que se puede cambiar
//computed es una variable que se puede calcular
@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo = signal(100);
  contraste = signal(100);
  blur = signal(0);
  sepia = signal(0);
  saturacion = signal(100);
  hueRotate = signal(0);
  escalaDeGrises = signal(0);
  invertir = signal(0);
  opacidad = signal(100);

  filtroScss = computed(() => {
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px) sepia(${this.sepia()}%) saturate(${this.saturacion()}%) hue-rotate(${this.hueRotate()}deg) grayscale(${this.escalaDeGrises()}%) invert(${this.invertir()}%) opacity(${this.opacidad()}%)`;
  })
  actualizar(prop: string, evento: Event) {
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
    if (prop === 'sepia') this.sepia.set(+valor);
    if (prop === 'saturacion') this.saturacion.set(+valor);
    if (prop === 'hueRotate') this.hueRotate.set(+valor);
    if (prop === 'escalaDeGrises') this.escalaDeGrises.set(+valor);
    if (prop === 'invertir') this.invertir.set(+valor);
    if (prop === 'opacidad') this.opacidad.set(+valor);
  }
}