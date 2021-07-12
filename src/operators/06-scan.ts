import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1,2,3,4,5];

const totalAcumulador = (acumulador: number, valorActual: number) => acumulador + valorActual;


//Reduce

from( numeros ).pipe( reduce( totalAcumulador, 0 ) ).subscribe( console.log );

// Scan
from( numeros ).pipe( scan( totalAcumulador, 0 ) ).subscribe( console.log );

// Redux
interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}
const user: Usuario[] =[
    { id: 'nahue', autenticado: false, token: null},
    { id: 'nahue', autenticado: true, token: 'ABC'},
    { id: 'nahue', autenticado: true, token: 'ABC-123'},
];

const state$ = from( user ).pipe( 
    scan<Usuario>( (acc, cur) => {
    return { ...acc, ...cur}
}, {edad: 25}) 
);

const id$ = state$.pipe( map( state => state.id ) );

id$.subscribe( console.log );