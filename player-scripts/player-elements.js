import { path, fixTime } from "./utils.js";

export default {
    get () {
        //Sessão de gets dos elementos
        this.cover = document.querySelector('.card-image')
        this.title = document.querySelector('.card-content h5')
        this.artist = document.querySelector('.card-content p')
        this.playPause = document.querySelector('#play-pause')
        this.skipNextButton = document.querySelector('#skip-next')
        this.returnSongButton = document.querySelector('#skip-previous')
        this.volumMixer = document.querySelector('#vol-control')
        this.volButton = document.querySelector('#vol')
        this.seekBar = document.querySelector('#seekbar')
        this.currentDuration = document.querySelector('#current-duration')
        this.totalDuration = document.querySelector('#total-duration')
    },

    //Inicia o audio no html
    createSoundElement (audio) {
        this.audio = new Audio(audio)
    },

    // Ações no geral, tais como pausar, mutar, trocar de musica, etc...
    actions () {
        //Pula para a próxima música ao terminar a atual
        this.audio.onended = () => this.next()
        //Atualiza a barra do timer em tempo real
        const setTimeUpdate = this.audio.ontimeupdate = () => this.timeUpdate()

        // Pausa ou continua a música
        this.playPause.onclick = () => this.togglePlayPause()

        // Pula e volta de música
        this.skipNextButton.onclick = () => this.skipMusic()
        this.returnSongButton.onclick = () => this.returnMusic()

        //Alteração de volumes e mutar o som
        this.volumMixer.onchange = () => this.changeSoundVolum(this.volumMixer.value)
        this.volumMixer.oninput = () => this.changeSoundVolum(this.volumMixer.value)
        this.volButton.onclick = () => this.toggleAudioMuted()

        // Saltar no time da música
        this.seekBar.oninput = () => this.setTimeBar(this.seekBar.value)
        this.seekBar.onclick = () => this.setTimeBar(this.seekBar.value)
        const setAudioDuration = () => this.seekBar.max = this.audio.duration
        this.totalDuration.innerText = fixTime(this.audio.duration)

        //Pula conforme a escolha na lista de músicas 

        /*
            AREA PARA SE REVER, FALTA SER DINAMICA A QUANTIDADE 
            DE MUSICAS NA PLAYLIST ATUAL.
        */
        // Execução de funções para funcionamento
        setAudioDuration()
        setTimeUpdate()
    }
}