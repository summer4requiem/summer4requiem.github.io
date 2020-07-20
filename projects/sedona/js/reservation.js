let findHotelBtn = document.querySelector(".information__btn");

let reservationForm = document.querySelector(".reservation-form");
let removeForm = document.querySelector(".reservation__button");

findHotelBtn.addEventListener('click', function () {
    reservationForm.classList.toggle("visually-hidden");
});

removeForm.addEventListener('click', function () {
    reservationForm.classList.add("visually-hidden");
});