
        var list=document.getElementById("list")
        var inputbox=document.getElementById("one")
      function add(){
      
        var listitem=document.createElement("li")
        listitem.innerHTML=inputbox.value + "<button   onclick='deleteitem(event)'>REMOVE</button>"
        list.append(listitem)
        }
        function deleteitem(event){
         event.target.parentElement.remove()
        }
    
    
    
