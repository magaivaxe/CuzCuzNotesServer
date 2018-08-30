// Notes variables

let mainDiv = document.getElementById('main');
let count = 0;

// Add notes
function buildNote(){
  count++;
  let id_h = 'h' + count;
  let id_p = 'p' + count;
  let id_n = 'n' + count;
  let div_note = document.createElement('div');
  div_note.setAttribute('class','note notes1');
  div_note.innerHTML = '<div class="note notes1" id=' + id_n + '>' +
    '<h2 id='+ id_h +'></h2>'+
    '<p id='+ id_p +'></p>'+
    '<div class="edition">'+
        '<div class="edit" onclick="editable('+ id_n +','+ id_h +','+ id_p +')"><img src="../cuzcuzNotes/images/pencil.png" class="format imgPencil"></div>'+
        '<div class="eraser" onclick="eraser('+ id_n +')"><img src="../cuzcuzNotes/images/delete.png" class="format imgDelete"></div>'+
    '</div>'+
  '</div>';
  mainDiv.appendChild(div_note);
  pushNote();
  console.log(arrayNotes.length);
}
// Editable
function editable(id_note,id_title,id_text) {
  let text = document.getElementById(id_text);
  let title = document.getElementById(id_title);
    if (text.isContentEditable) {
      let c = confirm("Do you want save your note?")
      if (c) {
        miseJour(text, title, id_note);
      }
    } else {
      title.contentEditable = true;
      title.style.textAlign = "center";
      title.style.fontWeight = "bold";
      title.style.fontSize = "1.35em";
      title.innerHTML = "Your title here!"
      text.contentEditable = true;
      text.style.textAlign = "center";
      text.innerHTML = "Your note here!";
      // Storage
      notesNumber++;
    }
}

// Storage array
let arrayNotes = [];
// Storage object
let note = {
  id: '',
  title: '',
  content: ''};
// Push array values
function pushNote() {
  note.id = 'n' + count;
  note.title = document.getElementById('h' + count).textContent;
  note.content = document.getElementById('p' + count).textContent;
  arrayNotes.push(note);
}

// Initial function
function start(){
  mainDiv.innerHTML = '';
  loadLocal();
  for (let i = 0; i < arrayNotes.length; i++) {
    let id_h = 'h' + i + 1;
    let id_p = 'p' + i + 1;
    let id_n = 'n' + i + 1;
    let div_newnote = document.createElement('div');
    div_newnote.setAttribute('class','note notes1');
    div_newnote.innerHTML = '<div class="note notes1" id=' + id_n + '>' +
      '<h2 id='+ id_h +'></h2>'+
      '<p id='+ id_p +'></p>'+
      '<div class="edition">'+
          '<div class="edit" onclick="editable('+ id_n +','+ id_h +','+ id_p +')"><img src="../cuzcuzNotes/images/pencil.png" class="format imgPencil"></div>'+
          '<div class="eraser" onclick="eraser('+ id_n +')"><img src="../cuzcuzNotes/images/delete.png" class="format imgDelete"></div>'+
      '</div>'+
    '</div>';
    mainDiv.appendChild(div_note);
    }
}

// Eraser texts
function eraser(id_note) {
  // Message to confirm
  let confirmation = confirm("Do you want to erase your note?");
  // Erase condition
  if (confirmation) {
    let text = document.getElementById(id_text);
    let title = document.getElementById(id_title);
    text.innerHTML = "";
    title.innerHTML = "";
    id_note.hidden = true;
    // Search note to erase
    if (arrayNotes.length > 0){
      let index = 0
      arrayNotes.forEach(element => {
        if (element.id == id_note) {
          arrayNotes.splice(index,1);
        }
        index++;
      });
      saveLocal();
    }
  }
}

// Save data
function saveLocal() {
  localStorage.setItem('allNotes', JSON.stringify(arrayNotes));
}
// Load data
function loadLocal() {
  if (localStorage.getItem('allNotes') == null) {
    saveLocal();
  } else {
    arrayNotes = JSON.parse(localStorage.getItem('allNotes'));
  }
}