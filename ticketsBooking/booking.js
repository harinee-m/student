const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value
console.log(typeof ticketPrice)



container.addEventListener('click', function (e) {
  console.log(e.target)
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    console.log(e.target)
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})

movieSelect.addEventListener('change', (e) => {
  ticketPrice = e.target.value
  updateSelectedCount()
})


function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  console.log(selectedSeats)
  const selectedSeatsCount = selectedSeats.length
  console.log(selectedSeatsCount)
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}