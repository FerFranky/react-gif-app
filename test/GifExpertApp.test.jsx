import { GifExpertApp } from "../src/GifExpertApp"
import { render, screen } from "@testing-library/react"

describe('Pruebas de componente <GifExpertApp />', () => { 
    const titleApp = 'GifExpertApp'

    test('Debe coincidir con el snapshot', () => { 
        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
     })

     test('Debe mostrar el titulo de la aplicacion', () => { 
        render(<GifExpertApp />)
        expect( screen.getByText(titleApp)).toBeTruthy()
     })
 })