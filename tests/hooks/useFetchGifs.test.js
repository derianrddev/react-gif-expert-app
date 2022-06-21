import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de regresar el estado inicial', () => { 

    const { result } = renderHook( () => useFetchGifs('OnePunch') );
    const { gifs, isLoading } = result.current;
    expect( gifs.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
    
  });

  test('Debe de retornar un arreglo de imágenes y isLoadin en false', async() => { 

    const { result } = renderHook( () => useFetchGifs('OnePunch') );
    await waitFor(
      () => expect( result.current.gifs.length ).toBeGreaterThan(0)
    );
    const { gifs, isLoading } = result.current;
    expect( gifs.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
    
  });

});