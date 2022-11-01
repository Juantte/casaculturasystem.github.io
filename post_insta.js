function draw_pattern () {
    // set our config variables
    canvas = document.getElementById('Canvas');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.height, canvas.height);

    color=document.getElementById('coloret');
    let theColor = color.value;

    //set the translation parameters
    var translate_x = [-84,-4,-4,-84];
    var translate_y = [0,0,-80,-80];

    //choose the corner shape (restricted to rotations 0 and 180 for circle shape)
    img_type = 1;
    img_rotation = Math.floor(Math.random()*2 )*2;

    ctx.save();

    ctx.translate(80, 0);
    ctx.rotate((Math.PI / 2) * img_rotation);
    ctx.drawImage(document.images[img_type], translate_x[img_rotation], translate_y[img_rotation]-4*img_type,88-4*img_type,80+4*img_type);
        
    ctx.restore();

    //choose randomly the other 6 shapes
    for (let i = 1; i < 7; i++) {
      for (let j = 0; j < 1; j++) {
        img_type = Math.floor(Math.random()*2 );
        img_rotation = Math.floor(Math.random()*4 );

        ctx.save();

        ctx.translate(80+i*80, j*80);
        ctx.rotate((Math.PI / 2) * img_rotation);
        ctx.drawImage(document.images[img_type], translate_x[img_rotation], translate_y[img_rotation]-4*img_type,88-4*img_type,80+4*img_type);
      
        ctx.restore();

      }
    }

    //mirror effect (top right border)
    ctx.save();
    ctx.translate(1120/4,0);   
    ctx.scale(-1,1);
    ctx.drawImage(canvas,-1120/4*3,0,1120,1120);
    ctx.restore();

    //mirror effect (bottom border)
    ctx.save();
    ctx.translate(0,1120/2);   
    ctx.scale(1,-1);
    ctx.drawImage(canvas,0,-1120/2,1120,1120);
    ctx.restore();

    //rotation (left/right border) 
    ctx.save();
    ctx.translate(1120/2,1120/2);   
    ctx.rotate(Math.PI / 2);
    ctx.drawImage(canvas,-1120/2,-1120/2,1120,1120);

    //Change color
    ctx.globalCompositeOperation = "source-atop";
    ctx.fillStyle = theColor;
    ctx.fillRect(-1120/2,-1120/2, canvas.width, canvas.height);
    ctx.restore();
 
  }


function separate_lines(texto, contexto){
  max_line = 800;
  palabras=texto.split(" ");
  line = palabras[0];
  var separacion = []

  for (let i = 1; i < palabras.length; i++) {
      add_word=line + ' ';
      add_word+=palabras[i];

    if (contexto.measureText(add_word).width<max_line){
      line = add_word;
    }
    else{
      separacion.push(line);
      line = palabras [i];
    }
  }
  separacion.push(line);
  return separacion;
}

  function draw_text () {

    // set our config variables
    canvas = document.getElementById('Canvas2');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.height, canvas.height);

    texto=document.getElementById('textito');
    let theText = texto.value.toUpperCase();

    color=document.getElementById('coloret');
    let theColor = color.value;
    textMetrics = ctx.measureText(theText);

    


    //Insert text
    ctx.save();
    ctx.fillStyle = theColor;
    ctx.font = "85px GTUltra-Regular";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";


    lines_array = separate_lines(theText,ctx);
   
    /*partida = (canvas.height-altura-espaciado*(lines_array.length-1))/2;*/
    altura = 60;
    espaciado = 42;
    partida =(canvas.height -lines_array.length*altura - (lines_array.length-1)*espaciado)/2;
    desp=altura/2;

    for (let i = 0; i < lines_array.length; i++) {
      /*ctx.fillText(lines_array[i],canvas.width/2, partida +desp);*/
      ctx.fillText(lines_array[i],canvas.width/2,  partida +desp);
      desp=desp+altura+espaciado;
    }
    //ctx.fillText(separate_lines(theText,ctx)[1],canvas.width/2, canvas.height/2);

    ctx.restore();

  }


function clear_canvas () {

    canvas = document.getElementById('Canvas')
    ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.height, canvas.height);

}

function clear_canvas2 () {

  canvas = document.getElementById('Canvas2');
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.height, canvas.height);

}

function clear_all () {
  canvas = document.getElementById('Canvas')
  ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.height, canvas.height);


  canvas2 = document.getElementById('Canvas2');
  ctx2 = canvas2.getContext('2d');
  ctx2.clearRect(0, 0, canvas2.height, canvas2.height);

}


function apply_color() {
  canvas1 = document.getElementById('Canvas');
  ctx1 = canvas1.getContext('2d');
  canvas2 = document.getElementById('Canvas2');
  ctx2 = canvas2.getContext('2d');

  color=document.getElementById('coloret');
  let theColor = color.value;

  ctx1.save()
  ctx1.globalCompositeOperation = "source-atop";
  ctx1.fillStyle = theColor;
  ctx1.fillRect(0,0, canvas1.width, canvas1.height);
  ctx1.restore();

  ctx2.save()
  ctx2.globalCompositeOperation = "source-atop";
  ctx2.fillStyle = theColor;
  ctx2.fillRect(0,0, canvas2.width, canvas2.height);
  ctx2.restore();

}


function downloadCanvas() {
  canvas = document.getElementById('Canvas');
  canvas2 = document.getElementById('Canvas2')

  ctx = canvas2.getContext('2d');
  ctx.drawImage(canvas, 0, 0);

}


function downloadCanvas() {
  canvas = document.getElementById('Canvas');
  canvas2 = document.getElementById('Canvas2');

  ctx = canvas2.getContext('2d');
  ctx.drawImage(canvas, 0, 0);

  image = canvas2.toDataURL("image/png", 1.0);

  var link = document.createElement('a');
  link.download = "image.png";
  link.href = image;
  link.click();

}

  
  
  
  



