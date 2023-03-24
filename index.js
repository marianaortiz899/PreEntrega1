function foo(){
    const vuelosOrigen = [
    { nombre: 'Buenos Aires', id: '1', imagen:'./img/buenosaires.png'},
    { nombre: 'Bariloche', id: '2', imagen:'./img/bariloche.png'},
    { nombre: 'Cordoba', id: '3', imagen:'./img/cordoba.png'},
    { nombre: 'Corrientes', id: '4',imagen:'./img/corrientes.png' },
    { nombre: 'Jujuy', id: '5',imagen:'./img/jujuy.png' },
    { nombre: 'Mendoza', id: '6' ,imagen:'./img/mendoza.png'},
    { nombre: 'Neuquen', id: '7',imagen:'./img/neuquen.png' },
  ];
  const vuelosDestino = [
    { nombre: 'Buenos Aires', id: '8',imagen:'./img/buenosaires.png' },
    { nombre: 'Bariloche', id: '9', imagen:'./img/bariloche.png'},
    { nombre: 'Cordoba', id: '10',imagen:'./img/cordoba.png' },
    { nombre: 'Corrientes', id: '11',imagen:'./img/corrientes.png' },
    { nombre: 'Jujuy', id: '12',imagen:'./img/jujuy.png' },
    { nombre: 'Mendoza', id: '13',imagen:'./img/mendoza.png' },
    { nombre: 'Neuquen', id: '14',imagen:'./img/neuquen.png' },
  ];

  
  const buscar = document.getElementById('buscar');
  const listaVuelos = document.getElementById('listaVuelos');
  const destino = document.getElementById('selectDestino');
  const origen = document.getElementById('selectOrigen');

  buscar.addEventListener('click', () => {
    let vuelosFiltrados = []
    const tipoOrigen = origen.value;
    const tipoDestino = destino.value;
    vuelosFiltrados = vuelosOrigen;
    removeElementsByClass('card');

    if (tipoDestino === 'todos') {
      vuelosFiltrados = vuelosOrigen.filter((vuelo) => vuelo.id !== tipoOrigen);
    }

    const contenedor = document.getElementById("container");
    vuelosFiltrados.forEach((producto,id) =>{
      let card= document.createElement("div");
      card.classList.add("card","col-sm-12","col-lg-3");
      card.innerHTML = `<img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <a href="/miarchivo.html" class="btn btn-primary" onClick="agregarAlcarrito(${id})">Comprar</a>
      </div>`;
      contenedor.appendChild(card);
    });  
    let carritoDeCompras = [];
    if (localStorage.getItem("carrito")){
      carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
      dibujarCarrito()
    }
  });

  function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  origen.addEventListener('change', () => {
    let listaDestino = [];
    let id = origen.value;
    switch (id) {
      case '1':
        listaDestino = vuelosDestino.filter((v) => v.id == '');
        break;
    }
    listaDestino.forEach((vuelo) => {
      const option = document.createElement('option');
      option.value = vuelo.id;
      option.innerHTML = vuelo.nombre;
      option.innerHTML = value.imagen;
      destino.appendChild(option);
    });
  });

  //Temporizador de recarga de pagina
  let temporizador;
  function solicitarRecarga() {
    return new Promise((resolve) => {
      temporizador = setTimeout(() => {
        resolve();
      }, 60000); // 1 minuto en milisegundos
    });
  }
  solicitarRecarga().then(() => {
    const mensaje = 'La página ha estado inactiva durante 5 minutos. Por favor, recargue la página.';
    Swal.fire('', mensaje, 'warning');
  });
  document.addEventListener('click', () => {
    clearTimeout(temporizador);
  });

  //Tarjetas

  const agregarAlcarrito = (id)=>{
    const productoClickeado = carritoDeCompras.findIndex((elemento)=>{
      return elemento.id === vuelosDestino[id].id;
    });
    if (productoClickeado === -1) {
      const productoAgregado = vuelosDestino[id];
      productoAgregado.cantidad = 1;
      carritoDeCompras.push(productoAgregado);
      dibujarCarrito();
    }else{
      carritoDeCompras[productoClickeado].cantidad+= 1;
      actualizarStorage();
      dibujarCarrito();
    }
  };
  const actualizarStorage=((carritoDeCompras)=>{
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
  })
}
