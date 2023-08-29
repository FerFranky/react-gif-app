export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TckF2OsEy1CZ632MSaTh38H8kuJdIrWM&q=${ category }&limit=10`
    const respuesta = await fetch ( url )
    const { data = [] } = await respuesta.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img?.images?.downsized_medium?.url
    }))
    return gifs 
}