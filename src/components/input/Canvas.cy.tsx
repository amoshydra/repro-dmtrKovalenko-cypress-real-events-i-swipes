/// <reference types="cypress" />

import {Canvas} from './Canvas';

const WindowWidth = 500;

beforeEach(() => {
  cy.viewport(500, 500);
})

describe('Canvas', () => {
  it('should draw on the top left when x: 0 is provided', () => {
    cy.mount(<Canvas />);

    cy
      .get("body")
      .realSwipe("toRight", {
        length: 200,
        step: 5,
        x: 0,
        y: 1,
        touchMoveDelay: 100,
      })
    ;
  });

  it('should draw on the top left when y: 0 is provided', () => {
    cy.mount(<Canvas />);

    cy
      .get("body")
      .realSwipe("toRight", {
        length: 200,
        step: 5,
        x: 1,
        y: 0,
        touchMoveDelay: 100,
      })
    ;
  });

  it('should draw on the top left when x: 1 is provided', () => {
    cy.mount(<Canvas />);

    cy
      .get("body")
      .realSwipe("toRight", {
        length: 200,
        step: 5,
        x: 1,
        y: 1,
        touchMoveDelay: 100,
      })
    ;
  });
});
