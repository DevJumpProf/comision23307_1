<img  src='../logo.png' height='70px'>

# Interacción: alert, prompt, confirm

Como usaremos el navegador como nuestro entorno de demostración, veamos un par de funciones para interactuar con el usuario: alert,prompt y confirm.

/* alert
muestra un mensaje. */

/* prompt
muestra un mensaje pidiendo al usuario que introduzca un texto. Retorna el texto o, si se hace clic en CANCELAR o Esc, retorna null. */

/* confirm
muestra un mensaje y espera a que el usuario pulse “OK” o “CANCELAR”. Retorna true si se presiona OK y false si se presiona CANCEL/Esc.
Todos estos métodos son modales: detienen la ejecución del script y no permiten que el usuario interactúe con el resto de la página hasta que la ventana se haya cerrado. */

/* Hay dos limitaciones comunes a todos los métodos anteriores:

La ubicación exacta de la ventana modal está determinada por el navegador. Normalmente, está en el centro.
El aspecto exacto de la ventana también depende del navegador. No podemos modificarlo.
Ese es el precio de la simplicidad. Existen otras formas de mostrar ventanas más atractivas e interactivas para el usuario, pero si la “apariencia” no importa mucho, estos métodos funcionan bien. */