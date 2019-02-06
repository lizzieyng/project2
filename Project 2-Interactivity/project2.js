
console.log('test')
var video = document.querySelector('video')
var button = document.querySelector('.button')

button.addEventListener('click', playVideo)

function playVideo() {
	video.play()

	// video.pause()
}


