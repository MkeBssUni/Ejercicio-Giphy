const api_key = "gesxfYL4jvdTnB0wgz6S1NDr5q8m0Xct";
const inputSearch = document.getElementById("search");

inputSearch.onkeyup = async (event) => {
  var contenedor = document.getElementById("contenedor");
  event.preventDefault();
  if (event.keyCode !== 13) return;
  contenedor.innerHTML = "";
  const req = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputSearch.value}`
  );

  const res = await req.json();

  for (let i = 0; i < res.data.length; i++) {
    var direccion = res.data[i].images.original.url;
    var listaImagenes = `<div class="col-2">
                        <img src="${direccion}" width="300" height="100">
                        </div>
                        `;
    contenedor.innerHTML += listaImagenes;
  }
};

let refrescar = document.getElementById("refrescar");
refrescar.addEventListener("click", (_) => {
  location.reload();
});

window.onload = function () {
  var contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  const req = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${api_key}`);

  req
    .then((res) => res.json())
    .then((res) => {
      let i = Math.floor(Math.random() * 25);
      var direccion = res.data[i].images.original.url;
      var listaImagenes = `<div class="col">
                        <img src="${direccion}" width="500" height="200">
                        </div>
                        `;
      contenedor.innerHTML += listaImagenes;
    });
};
