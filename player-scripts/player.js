import audios from "./data.js";
import { path, fixTime } from "./utils.js";
import elements from "./player-elements.js"

export default {
    audioData: audios,
    currentAudio: {},
    isPlaying: false,
    currentPlaying: 0,
    
    fillUpPlaylistSongs () {
        const filterSongs = song => song.title
        let playlistSongs = this.audioData.map(filterSongs)
        
        this.playlistSongOne.innerText = playlistSongs[0]
        this.playlistSongTwo.innerText = playlistSongs[1]
        this.playlistSongThree.innerText = playlistSongs[2]
        this.playlistSongFour.innerText = playlistSongs[3]
        this.playlistSongFive.innerText = playlistSongs[4]
    },

    start () {
        elements.get.call(this)
        this.update()
    },

    next () {
        this.currentPlaying++
        if (this.currentPlaying == this.audioData.length) { this.restart () }
        this.update()
        this.play()
    },


    play () {
        this.isPlaying = true
        this.audio.play()
        this.playPause.innerText = "pause"
    },

    pause () {
        this.isPlaying = false
        this.audio.pause()
        this.playPause.innerText = "play_arrow"
    },

    togglePlayPause () {
        if (this.isPlaying) {
            this.pause()
        } else {
            this.play()
        }
    },

    skipMusic () {
        this.pause()
        this.next()
    },

    skipToMusic (value) {
        this.pause()
        this.currentAudio = this.audioData[value]
        this.cover.style.background = `url("${path(this.currentAudio.cover)}") no-repeat center center / cover`
        this.title.innerText = this.currentAudio.title
        this.artist.innerText = this.currentAudio.artist      
        
        this.seekBar.oninput = () => this.setTimeBar(this.seekBar.value)
        this.seekBar.onclick = () => this.setTimeBar(this.seekBar.value)
        elements.createSoundElement.call(this, path(this.currentAudio.file))
        this.audio.onloadeddata = () => {
            elements.actions.call(this)
        }
        this.play()
        this.setAudioDuration()
        this.setTimeUpdate()
    },

    returnMusic () {
        this.pause()
        this.currentPlaying--
        this.update()
        this.play()
    },

    changeSoundVolum (value) {
        this.audio.volume = value / 100
    },

    toggleAudioMuted () {
        this.audio.muted = !this.audio.muted
        if (this.audio.muted == true) {
            this.volButton.innerText = 'volume_off'
        } else {
            this.volButton.innerText = 'volume_up'
        }
    },

    setTimeBar (value) {
        this.audio.currentTime = value
    },

    timeUpdate () {
        this.currentDuration.innerText = fixTime(this.audio.currentTime)
        this.seekBar.value = this.audio.currentTime
    },

    restart () {
        this.currentPlaying = 0
        this.update()
    },

    update () {
        this.currentAudio = this.audioData[this.currentPlaying]
        this.cover.style.background = `url("${path(this.currentAudio.cover)}") no-repeat center center / cover`
        this.title.innerText = this.currentAudio.title
        this.artist.innerText = this.currentAudio.artist
        this.fillUpPlaylistSongs()        
        elements.createSoundElement.call(this, path(this.currentAudio.file))
        this.audio.onloadeddata = () => {
            elements.actions.call(this)
        }
    }
}