import { GiftItem } from "../../src/components"
import { render, screen } from "@testing-library/react"

describe('Prueba de componente <GiftItem />', () => {
    const title = 'Test componente de Item'
    const url = 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=fbf5a697i79gh6m7hg1pydrkz9rwer96zj5aytfoi4991254&ep=v1_gifs_search&rid=giphy.gif&ct=g'

    test('Debe renderizar el snapshot del Item mostrado', () => {
        const { container } = render(<GiftItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imagen con la URL indicada y el ALT indicado', () => { 
        render(<GiftItem title={title} url={url} />)
        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
     })

     test('Debe mostrar el titulo de componente', () => { 
        render(<GiftItem title={title} url={url} />)
        expect( screen.getByText( title ) ).toBeTruthy()
      })
})