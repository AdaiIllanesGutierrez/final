import {corchetes,verificar} from "./corchetes.js";

describe("Verificar corchetes", () => {
  it("deberia ingresar una cadena vacia y devolver false", () => {
    expect(corchetes("")).toEqual(false);
  });
  it("deberia ingresar una cadena de corchetes correcta y devolver true", () => {
    expect(corchetes("[]")).toEqual(true);
  });
  it("deberia ingresar una cadena de solo corchetes de apertura y devolver false", () => {
    expect(verificar("[[[")).toEqual(false);
  });
  it("deberia ingresar una cadena de solo corchetes de cierre y devolver false", () => {
    expect(verificar("]]]]")).toEqual(false);
  });
  it("deberia ingresar una cadena con la misma cantidad de corchetes abiertos y cerrados  y devolver true", () => {
    expect(verificar("[[]]")).toEqual(true);
  });
  it("deberia ingresar una cadena con contenido y con la misma cantidad de corchetes abiertos y cerrados  y devolver true", () => {
    expect(verificar("[[as]74]")).toEqual(true);
  });
  it("deberia corchetes 2 abiertos y 1 cerrado  y devolver false", () => {
    expect(verificar("[][")).toEqual(false);
  });
  
});
