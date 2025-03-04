function verificar(){
    var data = new Date()
    var anos = data.getFullYear()
    var fano = document.getElementById("anode").value
    var resu = document.getElementById("res")
    var minidade = 1899
    
 if(fano <= minidade || fano > anos){
   alert("ops algo deu errado, seus dados são falsos")
 }    else{
    var sexx = document.getElementsByName ("sex")
    var calculo = anos - fano
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
 } if (sexx[0].checked){
   genero = 'masculino'
      if(fano >=2000 && fano <= 2008){
         img.setAttribute('src', 'jovem.png')

      }
       if (fano >= 1980 && fano <= 1999){
         img.setAttribute('src', 'homemA.png')

      }
       if(fano >= 1970 && fano <= 1979){
         img.setAttribute('src', 'homem50.png' )
      }
      if (fano >= 2009 && fano <= 2012){
         img.setAttribute('src','teenH.png' )
      }
      if(fano >= 2013 && fano <= 2019){
         img.setAttribute("src", 'kid1H.png')
      
      
      }
   

 }else if (sexx[1].checked){
   genero = 'feminino'
   if(fano >=2000 && fano <= 2008){
      img.setAttribute('src', 'jovemtrueM.png')
   }
   if (fano >=1980 && fano <= 1999){
      img.setAttribute('src', 'jovemM.png')
   }
   if (fano >= 1970 && fano <= 1970){
      img.setAttribute('src', 'mulher50.png')
   }
   if (fano>= 2009 && 2012){
      img.setAttribute('src', 'teenM.png')
   }
   if(fano >= 2013 && fano <= 2019){
img.setAttribute("src", 'kid2.png')
      
      
   }
  
 }
 resu.innerHTML = `voce tem ${calculo} anos ${genero}`
    resu.appendChild(img)
}
