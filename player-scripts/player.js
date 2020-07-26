import audios from "./data.js";
import { path, fixTime } from "./utils.js";
import elements from "./player-elements.js"

export default {
    audioData: audios,
    currentAudio: {},
    isPlaying: false,
    currentPlaying: 0,
    
    fillUpPlaylistSongs () {
        document.querySelectorAll('.playlistSong') 
            .forEach (slot => {
                this.listId = slot.getAttribute('listId')
                slot.innerText = this.audioData[this.listId].title

                slot.onclick = () => this.skipToMusic(slot.getAttribute('listId'))
            })    
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
        this.currentPlaying = value
        this.update()
        this.play()
    },

    returnMusic () {
        this.pause()
        this.currentPlaying--
        this.update()
        this.play()
    },

    returnMusicTime () {
        this.audio.currentTime = this.audio.currentTime - 10
    },

    advanceMusicTime () {
        this.audio.currentTime+=10
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
        this.currentPlaylist.innerText = this.currentAudio.playlistName
        this.fillUpPlaylistSongs()        
        elements.createSoundElement.call(this, path(this.currentAudio.file))
        this.audio.onloadeddata = () => {
            elements.actions.call(this)
        }
    }
}