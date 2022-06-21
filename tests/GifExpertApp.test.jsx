import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

  test('No debe de llamar agregar la categoría si ya existe en el estado', () => { 

    render( <GifExpertApp /> );
    screen.debug();

  });

});