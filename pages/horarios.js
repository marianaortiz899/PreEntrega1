

const aeropuertos = [
    {vuelo:"AF-0500", llegada: "18:30", partida: "20:30", estado: "Con retraso"},
    {vuelo:"AM-191", llegada: "18:14", partida: "23:00", estado: "A tiempo" },
    {vuelo:"KII",llegada: "23:00", partida: "01:00", estado: "A tiempo"},
];

function foo() {
    const tablavuelosProductos = document.getElementById("tablavuelosProductos")
    const vuelos_head = document.getElementById("vuelos_head")
    vuelos_head.className = "background-table"

    aeropuertos.forEach(function(producto) {
        let fila = document.createElement('tr')
        let celdaVuelo = document.createElement('td')
        let celdaLlegada = document.createElement('td')
        let celdaPartida = document.createElement('td')
        let celdaEstado = document.createElement('td')
    
        celdaVuelo.textContent = producto.vuelo
        celdaLlegada.textContent = producto.llegada
        celdaPartida.textContent = producto.partida
        celdaEstado.textContent = producto.estado
      
        fila.append(celdaVuelo)
        fila.append(celdaLlegada)
        fila.append(celdaPartida)
        fila.append(celdaEstado)
      
        tablavuelosProductos.append(fila)
    })
}
