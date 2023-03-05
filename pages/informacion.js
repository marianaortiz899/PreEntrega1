
const aeropuerto = [
	{ name: "AF-0500", Piloto: "Martin Rodriguez", NumeroDePasajeros: "102" },
	{ name: "AM-191", Piloto: "Barbara Lopez", NumeroDePasajeros: "90" },
	{ name: "KII", Piloto: "Andres Quiroga", NumeroDePasajeros: "85" },
]

function autocompletado() {
	const name = document.getElementById("name").value;
	const horario = aeropuerto.find(function (horario) {
		return horario.name === name;
	});
	if (horario) {
		confirm(`El vuelo ${name} será pilotado por ${horario.Piloto} con ${horario.NumeroDePasajeros} pasajeros`);
	} else {
		alert("No existe el vuelo");
	}

}

