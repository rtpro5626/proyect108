
function comenzar_clasificacion()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aSkMy9u2u/model.json",modelo_cargado)
    
}
function modelo_cargado()
{
    classifier.classify(gotresult)
}
function gotresult(error,results)
{
if(error)
{
console.error(error)
}else
{
console.log(results)
numero1=Math.floor(Math.random()*255)+1
numero2=Math.floor(Math.random()*255)+1
numero3=Math.floor(Math.random()*255)+1
document.getElementById("escucho").innerHTML="escucho: "+results[0].label;
document.getElementById("presicion").innerHTML="presicion: "+(results[0].confidence *100).toFixed(2);

img1=document.getElementById("img1")
img2=document.getElementById("img2")
img3=document.getElementById("img3")
img4=document.getElementById("img4")
if (results[0].label == "perro") {
    img1.src = 'miedo-perro.gif';
    img2.src = 'gato.webp';
    img3.src = 'deheuskidzz_cow_black_close-up_mouth-open_01_l.png';
    img4.src = 'caballo.webp';
  } else if (results[0].label == "gato") {
    img1.src = 'Riley_render_CoDG.webp';
    img2.src = 'jvue.gif';
    img3.src = 'deheuskidzz_cow_black_close-up_mouth-open_01_l.png';
    img4.src = 'caballo.webp';
  } else if (results[0].label == "vaca") {
    img1.src = 'Riley_render_CoDG.webp';
    img2.src = 'gato.webp';
    img3.src = 'vaca-05.gif';
    img4.src = 'caballo.webp';
  }else{
    img1.src = 'Riley_render_CoDG.webp';
    img2.src = 'gato.webp';
    img3.src = 'deheuskidzz_cow_black_close-up_mouth-open_01_l.png';
    img4.src = '7a3cddb19790842717766c5747cca5b6_w200.gif';
  }

}
}
