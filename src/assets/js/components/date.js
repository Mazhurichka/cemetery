const getFullYear = new Date().getFullYear();

document.querySelector(".copyright__date").insertAdjacentHTML("beforeBegin", getFullYear);
