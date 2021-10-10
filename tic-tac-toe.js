window.onload = addElement;

function addElement() 
{
    for (var i = 3; i<=11; i++)
    {
        document.getElementsByTagName("div")[i].setAttribute("class","square");
    }   
}

let count = 1;
let stat;
let stat2;
let stat3;
let stat4;
let stat5;
let stat6;
let stat7;
let stat8;
let stat9;

function div1()
    {
        if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[3];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat = document.getElementsByTagName("div")[3];
            stat.removeEventListener("click", div1);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box2 = document.getElementsByTagName("div")[4].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box1=="X" && box2=="X" && box3=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box1=="X" && box4=="X" && box7=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box1=="X" && box5=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[3];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat = document.getElementsByTagName("div")[3];
            stat.removeEventListener("click", div1);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box2 = document.getElementsByTagName("div")[4].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box1=="O" && box2=="O" && box3=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box1=="O" && box4=="O" && box7=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box1=="O" && box5=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        }
        count++; 
    }

function div2()
{
    if (count%2!=0)
    {
        let myDiv = document.getElementsByTagName("div")[4];
        myDiv.textContent = "X";
        myDiv.classList.add("X");

        stat2 = document.getElementsByTagName("div")[4];
        stat2.removeEventListener("click", div2);

        var box1 = document.getElementsByTagName("div")[3].textContent;
        var box2 = document.getElementsByTagName("div")[4].textContent;
        var box3 = document.getElementsByTagName("div")[5].textContent;
        var box5 = document.getElementsByTagName("div")[7].textContent;
        var box8 = document.getElementsByTagName("div")[10].textContent;

        if (box1=="X" && box2=="X" && box3=="X")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! X is the Winner!";
        }
        else if (box2=="X" && box5=="X" && box8=="X")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! X is the Winner!";
        }
    }
    else if (count%2==0)
    {
        let myDiv = document.getElementsByTagName("div")[4];
        myDiv.textContent = "O";
        myDiv.classList.add("O");

        stat2 = document.getElementsByTagName("div")[4];
        stat2.removeEventListener("click", div2);
        
        var box1 = document.getElementsByTagName("div")[3].textContent;
        var box2 = document.getElementsByTagName("div")[4].textContent;
        var box3 = document.getElementsByTagName("div")[5].textContent;
        var box5 = document.getElementsByTagName("div")[7].textContent;
        var box8 = document.getElementsByTagName("div")[10].textContent;

        if (box1=="O" && box2=="O" && box3=="O")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! O is the Winner!";
        }
        else if (box2=="O" && box5=="O" && box8=="O")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! O is the Winner!";
        }
    }
    count++; 
}

function div3()
{
    if (count%2!=0)
    {
        let myDiv = document.getElementsByTagName("div")[5];
        myDiv.textContent = "X";
        myDiv.classList.add("X");

        stat3 = document.getElementsByTagName("div")[5];
        stat3.removeEventListener("click", div3);

        var box1 = document.getElementsByTagName("div")[3].textContent;
        var box2 = document.getElementsByTagName("div")[4].textContent;
        var box3 = document.getElementsByTagName("div")[5].textContent;
        var box5 = document.getElementsByTagName("div")[7].textContent;
        var box6 = document.getElementsByTagName("div")[8].textContent;
        var box7 = document.getElementsByTagName("div")[9].textContent;
        var box9 = document.getElementsByTagName("div")[11].textContent;

        if (box1=="X" && box2=="X" && box3=="X")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! X is the Winner!";
        }
        else if (box3=="X" && box5=="X" && box7=="X")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! X is the Winner!";
        }
        else if (box3="X" && box6=="X" && box9=="X")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! X is the Winner!";
        }
    }
    else if (count%2==0)
    {
        let myDiv = document.getElementsByTagName("div")[5];
        myDiv.textContent = "O";
        myDiv.classList.add("O");

        stat3 = document.getElementsByTagName("div")[5];
        stat3.removeEventListener("click", div3);

        var box1 = document.getElementsByTagName("div")[3].textContent;
        var box2 = document.getElementsByTagName("div")[4].textContent;
        var box3 = document.getElementsByTagName("div")[5].textContent;
        var box5 = document.getElementsByTagName("div")[7].textContent;
        var box6 = document.getElementsByTagName("div")[8].textContent;
        var box7 = document.getElementsByTagName("div")[9].textContent;
        var box9 = document.getElementsByTagName("div")[11].textContent;

        if (box1=="O" && box2=="O" && box3=="O")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! O is the Winner!";
        }
        else if (box3=="O" && box5=="O" && box7=="O")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! O is the Winner!";
        }
        else if (box3="O" && box6=="O" && box9=="O")
        {
            let message = document.getElementById("status");
            message.textContent = "Congratulations! O is the Winner!";
        }
    }  
    count++; 
}

