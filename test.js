import { calcularTotal, calcularPeso } from './index';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it('comprar pan', () => { equal(calcularTotal([{producto: "Pan", precio: 1}]), 1) })
  it('comprar pan y leche', () => { equal(calcularTotal([{producto: "Pan", precio: 1},{producto: "Leche", precio: 1}]), 2) })
  it('comprar huevos', () => { equal(calcularTotal([{producto: "Huevo", precio: 30, cantidad: 12}]), 360) })
})

describe (('Cálculo del peso'), () => {
  it('carrito vacío', () => { equal(calcularPeso([]), 0) })
  it('un par de huevos', () => { equal(calcularPeso([{producto: "Huevo", peso: 30, cantidad: 2}]), 60) })
  it('huevos y pan', () => { equal(calcularPeso([{producto: "Huevo", peso: 30, cantidad: 2},{producto: "pan", peso: 120, cantidad: 2}]), 300) })
})
