describe('İlk dersimiz', () => {

    it("TC01 İlk test senaryomuz", () => {
        // 1. cy cypress test kütüphanesinin temel komutudur.
        // 2. visit() --> url gider
        cy.visit('https://www.edu.goit.global/account/login')

        // 3. get --> locate
        // 4. type --> metin göndermek için kullanılır.
        cy.get('#user_email').type("Deneme");

        // 5. clear --> metni silmek için kullanılır.
        // 6. as --> bir elemente alias olarak isim verirken kullanılır.
        cy.get('#user_email').as('email');
        cy.get('@email').clear();

        /*
        Locate - Selectors
        1. id #
        2. class .
        */
    }); // 

});