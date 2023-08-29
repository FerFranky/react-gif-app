import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Prueba el componente <AddCategory />', () => {
    const valueTest = 'Saitama'

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onAddCategory={() => { }} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: valueTest } })
        expect(input.value).toBe(valueTest)
    })

    test('Debe de llamar onAddCategory si el input tiene un valor', () => {
        const onAddCategory = jest.fn()

        render(<AddCategory onAddCategory={onAddCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: valueTest } })
        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onAddCategory).toHaveBeenCalled()
        expect(onAddCategory).toHaveBeenCalled()
        expect(onAddCategory).toHaveBeenCalledWith(valueTest)

    })

    test('Debe de llamar onAddCategory si el input no tiene un valor', () => {
        const onAddCategory = jest.fn()

        render(<AddCategory onAddCategory={onAddCategory} />)
        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onAddCategory).toHaveBeenCalledTimes(0)
        expect(onAddCategory).not.toHaveBeenCalled()
    })
})