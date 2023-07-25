import {getOneUnsplashPhoto} from "../api/api.js";
import {blockForImg, overlay, imgElement, close} from "../utils/variables.js";

export function settingOnePhoto(photoId, obj) {
    getOneUnsplashPhoto(photoId, obj)
        .then(onePhotoData => {
            if (onePhotoData) {
                blockForImg.innerHTML = ''
                obj.forEach(photo => {
                    close.classList.add('close')
                    close.innerHTML = '&#10008;';
                    overlay.style.display = 'flex'
                    imgElement.src = photo.urls.regular
                    imgElement.alt = 'Lightbox'
                    blockForImg.append(imgElement, close)

                    console.log(photo)
                })
            }
        })

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none'
        }
    })

    close.addEventListener('click', function () {
        overlay.style.display = 'none'
    })


}



