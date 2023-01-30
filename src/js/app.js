new Splide('.splide', {
  height: '100%',
  type: 'loop',
  perPage: 1,
  direction: 'ttb',
  arrows: false,
}).mount()

const container = document.querySelector('.services-inner')
const btns = document.querySelectorAll('.services__btn')

for (const btn of btns) {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      container.classList.toggle('active')
    }
    clearActiveClasses()
    btn.classList.add('active')
  })
}

function clearActiveClasses() {
  btns.forEach((btn) => btn.classList.remove('active'))
}

const requestBtn = document.querySelector('#requestBtn')
const modal = document.querySelector('#custom-modal')
const requestCloseBtn = document.querySelector('#request-close-btn')
const requestCloseBtnThanks = document.querySelector('#request-close-btn-thanks')
const modalRequest = document.querySelector('#modal-request')
const submitBtn = document.querySelector('#modal-request-submit')
const modalThanks = document.querySelector('#modal-thanks')
const body = document.querySelector('body')

requestBtn.addEventListener('click', () => {
  openModal(modal)
  openModal(modalRequest)
  body.style.overflow = 'hidden'
}) 

requestCloseBtn.addEventListener('click', () => {
  closeModal(modalRequest)
  closeModal(modal)
  body.style.overflow = 'auto'
})

requestCloseBtnThanks.addEventListener('click', () => {
  closeModal(modalRequest)
  closeModal(modal)
  closeModal(modalThanks)
  body.style.overflow = 'auto'
}) 
console.log(submitBtn);
submitBtn.addEventListener('click', () => {
  closeModal(modalRequest)
  openModal(modalThanks)
  setTimeout( () => {
    closeModal(modalThanks)
    closeModal(modal)
    body.style.overflow = 'auto'
  }, 5000)
})
function closeModal(selector) {
  selector.classList.remove('active')
}

function openModal(selector) {
  selector.classList.add('active')
}

const burger = document.querySelector("#burger")
const navbar = document.querySelector(".navbar-navs")
const overlay = document.querySelector(".overlay")

burger.addEventListener('click', () => {
  navbar.classList.toggle('active')
  burger.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('overflow-hidden')
})