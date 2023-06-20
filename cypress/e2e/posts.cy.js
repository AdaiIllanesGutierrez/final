describe("POSTS", () => {
    it("mostrar la pagina con el post en el espacio de amigos", () => {
      cy.visit("/");
      cy.get("#post").type("realizando examen de ing de software");
      cy.get("#amigos-button").click();
      cy.get("#amigos-div").should("contain", "realizando examen de ing de software");
    });
    it("mostrar la pagina con la verificacion de texto vacio", () => {
        cy.visit("/");
        cy.get("#post").type("");
        cy.get("#amigos-button").click();
        cy.type(alert).should("contain","o es posible registrar un post sin un texto")
      });
  });
  