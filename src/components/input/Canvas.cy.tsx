/// <reference types="cypress" />

import {Canvas} from './Canvas';

const WindowWidth = 1000;
const TravelLength = WindowWidth - 40;

beforeEach(() => {
  cy.viewport(WindowWidth, 800);
})

describe('Canvas', () => {
  [
    TravelLength,
    TravelLength / 2,
    TravelLength / 4,
    TravelLength / 8,
    TravelLength / 16,
    TravelLength / 32,
    TravelLength / 64,
    TravelLength / 128,
    TravelLength / 256,
  ].forEach(step => {
    it(`should draw ${step}`, () => {
      cy.mount(<Canvas />);
  
      cy
        .get("body")
        .realSwipe("toRight", {
          length: TravelLength,
          step: step,
          x: 20,
          y: 20,
          touchMoveDelay: 200,
        })
      ;
    });
  })
});
