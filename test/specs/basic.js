const assert = require('assert')

describe('Test funcionamiento webDriverIO', () => {
    it('Tester puede capturar urls', () => {
        browser.url('');
        console.log(browser.getUrl());
    })
})

describe('Vista Cliente', () => {
    it('La página se carga con éxito', () => {
        browser.url('http://35.224.191.225:9090/');
        const titulo = $$('span')[0];
        assert.notStrictEqual(titulo.getText(), 'No se puede acceder a este sitio')
    })
})

describe('Vista Cliente', () => {
    it('Se muestra título de página principal', () => {
        browser.url('http://35.224.191.225:9090/');
        const outputTest = $$('h1')[0];
        const esperado = 'Nuestro Hotel';
        assert.strictEqual(outputTest.getText(), esperado);
    })
})

describe('Vista Funcionario', () => {
    it('La página se carga con éxito', () => {
        browser.url('http://35.224.191.225:9090/app');
        const titulo = $$('span')[0];
        assert.notStrictEqual(titulo.getText(), 'No se puede acceder a este sitio')
    })
})

describe('Vista funcionario', () => {
    it('Se muestra el botón Filtrar', () => {
        browser.url('http://35.224.191.225:9090/app')
        const texto = $$('button')[0];
        const esperado = 'FILTRAR';
        assert.strictEqual(texto.getText(), esperado)
    })
})

describe('Vista cliente y funcionario', () => {
    it('Cambiar entre las vistas de la página', () => {
        // Se abre por url
        browser.url('http://35.224.191.225:9090/app')
        // Se cre una nueva ventana
        browser.newWindow('htt0p://35.224.191.225:9090')
        // Se devuelve a la vista anterior 
        browser.switchWindow('/app')
    })
})

/*
TEST EN CONSTRUCCIÓN

describe('Vista funcionario', () => {
    it('Validación de formulario nombre', () => {
        browser.url('http://35.224.191.225:9090/app');
        const form = $$('button')[6]; // boton: nueva reserva
        form.click();
        const testInput = '111';
        const nameInput = $$('input[id="input-90"]'); // input: nombre y apellido del huesped
        nameInput.browser.setValue(testInput);
        //browser.setValue('input[id="input-70"]', testInput)

        const nameError = $$('div[class="v-messages__message message-transition-enter-to"]')[0];
        // mensaje de error: El nombre debe ser válido
        assert.strictEqual( nameError.getText(), 'El nombre debe ser válido');
    })
})
*/