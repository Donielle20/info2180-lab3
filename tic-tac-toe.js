window.onload = addElement;

function addElement() 
{
    for (var i = 3; i<=11; i++)
    {
        document.getElementsByTagName("div")[i].setAttribute("class","square");
    }   
}