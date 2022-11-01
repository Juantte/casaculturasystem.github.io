window.onload = function() {
  canvas = document.getElementById('Canvas3');
  ctx = canvas.getContext('2d');
 
  ctx.drawImage(document.images[2], 152, 4547,1063,260);
  ctx.drawImage(document.images[3], 3508-152-803, 4547,803,260);

};


function draw_pattern () {
    // set our config variables
    canvas = document.getElementById('Canvas');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(152,162);


    color=document.getElementById('coloret');
    let theColor = color.value;

    //set the translation parameters
    var translate_x = [-267-13.35,-13.35,-13.35,-267-13.35];
    var translate_y = [0,0,-267,-267];
 
    //Matrix to indicate the cells with shapes and cells w/o
    var M = [[2,1,1,1,1,1],[1,1,1,1,1,2],[1,1,1,0,0,0],[1,1,1,0,0,0],[1,1,1,2,0,0],[2,0,0,0,0,0]];

 
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
  
        if(M[j][i]==1){
            img_type = Math.floor(Math.random()*2 );
            img_rotation = Math.floor(Math.random()*4 );
            ctx.save();
            ctx.translate(267+i*267, j*267);
            ctx.rotate((Math.PI / 2) * img_rotation);
            ctx.drawImage(document.images[img_type], translate_x[img_rotation], translate_y[img_rotation]-13.35*img_type,293.7-13.35*img_type,267+13.35*img_type);
            ctx.restore();
        }

        if(M[j][i]==2){
            if(Math.floor(Math.random()*3 )!==1){
                img_type = Math.floor(Math.random()*2 );
                img_rotation = Math.floor(Math.random()*4 );
                ctx.save();
                ctx.translate(267+i*267, j*267);
                ctx.rotate((Math.PI / 2) * img_rotation);
                ctx.drawImage(document.images[img_type], translate_x[img_rotation], translate_y[img_rotation]-13.35*img_type,293.7-13.35*img_type,267+13.35*img_type);
                ctx.restore(); 
            }
        }
 

      }
    }

    //forget the margins to reflections
    ctx.translate(-152,-162);

    //mirror effect (top right border)
    ctx.save();
    ctx.translate(3204/4+152,0);   
    ctx.scale(-1,1);
    ctx.drawImage(canvas,-3204/4*3-152,0,3508,4960);
    ctx.restore();

    //mirror effect (bottom border)
    ctx.save();
    ctx.translate(0,3204/2+152);   
    ctx.scale(1,-1);
    ctx.drawImage(canvas,0,-3204+526-162,3508,4960);
    ctx.restore();

    //Change color
    ctx.save();
    ctx.globalCompositeOperation = "source-atop";
    ctx.fillStyle = theColor;
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.restore();

 
  }


function separate_lines(texto, contexto, max_line){

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

    texto_p=document.getElementById('texto_p');
    let theText_p = texto_p.value.toUpperCase();
    texto_s=document.getElementById('texto_s');
    let theText_s = texto_s.value.toUpperCase();
    texto_i=document.getElementById('texto_i');
    let theText_i = texto_i.value.toUpperCase();

    color=document.getElementById('coloret');
    let theColor = color.value;

    //Insert Main TEXT
    ctx.save();
    ctx.font = "300px GTUltra-Regular";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    lines_array = separate_lines(theText_p,ctx,3000);
    altura = 213;
    espaciado = 120;
    partida =162+(4272 -lines_array.length*altura - (lines_array.length-1)*espaciado)/2;
    desp=altura/2;

    for (let i = 0; i < lines_array.length; i++) {
      ctx.fillText(lines_array[i],canvas.width/2,  partida +desp);
      desp=desp+altura+espaciado;
    }
    ctx.restore();

        //Insert Upper/Bottom text
        ctx.save();
        ctx.font = "80px GTUltra-Regular";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
    
        lines_array = separate_lines(theText_s,ctx,1346);
        altura = 52;
        espaciado = 36;
        partida =162+(1602 -lines_array.length*altura - (lines_array.length-1)*espaciado)/2;
        desp=altura/2;
    
        for (let i = 0; i < lines_array.length; i++) {
          ctx.fillText(lines_array[i],canvas.width/2,  partida +desp);
          desp=desp+altura+espaciado;
        }

        lines_array = separate_lines(theText_i,ctx,1346);
        partida =162+2670+(1602 -lines_array.length*altura - (lines_array.length-1)*espaciado)/2;
        desp=altura/2;
        for (let i = 0; i < lines_array.length; i++) {
            ctx.fillText(lines_array[i],canvas.width/2,  partida +desp);
            desp=desp+altura+espaciado;
          }   

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

  color=document.getElementById('coloret');
  let theColor = color.value;

  ctx1.save()
  ctx1.globalCompositeOperation = "source-atop";
  ctx1.fillStyle = theColor;
  ctx1.fillRect(0,0, canvas1.width, canvas1.height);
  ctx1.restore();

}


function downloadCanvas() {
  canvas = document.getElementById('Canvas');
  canvas2 = document.getElementById('Canvas2');
  canvas3 = document.getElementById('Canvas3');

  ctx = canvas2.getContext('2d');
  ctx.drawImage(canvas, 0, 0);
  ctx.drawImage(canvas3, 0, 0);

  image = canvas2.toDataURL("image/png", 1.0);

  var link = document.createElement('a');
  link.download = "image.png";
  link.href = image;
  link.click();

}




