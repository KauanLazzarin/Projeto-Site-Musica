// 'Banco de dados temporario'
const topMusics = ['Ghost Division', 'To Hell And Back', 'Hells Bells', 'The Returning Race', 'Devil dogs']
const topBands = ['Sabaton', 'Twenty One Pilots', 'AC/DC', 'The Score', 'All Good Things']

/* 
    Auto-Compleater das listas de top 5
*/
document.querySelectorAll('.topMusic')
    .forEach(slot => {
        let musicId = slot.getAttribute('listId')
        slot.innerText = topMusics[musicId]
    })

document.querySelectorAll('.topBand')
    .forEach (slot => {
        let bandId = slot.getAttribute('listId')
        slot.innerText = topBands[bandId]
    })