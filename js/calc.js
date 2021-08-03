const btncarb = document.getElementById('btncarb');

function calccarbs() {
    var x = parseInt(document.getElementById('carbs').value);
    var y = 15;
    var rescar = (x/y).toFixed(0);

    document.getElementById('respuestacarbs').innerHTML = "Se debe aplicar " + rescar + " unidades.";
}

btncarb.addEventListener('click',calccarbs,true);