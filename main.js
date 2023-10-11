const html = document.querySelector('html')
const banner = document.querySelector('.imgPrincipal')

const btPrincipal = document.querySelector('.btHome')
const aboutMe = document.querySelector('.btSobre')
const cortes = document.querySelector('.btCortes')
const locMe = document.querySelector('.btLoc')
const contactButton = document.querySelector('.btContact')

btPrincipal.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'principal')
})
aboutMe.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'about')
})

cortes.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'cortesStyle')
})

locMe.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'localizacao')
})
contactButton.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'contato')
})

