import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elit ante, egestas convallis tempus eu, pretium a sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin non augue egestas, hendrerit odio eget, fermentum enim. Maecenas porttitor pretium nisl sed facilisis. Maecenas sed quam magna. Nunc maximus dui vel tellus mollis, at dapibus turpis blandit. Quisque tempor urna risus, ac dignissim enim suscipit eu. Etiam pharetra, odio vel ultrices ullamcorper, nisi lectus convallis sem, nec ultrices justo sem ac nibh.
<br><br>
Phasellus vel massa commodo, dictum erat vel, porta libero. Morbi consectetur eu leo eget pharetra. Vivamus eget vestibulum massa. Aliquam ullamcorper nibh finibus risus ornare, a congue dui egestas. Aliquam semper at dui eu interdum. Morbi vehicula cursus lacus, ullamcorper ultrices eros posuere non. Maecenas ut turpis est. In hac habitasse platea dictumst. Nullam ac elit et urna congue tristique at a eros. Phasellus ultricies vel mi eget vulputate. Mauris eget sapien laoreet, consectetur massa hendrerit, pretium nisl. Etiam est tellus, mattis quis lacus at, tristique dapibus dui. Pellentesque vitae tincidunt metus. Nam id sagittis mauris. Phasellus vel ligula nulla. Nullam eget venenatis lorem.
<br><br>
Sed in velit tellus. Morbi bibendum, massa sed sodales venenatis, augue elit ultrices ipsum, rhoncus suscipit erat tortor ut nibh. In volutpat enim lorem. Fusce lobortis ornare est, nec gravida enim imperdiet vitae. Cras lobortis mauris vel orci tincidunt, id pretium justo elementum. Proin in quam non augue dignissim feugiat eu eget arcu. Phasellus euismod risus volutpat cursus feugiat. Vestibulum condimentum viverra eros, eget auctor ante ultrices sed. Proin sed ex eu metus cursus hendrerit. In ac hendrerit tortor. Fusce tristique consequat elit id placerat. Integer gravida finibus erat, quis feugiat lacus ullamcorper a. Vestibulum in massa et metus aliquet feugiat.
<br><br>
Donec in accumsan lorem. Praesent a molestie leo. Aenean tincidunt convallis convallis. Suspendisse arcu urna, commodo eu ornare vitae, fermentum ac urna. Nulla suscipit accumsan risus ut elementum. Mauris dapibus nibh vitae orci iaculis, at volutpat sapien sagittis. Donec gravida tellus vitae mauris tempus, quis cursus risus cursus. Proin in egestas purus. Morbi enim urna, rutrum at mollis quis, malesuada eget leo. Fusce sit amet massa urna. Cras euismod et nisi nec placerat. Donec velit neque, eleifend vel blandit quis, varius a nibh. Quisque neque lorem, vulputate id feugiat ut, commodo eget massa. Mauris sit amet facilisis quam.
<br><br>
Sed rhoncus turpis a libero eleifend, ut bibendum arcu iaculis. Aliquam congue, nisl sit amet porta pulvinar, diam ipsum pulvinar mi, vitae mollis lorem mi eget ipsum. Curabitur hendrerit at turpis ut finibus. Duis et malesuada est. Fusce porta imperdiet tincidunt. Aenean facilisis id mauris quis ullamcorper. Praesent sed lectus a eros imperdiet fringilla. Vestibulum sit amet elit at orci pretium accumsan sit`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion para calcular
const calcularScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map( calcularScroll ),
    tap( console.log ) 
);


progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})