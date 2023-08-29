import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleGetImage = async () => {
        const response = await getGifs(category)
        setImages(response)
        setIsLoading(false)
    }

    useEffect(() => {
        handleGetImage()
    }, [])
    return {
        images: images,
        isLoading
    }
}
