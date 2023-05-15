$(document).ready(function(){

   
    $(".btn").click(()=>{    
   let get = $(".ism").val()
   let set = $(".ismm").val()
   localStorage.setItem( get, set)




     
    }) 
 
 
 })