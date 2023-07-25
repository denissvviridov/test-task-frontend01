import {array, getPhotoList} from "./getPhotoList.js";
import {settingOnePhoto} from "./getOnePhoto.js";

const photosList = document.querySelector('.photos_list')

getPhotoList()

photosList.addEventListener('click', function (event) {
    const photoId = event.target.id
    const inf = array.filter(elem => elem.id === photoId)
    settingOnePhoto(photoId, inf)
})




