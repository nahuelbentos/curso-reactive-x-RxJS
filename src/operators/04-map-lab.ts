import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.<br/>>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.
<br/><br/>
Vestibulum dapibus vel ante at vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi iaculis, erat sed laoreet aliquam, risus nisi auctor ante, id efficitur leo augue tincidunt sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id odio sem. Praesent tellus dui, cursus id lorem eu, suscipit ornare lectus. Suspendisse tempus dui malesuada, bibendum dolor a, convallis mauris. Aenean a est eget leo bibendum placerat non elementum sapien.
<br/><br/>
Etiam tellus odio, dapibus a pellentesque nec, fermentum ut lectus. Aenean interdum purus at augue auctor, at vulputate lacus faucibus. Vivamus sem lorem, dapibus nec turpis in, maximus egestas augue. Nulla facilisi. Cras vitae lacus lacinia, faucibus quam non, varius sapien. Pellentesque mollis risus at purus imperdiet tincidunt at congue diam. Integer sed augue rutrum magna blandit efficitur a at arcu. Proin quam tellus, rutrum ut placerat et, hendrerit vel velit. Cras nec arcu consectetur, pretium urna eu, placerat nulla. Duis magna turpis, fringilla vitae sem in, suscipit luctus libero. Nullam ut semper ante, sed euismod nunc. Donec tellus ex, ultrices ac interdum ut, imperdiet id odio. Vestibulum nibh enim, hendrerit in placerat ac, hendrerit in urna. Vivamus velit neque, hendrerit ut egestas at, ultricies sed massa.
<br/><br/>
Nam erat metus, luctus a commodo at, semper vitae tellus. Maecenas scelerisque magna commodo lectus consequat, ac blandit urna facilisis. Duis ut dignissim leo. Praesent pulvinar feugiat ipsum. Nulla ac facilisis magna, quis rutrum libero. Etiam non malesuada turpis. Duis rhoncus viverra sem ac tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam facilisis, nulla non mollis semper, ligula arcu semper libero, sit amet ultrices urna nibh vitae odio. In semper scelerisque metus, a consequat purus finibus ac. In ac urna ante. Fusce in est in dolor rhoncus vulputate. Nullam posuere vestibulum est, ac commodo ligula.
<br/><br/>
Cras feugiat et leo nec ultrices. Nunc libero risus, dapibus vel suscipit nec, euismod et purus. Cras volutpat lacus aliquam lacus dictum, id convallis neque feugiat. Etiam vel venenatis est. Aenean fringilla, ipsum sit amet pulvinar sagittis, magna metus cursus magna, id venenatis elit neque vel orci. Nunc ut semper ipsum. Donec sodales tempor ipsum sit amet laoreet. Duis non nisl sollicitudin, auctor erat quis, luctus lorem. Pellentesque diam mi, placerat at accumsan condimentum, gravida sed enim. Vivamus ut turpis diam. In vestibulum lacinia arcu, hendrerit mollis sem auctor nec. Nunc imperdiet bibendum vulputate. Sed ullamcorper placerat justo, nec accumsan lectus luctus ac. Mauris at justo nec nulla dictum pellentesque ac ut quam.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.<br/>>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.
<br/><br/>
Vestibulum dapibus vel ante at vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi iaculis, erat sed laoreet aliquam, risus nisi auctor ante, id efficitur leo augue tincidunt sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id odio sem. Praesent tellus dui, cursus id lorem eu, suscipit ornare lectus. Suspendisse tempus dui malesuada, bibendum dolor a, convallis mauris. Aenean a est eget leo bibendum placerat non elementum sapien.
<br/><br/>
Etiam tellus odio, dapibus a pellentesque nec, fermentum ut lectus. Aenean interdum purus at augue auctor, at vulputate lacus faucibus. Vivamus sem lorem, dapibus nec turpis in, maximus egestas augue. Nulla facilisi. Cras vitae lacus lacinia, faucibus quam non, varius sapien. Pellentesque mollis risus at purus imperdiet tincidunt at congue diam. Integer sed augue rutrum magna blandit efficitur a at arcu. Proin quam tellus, rutrum ut placerat et, hendrerit vel velit. Cras nec arcu consectetur, pretium urna eu, placerat nulla. Duis magna turpis, fringilla vitae sem in, suscipit luctus libero. Nullam ut semper ante, sed euismod nunc. Donec tellus ex, ultrices ac interdum ut, imperdiet id odio. Vestibulum nibh enim, hendrerit in placerat ac, hendrerit in urna. Vivamus velit neque, hendrerit ut egestas at, ultricies sed massa.
<br/><br/>
Nam erat metus, luctus a commodo at, semper vitae tellus. Maecenas scelerisque magna commodo lectus consequat, ac blandit urna facilisis. Duis ut dignissim leo. Praesent pulvinar feugiat ipsum. Nulla ac facilisis magna, quis rutrum libero. Etiam non malesuada turpis. Duis rhoncus viverra sem ac tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam facilisis, nulla non mollis semper, ligula arcu semper libero, sit amet ultrices urna nibh vitae odio. In semper scelerisque metus, a consequat purus finibus ac. In ac urna ante. Fusce in est in dolor rhoncus vulputate. Nullam posuere vestibulum est, ac commodo ligula.
<br/><br/>
Cras feugiat et leo nec ultrices. Nunc libero risus, dapibus vel suscipit nec, euismod et purus. Cras volutpat lacus aliquam lacus dictum, id convallis neque feugiat. Etiam vel venenatis est. Aenean fringilla, ipsum sit amet pulvinar sagittis, magna metus cursus magna, id venenatis elit neque vel orci. Nunc ut semper ipsum. Donec sodales tempor ipsum sit amet laoreet. Duis non nisl sollicitudin, auctor erat quis, luctus lorem. Pellentesque diam mi, placerat at accumsan condimentum, gravida sed enim. Vivamus ut turpis diam. In vestibulum lacinia arcu, hendrerit mollis sem auctor nec. Nunc imperdiet bibendum vulputate. Sed ullamcorper placerat justo, nec accumsan lectus luctus ac. Mauris at justo nec nulla dictum pellentesque ac ut quam.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.<br/>>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.
<br/><br/>
Vestibulum dapibus vel ante at vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi iaculis, erat sed laoreet aliquam, risus nisi auctor ante, id efficitur leo augue tincidunt sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id odio sem. Praesent tellus dui, cursus id lorem eu, suscipit ornare lectus. Suspendisse tempus dui malesuada, bibendum dolor a, convallis mauris. Aenean a est eget leo bibendum placerat non elementum sapien.
<br/><br/>
Etiam tellus odio, dapibus a pellentesque nec, fermentum ut lectus. Aenean interdum purus at augue auctor, at vulputate lacus faucibus. Vivamus sem lorem, dapibus nec turpis in, maximus egestas augue. Nulla facilisi. Cras vitae lacus lacinia, faucibus quam non, varius sapien. Pellentesque mollis risus at purus imperdiet tincidunt at congue diam. Integer sed augue rutrum magna blandit efficitur a at arcu. Proin quam tellus, rutrum ut placerat et, hendrerit vel velit. Cras nec arcu consectetur, pretium urna eu, placerat nulla. Duis magna turpis, fringilla vitae sem in, suscipit luctus libero. Nullam ut semper ante, sed euismod nunc. Donec tellus ex, ultrices ac interdum ut, imperdiet id odio. Vestibulum nibh enim, hendrerit in placerat ac, hendrerit in urna. Vivamus velit neque, hendrerit ut egestas at, ultricies sed massa.
<br/><br/>
Nam erat metus, luctus a commodo at, semper vitae tellus. Maecenas scelerisque magna commodo lectus consequat, ac blandit urna facilisis. Duis ut dignissim leo. Praesent pulvinar feugiat ipsum. Nulla ac facilisis magna, quis rutrum libero. Etiam non malesuada turpis. Duis rhoncus viverra sem ac tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam facilisis, nulla non mollis semper, ligula arcu semper libero, sit amet ultrices urna nibh vitae odio. In semper scelerisque metus, a consequat purus finibus ac. In ac urna ante. Fusce in est in dolor rhoncus vulputate. Nullam posuere vestibulum est, ac commodo ligula.
<br/><br/>
Cras feugiat et leo nec ultrices. Nunc libero risus, dapibus vel suscipit nec, euismod et purus. Cras volutpat lacus aliquam lacus dictum, id convallis neque feugiat. Etiam vel venenatis est. Aenean fringilla, ipsum sit amet pulvinar sagittis, magna metus cursus magna, id venenatis elit neque vel orci. Nunc ut semper ipsum. Donec sodales tempor ipsum sit amet laoreet. Duis non nisl sollicitudin, auctor erat quis, luctus lorem. Pellentesque diam mi, placerat at accumsan condimentum, gravida sed enim. Vivamus ut turpis diam. In vestibulum lacinia arcu, hendrerit mollis sem auctor nec. Nunc imperdiet bibendum vulputate. Sed ullamcorper placerat justo, nec accumsan lectus luctus ac. Mauris at justo nec nulla dictum pellentesque ac ut quam.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.<br/>>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis est mauris, dignissim id sem non, hendrerit feugiat sem. Ut tincidunt euismod enim vel imperdiet. Proin ut malesuada dolor. Aliquam nec viverra augue. Ut enim nunc, placerat nec orci quis, viverra vulputate felis. Nulla quam arcu, dictum ac orci eget, iaculis fringilla neque. Quisque tristique enim et tincidunt egestas. Ut ac sodales massa. Maecenas molestie venenatis purus, ut faucibus lorem vulputate ut. Suspendisse mattis turpis ut nunc rutrum cursus.
<br/><br/>
Vestibulum dapibus vel ante at vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi iaculis, erat sed laoreet aliquam, risus nisi auctor ante, id efficitur leo augue tincidunt sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id odio sem. Praesent tellus dui, cursus id lorem eu, suscipit ornare lectus. Suspendisse tempus dui malesuada, bibendum dolor a, convallis mauris. Aenean a est eget leo bibendum placerat non elementum sapien.
<br/><br/>
Etiam tellus odio, dapibus a pellentesque nec, fermentum ut lectus. Aenean interdum purus at augue auctor, at vulputate lacus faucibus. Vivamus sem lorem, dapibus nec turpis in, maximus egestas augue. Nulla facilisi. Cras vitae lacus lacinia, faucibus quam non, varius sapien. Pellentesque mollis risus at purus imperdiet tincidunt at congue diam. Integer sed augue rutrum magna blandit efficitur a at arcu. Proin quam tellus, rutrum ut placerat et, hendrerit vel velit. Cras nec arcu consectetur, pretium urna eu, placerat nulla. Duis magna turpis, fringilla vitae sem in, suscipit luctus libero. Nullam ut semper ante, sed euismod nunc. Donec tellus ex, ultrices ac interdum ut, imperdiet id odio. Vestibulum nibh enim, hendrerit in placerat ac, hendrerit in urna. Vivamus velit neque, hendrerit ut egestas at, ultricies sed massa.
<br/><br/>
`;


const body = document.querySelector('body');
body.append( text );
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar')
body.append( progressBar );

// funcion que haga el calculo
const calcularPorcentajeScroll = ( event ) => {
    const { scrollTop, scrollHeight, clientHeight } =  event.target.documentElement;
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100
    
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap( console.log )
    );

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`
} )