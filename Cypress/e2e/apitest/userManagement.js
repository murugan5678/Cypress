context('api automation test', ()=>{
it('GET', ()=>{
    cy.request('GET','https://reqres.in/api/users?page=2')
})
})