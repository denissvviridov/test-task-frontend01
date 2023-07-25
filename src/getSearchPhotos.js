import {ACCESS_KEY} from "../utils/utils.js";

async function getSearchPhotos() {
    const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}`;

    return fetch(endpoint)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.error('Error fetching data', error)
            return []
        })
}

function loadPhoto(photoUrl) {
    const =
}