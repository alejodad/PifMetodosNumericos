<?php
  session_start();
?>
  
<html>
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <meta name="viewport" content="width=device-width">
    <title>PIF Metodos Numericos</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="funciones.js"></script>
    
  </head>
  <body>
    <div class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Bienvenido </h1>
      <p class="lead">En Este pequeño sistema podras ingresar ejercicios usando los metodos: Newton, Falsa Poscicion, Secante y Biseccion</p>
          
    </div>
      <div class="col">
        <form action="welcome.php" method="post">
    <p>Solo debes seleccionar el metodo que deseas y pasar los parametros que este necesite. Adelante!</p>
  <div class="mb-3">
<select class="form-select" aria-label="Default select example" id="metodo">
  <option selected value="">Seleccione metodo</option>
  <option value="1">Newton</option>
  <option value="2">Biseccion</option>
  <option value="3">Secante</option>
  <option value="4">Falsa Pocicion</option>
</select>
   <!--<input type="text" name="expresion" class="form-control"> -->
  </div>
          <div id="contenedorInputs">
            
          </div>
          <div class="mb-3">
    <button type="button" class="btn btn-success form-control" value="Iniciar"onclick="validarMetodo()" >Enviar formulario</button>
          </div>
    </form>
      </div>
    </div>
   <?php 

  ?>     
  </body>
</html>