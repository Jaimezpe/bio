const texto = "FrontEnd Developer";
        let i = 0;
        const velocidad = 120;

        function escribirTexto() {
            if (i < texto.length) {
                document.getElementById("typewriter").innerHTML += texto.charAt(i);
                i++;
                setTimeout(escribirTexto, velocidad);
            } else {
                document.getElementById("typewriter").style.borderRight = '';
            }
        }



        window.onload = escribirTexto;