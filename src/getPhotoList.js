import {getUnsplashPhotos} from "../api/api.js";
import {photosList} from "../utils/variables.js";
export const array = []

export function getPhotoList() {
    getUnsplashPhotos().then(photosData => {
        if (photosData) {
            photosData.forEach(photo => {
                const imgWrap = document.createElement('div')
                const imgElement = document.createElement('img')

                array.push(photo)

                imgWrap.classList.add('img_wrap')
                imgElement.classList.add('photo_list')
                imgElement.id = photo.id
                imgElement.src = photo.urls.regular
                imgElement.alt = 'My photo'
                imgWrap.appendChild(imgElement)
                photosList.appendChild(imgWrap)
            })
        } else {
            console.error('Photos not found')
        }

    }).catch(err => {
        console.error('Error:', err)
    })

}