function div4()
{
    if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[6];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat4 = document.getElementsByTagName("div")[6];
            stat4.removeEventListener("click", div4);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;

            if (box1=="X" && box4=="X" && box7=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box4=="X" && box5=="X" && box6=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[6];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat4 = document.getElementsByTagName("div")[6];
            stat4.removeEventListener("click", div4);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;

            if (box1=="O" && box4=="O" && box7=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box4=="O" && box5=="O" && box6=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        } 
        count++;  
}

function div5()
{
    if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[7];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat5 = document.getElementsByTagName("div")[7];
            stat5.removeEventListener("click", div5);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box2 = document.getElementsByTagName("div")[4].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box2=="X" && box5=="X" && box8=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box4=="X" && box5=="X" && box6=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box3=="X" && box5=="X" && box7=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box1=="X" && box5=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[7];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat5 = document.getElementsByTagName("div")[7];
            stat5.removeEventListener("click", div5);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box2 = document.getElementsByTagName("div")[4].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box2=="O" && box5=="O" && box8=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box4=="O" && box5=="O" && box6=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box3=="O" && box5=="O" && box7=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box1=="O" && box5=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        } 
        count++;  
}

function div6()
{
    if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[8];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat6 = document.getElementsByTagName("div")[8];
            stat6.removeEventListener("click", div6);

            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box3=="X" && box6=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box4=="X" && box5=="X" && box6=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[8];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat6 = document.getElementsByTagName("div")[8];
            stat6.removeEventListener("click", div6);

            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box3=="O" && box6=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box4=="O" && box5=="O" && box6=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        }   
        count++;
}

function div7()
{
    if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[9];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat7 = document.getElementsByTagName("div")[9];
            stat7.removeEventListener("click", div7);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box1=="X" && box4=="X" && box7=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box7=="X" && box5=="X" && box3=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box7=="X" && box8=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[9];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat7 = document.getElementsByTagName("div")[9];
            stat7.removeEventListener("click", div7);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box4 = document.getElementsByTagName("div")[6].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box1=="O" && box4=="O" && box7=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box7=="O" && box5=="O" && box3=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box7=="O" && box8=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        }   
        count++;
}

function div8()
{
    if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[10];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat8 = document.getElementsByTagName("div")[10];
            stat8.removeEventListener("click", div8);

            var box2 = document.getElementsByTagName("div")[4].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box2=="X" && box5=="X" && box8=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box7=="X" && box8=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[10];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat8 = document.getElementsByTagName("div")[10];
            stat8.removeEventListener("click", div8);

            var box2 = document.getElementsByTagName("div")[4].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box2=="O" && box5=="O" && box8=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box7=="O" && box8=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        } 
        count++;  
}

function div9()
{
    if (count%2!=0)
        {
            let myDiv = document.getElementsByTagName("div")[11];
            myDiv.textContent = "X";
            myDiv.classList.add("X");

            stat9 = document.getElementsByTagName("div")[11];
            stat9.removeEventListener("click", div9);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box3=="X" && box6=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box1=="X" && box5=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
            else if (box7=="X" && box8=="X" && box9=="X")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! X is the Winner!";
            }
        }
        else if (count%2==0)
        {
            let myDiv = document.getElementsByTagName("div")[11];
            myDiv.textContent = "O";
            myDiv.classList.add("O");

            stat9 = document.getElementsByTagName("div")[11];
            stat9.removeEventListener("click", div9);

            var box1 = document.getElementsByTagName("div")[3].textContent;
            var box3 = document.getElementsByTagName("div")[5].textContent;
            var box5 = document.getElementsByTagName("div")[7].textContent;
            var box6 = document.getElementsByTagName("div")[8].textContent;
            var box7 = document.getElementsByTagName("div")[9].textContent;
            var box8 = document.getElementsByTagName("div")[10].textContent;
            var box9 = document.getElementsByTagName("div")[11].textContent;

            if (box3=="O" && box6=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box1=="O" && box5=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
            else if (box7=="O" && box8=="O" && box9=="O")
            {
                let message = document.getElementById("status");
                message.textContent = "Congratulations! O is the Winner!";
            }
        }  
        count++; 
}

