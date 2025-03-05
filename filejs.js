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
      if (fano >= 2009 && fano <= 2014){
         img.setAttribute('src','teenH.png' )
      }
      if(fano >= 2013 && fano <= 2017){
         img.setAttribute("src", 'kid1H.png')
      
      
      
      }
      if(fano >= 2018 && fano <= 2020){
         img.setAttribute('src', 'babyboy.png')

      }
      if(fano >= 2020 && fano <= 2025){
         img.setAttribute('src', 'bebeM.png' )
      }
      if (fano >=1899 && fano <= 1969){
         img.setAttribute ("src", 'velho.png')
      }
   

 }else if (sexx[1].checked){
   genero = 'feminino'
   if(fano >=2000 && fano <= 2010){
      img.setAttribute('src', 'jovemtrueM.png')
   }
   if (fano >=1980 && fano <= 1999){
      img.setAttribute('src', 'jovemM.png')
   }
   if (fano >= 1970 && fano <= 1970){
      img.setAttribute('src', 'mulher50.png')
   }
   if (fano>= 2011 && fano <= 2014){
      img.setAttribute('src', 'teenM.png')
   }
   if(fano >= 2013 && fano <= 2017){
img.setAttribute("src", 'kid2.png')     
   }
   if (fano >= 2018 && fano<= 2020){
      img.setAttribute("src", 'babygirl.png')
   }
   if ( fano>=2020 && fano <= 2025){
      img.setAttribute ("src",'babybabyG.png' )
   }
   if (fano >=1899 && fano <= 1969){
      img.setAttribute ("src", 'velha.png')
   }

  
 }
 resu.innerHTML = `voce tem ${calculo} anos ${genero}`
    resu.appendChild(img)
}
