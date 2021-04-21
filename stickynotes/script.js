const addButton = document.querySelector('#add');

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes=[];

    console.log(textAreaData);
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);

    // localstorage
    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = '') => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = ` 
     <div class="operation tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main"></div>
        <textarea class=""></textarea> `;

     note.insertAdjacentHTML('afterbegin', htmlData);
    //  console.log(note);

    // getting the references

    const editButton =  note.querySelector('.edit');
    const delButton =  note.querySelector('.delete');
    const mainDiv =  note.querySelector('.main');
    const textArea =  note.querySelector('textarea');

    //deleting the node

    delButton.addEventListener('click', () =>{
        note.remove(note);
    })

    // toggle using edit button

    textArea.value = text;
    mainDiv.innerHtml =text;

     editButton.addEventListener('click', () =>{
         mainDiv.classList.toggle('hidden');
         textArea.classList.toggle('hidden');
     })
  
    //  whatever u type in sticky notes u can see in console just type and come out
     textArea.addEventListener('change',(event) => {
              const value = event.target.value;
            //   console.log(value);
               mainDiv.innerHtml = value;
            
         updateLSData();
            
     })

     document.body.appendChild(note);
    //  it appends a node as the last child of anode
}

// getting data from local storage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note) => addNewNote(note)) };

addButton.addEventListener('click', () => addNewNote());
 

// local and session storage properties allows to store key/value
// pairs in webbrowsers

// localstorage object stores data with no expiration date.The
// data will be deleted when browser is closed.It will be available you want