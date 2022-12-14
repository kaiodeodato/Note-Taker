var lista_notes = [];
let regex = /^(?=.*[@!#$%\-+><^&*()/\\])[@\-+!#$><.%^&*()/\\a-zA-Z0-9]{1,100}$/;

function note_unit(title,text) {
    this.title = title;
    this.text = text;
    this.code = `<div class="bloco_note">
    <h3 class="titulo_note">${title}</h3>
    <div class="bloco_note_inferior">
        <p class="texto_note">${text}</p>
        <button class="button_note" onclick = "open_modal('${text}')">open</button>
    </div>
</div>`
}

addEventListener('keydown',check)

function check(e){
    switch(e.key){
        case 'Enter':
            add_note();
            break;
    }
}

let fundo_modal = document.getElementById('fundo_modal')

fundo_modal.addEventListener('click',fecharModal)

function fecharModal(){
    let modal = document.querySelector('#fundo_modal')
    modal.style.display = 'none'
}

function add_note(){
    let notes = document.getElementById('notes')
    let input_titulo = document.getElementById('input_titulo').value;
    let input_note = document.getElementById('input_note').value;

    if(((!regex.test(input_note)) && (!regex.test(input_titulo))) && ((input_note != '') && (input_titulo != ''))){

    let note = new note_unit(input_titulo,input_note);
    
    lista_notes.push(note)

    notes.innerHTML = (lista_notes.map((item => item.code))).join('')

    document.getElementById('input_titulo').value = ''
    document.getElementById('input_note').value = ''
    }
}

function open_modal(text){
    let titulo_modal = document.getElementById('titulo_modal');
    let texto_modal = document.getElementById('texto_modal');
    let modal = document.querySelector('#fundo_modal')

    let index = lista_notes.map((item => item.text)).indexOf(text)

    modal.style.display = 'block'

    titulo_modal.innerHTML = lista_notes[index].title
    texto_modal.innerHTML = text

}