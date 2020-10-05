"use strict";

const inputUzs = document.querySelector("#uzs"),
  inputUsd = document.querySelector("#usd");

inputUzs.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUzs.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так, тахорат килиб кел";
    }
  });

  // status
  // StatusText
  // response
  // readyState
});

inputUsd.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUzs.value = (+inputUsd.value * data.current.usd).toFixed(2);
    } else {
      inputUzs.value = "Что-то пошло не так, тахорат килиб кел";
    }
  });

  // status
  // StatusText
  // response
  // readyState
});

const changeBtn = document.querySelector('.change'),
      inputUzsParent = document.querySelector('.input-uzs');

changeBtn.addEventListener('click', () => {
  inputUzsParent.classList.toggle('input-uzs-order');
})
