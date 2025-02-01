describe(
    it('file upload', ()=>{
       cy.visit("https://the-internet.herokuapp.com/upload");
       const filepath = "C:\Users\DCKLP-087\Pictures\test-image-for-cypress-file-upload.png.webp"
       cy.get('#file-upload').attachFile(filepath);
       cy.get('#file-submit').click();
       
    })
)