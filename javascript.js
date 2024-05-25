var popuplay=document.querySelector(".popup-lay")
var popupbox=document.querySelector(".popupbox")
var popupbtu=document.getElementById("popup-btu")

popupbtu.addEventListener("click",function(){  
    popuplay.style.display="block"
    popupbox.style.display="block"
})


// select cancel button 

var cancel=document.getElementById("cancel-book")

cancel.addEventListener("click",function(Event){
    Event.preventDefault()
    popuplay.style.display="none"
    popupbox.style.display="none"
})


// add container ,book-name,boxid,boxid-2

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("boxid")
var bookauthor=document.getElementById("boxid-2")
var bookShortDescription=document.getElementById("boxid-3")

addbook.addEventListener("click",function(Event){
Event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-name")
div.innerHTML=`<h2>${booktitle.value}</h2>
<h4>${bookauthor.value}</h4>
<p>${bookShortDescription.value}</p>
<button onclick="deletebook(event)">Delete</button>`
container.append(div)
popuplay.style.display="none"
popupbox.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}