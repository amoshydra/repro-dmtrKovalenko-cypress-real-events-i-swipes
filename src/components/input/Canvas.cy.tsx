/// <reference types="cypress" />

import {Canvas} from './Canvas';

const WindowWidth = 1000;

beforeEach(() => {
  cy.viewport(WindowWidth, 1000);
})

describe('Input', () => {
  it('when Input is clicked, should call onClick', () => {
    cy.mount(<Canvas />);
    
    cy
      .get("body")
      .realSwipe("toRight", {
        length: 200,
        step: 20,
        x: 100,
        y: 20,
        touchMoveDelay: 100,
      })
    ;
  });
});