document.addEventListener('DOMContentLoaded', function() 
{
    document.getElementsByTagName("div")[3].addEventListener("click", div1);

    document.getElementsByTagName("div")[4].addEventListener("click", div2);
    
    document.getElementsByTagName("div")[5].addEventListener("click", div3);

    document.getElementsByTagName("div")[6].addEventListener("click", div4);

    document.getElementsByTagName("div")[7].addEventListener("click", div5);

    document.getElementsByTagName("div")[8].addEventListener("click", div6);

    document.getElementsByTagName("div")[9].addEventListener("click", div7);
    
    document.getElementsByTagName("div")[10].addEventListener("click", div8);

    document.getElementsByTagName("div")[11].addEventListener("click", div9);
}, false);

document.addEventListener('DOMContentLoaded', function()
{
    let hover1 = document.getElementsByTagName("div")[3];
    hover1.onmouseover = function()
    {
        hover1.classList.add("hover"); 
    };
    hover1.onmouseout = function()
    {
        hover1.classList.remove("hover");
    }

    let hover2 = document.getElementsByTagName("div")[4];
    hover2.onmouseover = function()
    {
        hover2.classList.add("hover"); 
    };
    hover2.onmouseout = function()
    {
        hover2.classList.remove("hover");
    }

    let hover3 = document.getElementsByTagName("div")[5];
    hover3.onmouseover = function()
    {
        hover3.classList.add("hover"); 
    };
    hover3.onmouseout = function()
    {
        hover3.classList.remove("hover");
    }

    let hover4 = document.getElementsByTagName("div")[6];
    hover4.onmouseover = function()
    {
        hover4.classList.add("hover"); 
    };
    hover4.onmouseout = function()
    {
        hover4.classList.remove("hover");
    }

    let hover5 = document.getElementsByTagName("div")[7];
    hover5.onmouseover = function()
    {
        hover5.classList.add("hover"); 
    };
    hover5.onmouseout = function()
    {
        hover5.classList.remove("hover");
    }

    let hover6 = document.getElementsByTagName("div")[8];
    hover6.onmouseover = function()
    {
        hover6.classList.add("hover"); 
    };
    hover6.onmouseout = function()
    {
        hover6.classList.remove("hover");
    }

    let hover7 = document.getElementsByTagName("div")[9];
    hover7.onmouseover = function()
    {
        hover7.classList.add("hover"); 
    };
    hover7.onmouseout = function()
    {
        hover7.classList.remove("hover");
    }

    let hover8 = document.getElementsByTagName("div")[10];
    hover8.onmouseover = function()
    {
        hover8.classList.add("hover"); 
    };
    hover8.onmouseout = function()
    {
        hover8.classList.remove("hover");
    }

    let hover9 = document.getElementsByTagName("div")[11];
    hover9.onmouseover = function()
    {
        hover9.classList.add("hover"); 
    };
    hover9.onmouseout = function()
    {
        hover9.classList.remove("hover");
    }
}, false);

document.addEventListener('DOMContentLoaded', function()
{
    var num1 = document.getElementsByTagName("button")[0];
    num1.addEventListener("click",function()
    {
        var mes = document.getElementById("status");
        mes.textContent = "Move your mouse over a square and click to play an X or an O.";

        document.getElementsByTagName("div")[3].addEventListener("click", div1);
        document.getElementsByTagName("div")[4].addEventListener("click", div2);
        document.getElementsByTagName("div")[5].addEventListener("click", div3);
        document.getElementsByTagName("div")[6].addEventListener("click", div4);
        document.getElementsByTagName("div")[7].addEventListener("click", div5);
        document.getElementsByTagName("div")[8].addEventListener("click", div6);
        document.getElementsByTagName("div")[9].addEventListener("click", div7);
        document.getElementsByTagName("div")[10].addEventListener("click", div8);
        document.getElementsByTagName("div")[11].addEventListener("click", div9);

        for (var i = 3; i<=11; i++)
        {
            document.getElementsByTagName("div")[i].textContent = " ";
            document.getElementsByTagName("div")[i].classList.remove("X");
            document.getElementsByTagName("div")[i].classList.remove("O");
        }
        count = 1;
    }
    );
}, false);