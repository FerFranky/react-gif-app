import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Probar compnente <GetGrid />', () => {
    const category = 'One Punch'
    const initialTextLoading = 'Cargando...'
    const responseGifsExpected = [
        {
            id: 'Test-1',
            title: 'Test-1',
            url: 'https://test-1.test'
        },
        {
            id: 'Test-2',
            title: 'Test-2',
            url: 'https://test-2.test'
        },
    ]

    test('Debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText(initialTextLoading))
    })

    test('Debe mostrar los items cuando se cargan las imagenes de useFetchGifs', () => {
        useFetchGifs.mockReturnValue({
            images: responseGifsExpected,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        
        expect( screen.getAllByRole('img').length ).toBe( 2 )
    })
})