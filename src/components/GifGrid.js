import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading: loadingImages } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loadingImages && "Loading..."}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
