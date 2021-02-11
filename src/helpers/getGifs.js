export const getGifs = async (category) => {
    const token =  process.env.REACT_APP_GIPHY_TOKEN;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&rating=R&limit=10&api_key=${token}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    });
    return gifs;
}