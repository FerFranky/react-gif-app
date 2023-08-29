import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GiftItem } from "./GiftItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? (<h3>Cargando...</h3>):(
            <div className="card-grid">
                {images.map((image) => (
                    <GiftItem 
                    key={ image?.id } 
                    { ...image }
                    />
                ))}
            </div>
            )}
        </>
    )
}
