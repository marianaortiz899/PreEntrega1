
function aceptar(LugarOrigen, LugarDestino, Cantidad) {
    // console.log("Tu lugar de origen es: " + LugarOrigen + "y tu lugar de Destino es: " + LugarDestino + "Para una cantidad de personas: " + Cantidad)
    let value = confirm("Tu lugar de origen es: " + LugarOrigen + " y tu lugar de destino es: " + LugarDestino + " Para una cantidad de personas: " + Cantidad)

    if (value) {
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Mendoza"))
            document.getElementById("total").value = "$" + calcularTotal(LugarOrigen, LugarDestino, Cantidad, 1)
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Cordoba") || (LugarOrigen === "Cordoba" && LugarDestino === "Mendoza"))
            document.getElementById("total").value = "$" + calcularTotal(LugarOrigen, LugarDestino, Cantidad, 1)
        if ((LugarOrigen === "Cordoba" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Cordoba"))
            document.getElementById("total").value = "$" + calcularTotal(LugarOrigen, LugarDestino, Cantidad, 1)
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Mendoza") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Cordoba" && LugarDestino === "Cordoba"))
            alert("No es posible realizar tu compra ya que lugar de destino y origen coinciden")
    } else {

    }
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
}

function siguiente(LugarOrigen, LugarDestino, Cantidad) {
    if (document.getElementById('visa').checked) {
        if (document.getElementById("cuota1").checked || document.getElementById("cuota2").checked || document.getElementById("cuota3").checked) {
            document.getElementById("TotalFinal").value = "$ " + calcularTotal(LugarOrigen, LugarDestino, Cantidad, 2)
        } else {
            alert("Para pagar con visa debe seleccionar la cantidad de cuotas.")
        }
    } else if (document.getElementById('contado').checked)
        if (document.getElementById("cuota1").checked || document.getElementById("cuota2").checked || document.getElementById("cuota3").checked) {
            document.getElementById("cuota1").checked = false
            document.getElementById("cuota2").checked = false
            document.getElementById("cuota3").checked = false
            alert("No puede pagar en cuotas si paga al contado.")
        } else {
            document.getElementById("TotalFinal").value = "$ " + calcularTotal(LugarOrigen, LugarDestino, Cantidad, 1)

        }
}

function calcularTotal(LugarOrigen, LugarDestino, Cantidad, tipo) {
    let MBA = 21000
    let MCBA = 17500
    let BACBA = 18900
    let total = 0
    if (tipo == 1) {
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Mendoza"))
            return MBA * Cantidad
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Cordoba") || (LugarOrigen === "Cordoba" && LugarDestino === "Mendoza"))
            return MCBA * Cantidad
        if ((LugarOrigen === "Cordoba" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Cordoba"))
            return BACBA * Cantidad
    } else {
        console.log('llega acá')
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Mendoza"))
            total = MBA * Cantidad
        if ((LugarOrigen === "Mendoza" && LugarDestino === "Cordoba") || (LugarOrigen === "Cordoba" && LugarDestino === "Mendoza"))
            total = MCBA * Cantidad
        if ((LugarOrigen === "Cordoba" && LugarDestino === "Buenos Aires") || (LugarOrigen === "Buenos Aires" && LugarDestino === "Cordoba"))
            total = BACBA * Cantidad
        if (document.getElementById("visa").checked) {
            console.log('llega acá 2')
            if (document.getElementById("cuota1").checked) {
                return total
            } else if (document.getElementById("cuota2").checked) {
                return total * 1.2
            } else if (document.getElementById("cuota3").checked) {
                return total * 1.3
            }
        }
    }
}
