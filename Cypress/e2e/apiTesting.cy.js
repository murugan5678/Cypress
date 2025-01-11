context('api automation test', ()=>{
    it('GET', ()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
        })
    })
    it('POST', ()=>{
        var user=
            {
                "name": "morpheus",
                "job": "leader"
            }
        
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
        })
    })
    })