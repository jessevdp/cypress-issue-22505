// example.cy.js
import Example from "../../app/frontend/components/Example/Example"

describe('<Example>', () => {
  it('mounts', () => {
    cy.mount(<Example />)
  })
})
