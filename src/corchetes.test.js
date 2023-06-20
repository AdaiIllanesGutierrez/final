import {corchetes} from "./corchetes.js";

describe("Verificar corchetes", () => {
  it("deberia ingresar una cadena vacia y devolver false", () => {
    expect(corchetes("")).toEqual(false);
  });
  it("deberia ingresar una cadena de corchetes correcta y devolver true", () => {
    expect(corchetes("[]")).toEqual(true);
  });
});
