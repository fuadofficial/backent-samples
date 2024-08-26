import React, { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/profile/upload'

const App = () => {
    const [image, setImage] = useState(null)

    const handleImage = (event) => {
        setImage(event.target.files[0])
    }

    const uploadImage = async () => {
        const formData = new FormData()

        formData.append('upload_files', image)
        formData.append('firstName', 'fuad')

        try {
            const response = await axios(API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "mulipart/form-data",
                },
                data: formData
            })
            console.log(response.data)
        } catch (error) {
            console.error("Error uploading image:", error)
        }
    }

    return (
        <div>
            <input type="file" accept='image/*' onChange={handleImage} />
            {image && <img src={URL.createObjectURL(image)} alt="Preview" style={{ width: '200px', height: 'auto' }} />}
            <button onClick={uploadImage}>Upload</button>
        </div>
    )
}

export default App
