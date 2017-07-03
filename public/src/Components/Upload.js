import React, {Component} from 'react';
import axios from 'axios';

const Upload = () => {
    const handleSubmit = event => {
        event.preventDefault();
        let uploadedFile = document.getElementById('vid-file');
        let videoFile = uploadedFile.files[0];
        let videoData = new FormData();
        videoData.append('uploadVideo', videoFile, videoFile.name);
        axios.post('/upload', videoData).then(response => console.log(response)).catch(error => console.log(error));
    }
    return (
        <div>
            <form id='uploadForm' encType="multipart/form-data" onSubmit={handleSubmit}>
                <input id="vid-file" type="file" name="sampleFile"/>
                <button type="submit">upload</button>
            </form>
        </div>
    )
}

export default Upload;