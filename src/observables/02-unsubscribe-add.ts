
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]: ', value),
  error: error => console.warn('error [obs]: ', error ),
  complete: () => console.info(' Competado [obs]')  
};


const intervalo$ = new Observable<number>( suscriber => {
  let count = 1;
  const interval = setInterval( () => {
      count++;
      suscriber.next(count);
      console.log(count );
      
  }, 1000)

  setTimeout(() => {
    suscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('intervalo destruido');
    
  }
});

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

subscription1.add( subscription2 )
             .add( subscription3 );

setTimeout(() => {
  subscription1.unsubscribe()

  console.log('completado timeout');
  
  // subscription2.unsubscribe()
  // subscription3.unsubscribe()
}, 6000);