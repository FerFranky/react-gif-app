import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    const category = 'One Punch'

    test('Debe regresar un estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs(category))
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Debe retornar un arreglo de imagenes y el isLoading debe ser true', async () => {
        const { result } = renderHook(() => useFetchGifs(category))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 3000,
            }
        )
        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})