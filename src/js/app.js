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

const requestBtn = document.querySelector('#request-btn')

const modal = document.querySelector('#custom-modal')

const modalRequest = document.querySelector('#modal-request')
const requestCloseBtn = document.querySelector('#request-close-btn')
const submitBtn = document.querySelector('#modal-request-submit')

const modalThanks = document.querySelector('#modal-thanks')
const thanksCloseBtn = document.querySelector('#thanks-close-btn')


requestBtn.addEventListener('click', () => {
  addClass(modal)
  addClass(modalRequest)
})

requestCloseBtn.addEventListener('click', () => {
  removeClass(modal)
})

submitBtn.addEventListener('click', () => {
  removeClass(modalRequest)
  addClass(modalThanks)
  setTimeout(() => {
    removeClass(modal)
  }, 5000)
})

thanksCloseBtn.addEventListener('click', () => {
  removeClass(modal)
  removeClass(modalRequest)
})


function removeClass(selector) {
  selector.classList.remove('active')
}

function addClass(selector) {
  selector.classList.add('active')
}
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.870197, 74.586821],
        zoom: 17
    });
    DG.marker([42.879047, 74.595386]).addTo(map);
});
