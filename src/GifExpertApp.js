import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
/* DTLP9GPpgJZYZkZJhGoTV5a6rmYFSkTQ */
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}

export default GifExpertApp