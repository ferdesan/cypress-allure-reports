describe('Criando uma nova opção para coleção de filmes', () => {
  it('Cadastrar um novo filme', function () {
    
    cy.elogin()

    cy.get('a[href$="editor"]').click()

    cy.get('input[placeholder="Article title"]').type('Os Vingadores')

    cy.get('input[placeholder="What is this article about?"]').type('Criando novas opções de filmes top!')

    cy.get('form textarea').type('Vídeos disponibilizados pela Disney +')

    cy.get('input[placeholder="Enter tags"]').type('filmes')

    cy.get('button.btn-primary.btn').contains('Publish article').click()

    cy.get('h1').should('contain.text', 'Os Vingadores')
  });

  it('Logim com API', () => {

    cy.elogin()

  });
});