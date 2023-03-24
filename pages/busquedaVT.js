fetch("busquedaVT.json")
.then(function(response){
    return response.json();
})
.then(function(busqueda){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let vuelos of busqueda){
        out +=`
         <tr>
            <td>${vuelos.destino}</td>  
            <td>${vuelos.vuelo}</td>
            <td>${vuelos.llegada}</td>
            <td>${vuelos.partida}</td>
            <td>${vuelos.estado}</td>
         </tr>

        `;
        placeholder.innerHTML = out;
    }
})


