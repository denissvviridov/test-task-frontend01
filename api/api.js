import {ACCESS_KEY, endpoint} from "../utils/utils.js";

export async function getUnsplashPhotos() {
    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export async function getOneUnsplashPhoto(photoId) {
    try {
        const response = await fetch(`${endpoint}/${photoId}`, {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            }
        })
        if (!response.ok) {
            throw new Error('Request get photo')
        }
        const data = await response.json()
        return data.urls.regular;
    } catch (error) {
        console.error('Error', error)
        return null
    }
}