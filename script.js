let div = document.querySelector('.container');

// insertAdjacentText - método insere um texto em uma posição especificada.
div.insertAdjacentText('beforebegin', 'Antes do DIV')
div.insertAdjacentText('afterbegin', 'Depois do DIV || ')
div.insertAdjacentText('beforeend', '|| Antes do FIM')
div.insertAdjacentText('afterend', 'Depois do FIM')

// insertAdjacentHTML - O método insere código HTML em uma posição especificada.
div.insertAdjacentHTML('beforebegin', '<p>AAA</p>')
div.insertAdjacentHTML('afterbegin', '<p>BBB</p>')
div.insertAdjacentHTML('beforeend', '<p>CCC</p>')
div.insertAdjacentHTML('afterend', '<p>DDD</p>')

// insertAdjacentElement - O método insere um elemento em uma posição especificada.
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Texto';

div.insertAdjacentElement('beforebegin', paragrafo)
div.insertAdjacentElement('afterbegin', paragrafo)
div.insertAdjacentElement('beforeend', paragrafo)
div.insertAdjacentElement('afterend', paragrafo)