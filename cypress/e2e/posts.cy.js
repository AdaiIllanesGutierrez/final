describe("POSTS", () => {
    it("mostrar la pagina con el post en el espacio de amigos", () => {
      cy.visit("/");
      cy.get("#post").type("realizando examen de ing de software");
      cy.get("#amigos-button").click();
      cy.get("#amigos-div").should("contain", "realizando examen de ing de software");
    });
  });
  