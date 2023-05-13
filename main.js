function yoz(){
     var inp1 = document.getElementById('inp1');
     var inp2 = document.getElementById('inp2');
     var inp3 = document.getElementById('inp3');
     var inp4 = document.getElementById('inp4');

    //  var obj = {
    //     inp1: inp1.value,
    //     inp2: inp2.value,
    //     inp3: inp3.value,
    //     inp4: inp4.value,
    //  }
    //  console.log(obj);

    window.localStorage.setItem("inp1", inp1.value);
    window.localStorage.setItem("inp2", inp2.value);
    window.localStorage.setItem("inp3", inp3.value);
    window.localStorage.setItem("inp4", inp4.value);
}


function tekshir(){
    var inp1 = document.getElementById('inp11');
    var inp2 = document.getElementById('inp12');
    var h1 = document.getElementById('h1');

    var inp3 = window.localStorage.getItem('inp3'); 
    var inp4 = window.localStorage.getItem('inp4');

    if(inp1.value == inp3 && inp2.value == inp4)
    {
        window.open("index3.html")
    }
    else{
        h1.innerText = "parol yoki email xato!"
        h1.style.color = "crimson";
        h1.style.fontSize  = "14pt";
    }


}
