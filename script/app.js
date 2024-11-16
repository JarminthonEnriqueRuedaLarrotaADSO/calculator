const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

console.log(display);

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnApretado = btn.value;

        if (btnApretado == 'C') {
            display.value = 0;
            return
        }
        if (btnApretado == 'CE') {
            display.value = 0;
            return
        }
        if (btnApretado == 'delete') {
            console.log(btnApretado);
            
            if (display.value.length === 1 || display.value == "Sintax Error!" ) {
                display.value = 0                                
            } else {
                display.value = display.value.slice(0,-1);
            }
            return
        }

        if (btnApretado == '=') {
            try {
                display.value = eval(display.value)            
            } catch {
            display.value = "Sintax Error!"
            }
            return                

        } 
        
        if (display.value == 0 || display.value == "Sintax Error!") {
            // display.value = '';
            display.value = btnApretado;
            //display.value = ''
        } else {
            display.value += btnApretado;
        }



        ;
    })

})



const suma = () => {

}
const resta = () => {

}
const multiplicacion = () => {

}
const divicion = () => {

}