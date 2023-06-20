import {corchetes} from "./corchetes.js";

describe("Verificar corchetes", () => {
  it("deberia ingresar una cadena vacia y devolver false", () => {
    expect(corchetes("")).toEqual(false);
  });
});
