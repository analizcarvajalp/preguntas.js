

const preguntas = {
 total_preguntas:
 [{pregunta:'El sistema electoral para determinar las personas que ocuparan cargos publicos:',
    respuesta1: 'Sufragio',
    respuesta2: 'Adagio',
    respuesta3: 'Naufragio',
    respuesta4: 'Prestigio'},
{pregunta: 'Una persona famelica esta:',
       respuesta1:'Irritable',
       respuesta2:'Hambrienta',
       respuesta3: 'Furiosa',
       respuesta4:'Asustada'},
    {pregunta: 'El albinismo se presenta por la carencia de',
        respuesta1: 'Calcio',
    respuesta4: 'Pigmentación',
    respuesta3: 'Vitamina A',
respuesta2: 'Oxígeno'},
{pregunta: 'Según el refran, quien es ciego?',
        respuesta1: 'La esperanza',
    respuesta3: 'El amor',
    respuesta4: 'El odio',
respuesta2: 'La envidia'},
{pregunta: 'A que tipo de animales se refiere la palabra "aviario"?',
        respuesta1: 'Peces',
    respuesta2: 'Aves',
    respuesta3: 'Mamíferos',
respuesta4: 'Moluscos'}
,
{pregunta: 'En la mitología griega, Eros es considerado el dios del:',
        respuesta1: 'Odio',
    respuesta2: 'Miedo',
    respuesta4: 'Amor',
respuesta3: 'Trabajo'}
,
{pregunta: 'Al periódico que se publica en horas de la tarde, se denomina:',
        respuesta1: 'Matutino',
    respuesta3: 'Vespertino',
    respuesta2: 'Clandestino',
respuesta4: 'Pristino'}
,
{pregunta: 'Tim Burton dirigió la película:',
        respuesta2: 'Inteligencia Artificial',
    respuesta1: 'El gran pez',
    respuesta3: 'Hombres de Negro',
respuesta4: 'Juegos Macabros'}
,
{pregunta: 'Que clase de palabra es "según"?:',
        respuesta1: 'Verbo',
    respuesta4: 'Preposición',
    respuesta3: 'Adjetivo',
respuesta2: 'Sustantivo'}
,
{pregunta: '"Los Roques" es un:',
        respuesta1: 'Bote',
    respuesta2: 'Campamento',
    respuesta3: 'Bohío',
respuesta4: 'Archipiélago'}
    ]
}


const respuesta1 = document.getElementById('respuesta1')
const respuesta2 = document.getElementById('respuesta2')
const respuesta3 = document.getElementById('respuesta3')
const respuesta4 = document.getElementById('respuesta4')
const pregunta = document.getElementById('pregunta')
const botones = document.getElementById('buttons')
const mensaje = document.getElementById('mensaje')

function Tablero(numero = 0){
pregunta.innerHTML = preguntas.total_preguntas[numero].pregunta
respuesta1.innerHTML = preguntas.total_preguntas[numero].respuesta1
respuesta2.innerHTML = preguntas.total_preguntas[numero].respuesta2
respuesta3.innerHTML = preguntas.total_preguntas[numero].respuesta3
respuesta4.innerHTML = preguntas.total_preguntas[numero].respuesta4

}

function ganador(puntos){
    document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2184555/pexels-photo-2184555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    mensaje.innerHTML = `Felicidades, has ganado, tienes ${puntos} puntos` 
    botones.classList.add('disabled')
  
   
}



Tablero()
function iniciar(){
    Tablero()
    botones.classList.remove('disabled')
    mensaje.innerHTML= '' 

}
let punto = 0;
buttons.addEventListener('click',function(e){
    const target = e.target

   
        switch(target.innerHTML){
            case 'Sufragio':
            punto = 100;
            
          Tablero(1)

         break;
            case 'Hambrienta':
            punto = 200
            Tablero(2)
                break;
                case 'Pigmentación':
               punto = 300
            Tablero(3)
            break;
            case 'El amor':
               punto = 400
            Tablero(4)
            break;
            case 'Aves':
                punto = 500
                Tablero(5)
                break;
         
              case 'Amor':
            punto = 600
            Tablero(6)
            break;

            case 'Vespertino':
            punto = 700
            Tablero(7)
            break;

            case 'El gran pez':
                punto = 800
                Tablero(8)
                break;

            case 'Preposición':
                punto = 900
                Tablero(9)
                break;  
            case 'Archipiélago':
                punto = 1000
             
                break;  

                
                default:
                botones.classList.add('disabled')
               mensaje.innerHTML = `<div><p style="color:#ff1100; font-weight:800;">Lo sentimos, has perdido, tu puntaje final es ${punto}</p>
               <button id="reiniciar-btn"style="margin: 10px 0;"onclick="iniciar()">Reiniciar Juego</button></div>`    
              
              
             
        }
    

   

})
    