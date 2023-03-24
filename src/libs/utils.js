import { toast } from "react-toastify";


export async function downloadVideo(url, name) {

    const video = document.createElement('video');
    video.src = url;
    video.controls = true

    document.body.appendChild(video);
    console.log("dddd")
    video.download()
    console.log(video)
    document.body.removeChild(video);

}

// export function downloadVideo(url, name) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'blob';

//     // xhr.addEventListener("progress", updateProgress);
//     // xhr.addEventListener("load", transferComplete);
//     // xhr.addEventListener("error", transferFailed);
//     // xhr.addEventListener("abort", transferCanceled);

//     xhr.onload = function () {
//       const urlCreator = window.URL || window.webkitURL;
//       const fileUrl = urlCreator.createObjectURL(this.response);
//       const tag = document.createElement('a');
//       tag.href = fileUrl;
//       tag.target = '_blank';
//       tag.download =  `${name}.mp4`;
//       document.body.appendChild(tag);
//       tag.click();
//       document.body.removeChild(tag);
//     };
//     xhr.onerror = err => {
//       toast.error('Failed to download picture')
//       console.error(err)
//     };
//     xhr.send();
// }