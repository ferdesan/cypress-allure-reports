/// <reference types="cypress" />

describe('Autenticação na plataforma de conteudo', () => {

    it('Efetuar Login com um usuário  e senha válido!', () => {
        
        //acessar o site
        cy.visit("/")

        //clicar no botão 
        cy.get('.nav-link')
          .contains('Sign in')
          .click()

        const user = Cypress.env('user').email
        const pass = Cypress.env('user').pw
          
        //informar usuário e senha
        cy.get('input[type="email"]').type(user)
        cy.get('input[type="password"]').type(pass)

        //clicar no botão entrar 
        cy.get('button.btn-primary').click()

        //veririficar se o usuário foi autenticado
        cy.get('.nav-pills a.nav-link')
          .should('have.length', 2)
          
        cy.get('.nav-pills a.nav-link')
          .eq(0)
          .should('contain.text', 'Your Feed')
    });
    
});