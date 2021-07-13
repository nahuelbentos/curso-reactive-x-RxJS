import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of(1,1,1,1,1,2,3,3,4,5,3,1);


numeros$
.pipe(
    distinct()
)
.subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Batman' },
    { nombre: 'Megaman' },
    { nombre: 'Zero' },
    { nombre: 'X' },
    { nombre: 'Zero' },
    { nombre: 'Megaman' },
]

from( personajes )
.pipe( 
    distinct( personaje => personaje.nombre ) 
    )
.subscribe( console.log )