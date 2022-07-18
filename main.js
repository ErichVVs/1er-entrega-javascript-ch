let maximo_calorias = parseFloat(prompt("Ingrese el límite de calorías de tu plan alimenticio:"));
let entrada = "";
let consumo = 0;

while (entrada.toUpperCase() != "ESC") {
    let alimento = prompt("Ingrese el Nombre del Alimento:");
    console.log("Nombre: " + alimento);
    let calorias = parseFloat(prompt("Ingrese las Calorías del Alimento Consumido:"));
    console.log("Calorías: " + calorias);//1950
    consumo += calorias;

    if (consumo > maximo_calorias) {
        alert("Superaste el consumo máximo de tu plan alimenticio!");
        alert("Tus calorías consumidas son: " + consumo);
        break;
    }
}