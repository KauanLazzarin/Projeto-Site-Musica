const playlistOne = [
    'Eletronic',
    "The Perfect Life (feat. Wayne Coyne) Moby.",
    "Love Is All Around. Sasha.",
    "How Many Loves. Naomi.",
    "SILENCE FT. KHALID",
    "Explant. Scar Tissue."
]

const playlistTwo = [
    'Rock',
    "We Will Rock You — Queen.",
    "It's Only Rock 'N' Roll. ",
    "My Generation. ",
    "Stairway To Heaven",
    "Back In Black — AC/DC.",
]

const playlistThree = [
    'Country',
    'Before He Cheats da Carrie Underwood.',
    'Man! I Feel Like A Woman',
    'Old Town Road',
    'There You will Be da Faith Hill.',
    'Crazy de Patsy Cline.'
]

const playlistFour = [
    'Rap',
    'Circles. Post Malone',
    'Lose Yourself - Eminem',
    'Remember the name ',
    'Pipa Voada (feat. Emicida) Rashid.',
    'Snoop Dogg. David Guetta & Snoop Dogg.',
    'Goodbyes (feat. Young Thug)'
]

document.querySelectorAll('.user-playlist-one')
    .forEach(element => {
        let listId = element.getAttribute('listId')
        element.innerText = playlistOne[listId]
        let title = document.querySelector('#playlistOneName')
        title.innerText = playlistOne[0]
})

document.querySelectorAll('.user-playlist-two')
    .forEach (element => {
        let listId = element.getAttribute('listId')
        element.innerText = playlistTwo[listId]
        let title = document.querySelector('#playlistTwoName')
        title.innerText = playlistTwo[0]
})

document.querySelectorAll('.user-playlist-three')
    .forEach (element => {
        let listId = element.getAttribute('listId')
        element.innerText = playlistThree[listId]
        let title = document.querySelector('#playlistThreeTitle')
        title.innerText = playlistThree[0]
})

document.querySelectorAll('.user-playlist-four')
    .forEach (element => {
        let listId = element.getAttribute('listId')
        element.innerText = playlistFour[listId]
        let title = document.querySelector('#playlistFourTitle')
        title.innerText = playlistFour[0]
})