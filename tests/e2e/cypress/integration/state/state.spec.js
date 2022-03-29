it('Has expected initial state on load', () => {
    cy.visit('/')
    cy.window().its('store').invoke('getState').should('deep.equal', {
        router: {
            action: "POP",
            location: {
                hash: "",
                key: "default",
                pathname: "/",
                search: "",
                state: null
            },
            previousLocations: undefined
        },
        counter: {
            status: "idle",
            value: 0
        }
    })
})