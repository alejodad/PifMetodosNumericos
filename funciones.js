$(document).ready(function() {
  $('#metodo').change(function() {
    var seleccion = $(this).val();
    var contenedorInputs = $('#contenedorInputs');
    contenedorInputs.empty(); // Limpiar cualquier input previamente generado

    if (seleccion == 1) {
      // Generar 3 inputs con nombres y etiquetas personalizadas
      contenedorInputs.append('<label for="input1">Nombre: </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input1" id="input1" value="valor x0"><br>');

      contenedorInputs.append('<label for="input2">Tolerancia: </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input2" id="input2" value="tolerancia"><br>');

      contenedorInputs.append('<label for="input3">N(veces): </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input3" id="input3" value="n(veces)"><br>');
    } else if (seleccion >= 2 && seleccion <= 4) {
      // Generar 4 inputs con nombres y etiquetas personalizadas
      contenedorInputs.append('<label for="input1">Punto A: </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input1" id="input1" value="punto a"><br>');

      contenedorInputs.append('<label for="input2">Punto B: </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input2" id="input2" value="punto b"><br>');

      contenedorInputs.append('<label for="input3">Tolerancia: </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input3" id="input3" value="tolerancia"><br>');

      contenedorInputs.append('<label for="input4">N(veces): </label>');
      contenedorInputs.append('<input type="text" class="form-control" name="input4" id="input4" value="n(veces)"><br>');
    }
  });
});

function validarMetodo(){
  var miSelect = $('#metodo');
  alert(miSelect.val());
  if (miSelect.val() === '') {
    alert('Seleccione talla');
    return;
  }
}







