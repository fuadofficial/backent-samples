import React, { useState } from 'react'

const App = () => {
    const [image, setImage] = useState('')

    const handleImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    const uploadImage = () => {

    }

    return (
        <div>
            <img src={image} alt="" style={{ width: '200px', height: 'auto' }} />
            <input type="file" accept='image/*' onChange={handleImage} />
            <button onClick={uploadImage}>Upload</button>
        </div>
    )
}

export default App
