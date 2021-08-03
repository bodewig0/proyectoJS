//* Medición *//

const btnok = document.getElementById('btnok');

function mvalor(){
    var medicion = document.getElementById('medicion').value;

    if((medicion >= 1) && (medicion <= 120)){
        const respm1 = document.getElementById('respuestamed');
            respm1.innerHTML = `   <p class="text-center mt-4">No aplicar unidades</p>
                            `;
    }
    
    else if((medicion >= 121) && (medicion <= 150)){
        const respm2 = document.getElementById('respuestamed');
            respm2.innerHTML = `   <p class="text-center mt-4">Aplicar 1 unidad</p>
                            `;
    }

    else if((medicion >= 151) && (medicion <= 200)){
        const respm3 = document.getElementById('respuestamed');
            respm3.innerHTML = `   <p class="text-center mt-4">Aplicar 2 unidad</p>
                            `;
    }
    
    else if((medicion >= 201) && (medicion <= 250)){
        const respm4 = document.getElementById('respuestamed');
            respm4.innerHTML = `   <p class="text-center mt-4">Aplicar 3 unidad</p>
                            `;
    }
    
    else if((medicion >= 251) && (medicion <= 300)){
        const respm5 = document.getElementById('respuestamed');
            respm5.innerHTML = `   <p class="text-center mt-4">Aplicar 4 unidad</p>
                            `;
    }
    
    else if(medicion >= 301){
        const respm6 = document.getElementById('respuestamed');
            respm6.innerHTML = `   <p class="text-center mt-4">Aplicar 5 unidad</p>
                            `;
    }
    
    else{
        const respm7 = document.getElementById('respuestamed');
            respm7.innerHTML = `   <p class="text-center mt-4">Ingresar valor correctamente</p>
                            `;
    }
}

if(btnok != null) {
    btnok.addEventListener('click',mvalor,true);
}

//* Historial de mediciones *//

class Entry{
    constructor(horario,medicion){
        this.horario = horario;
        this.medicion = medicion;
    }
}

class UI{
    static displayEntries(){
   
        const entries = Store.getEntries();
        entries.forEach((entry) => UI.addEntryToTable(entry));
    }
    static addEntryToTable(entry){
        const tableBody=document.querySelector('#tableBody');

        if (tableBody != null)
        {
            const row = document.createElement('tr');
            row.innerHTML = `   <td class="text-center">${entry.horario}</td>
                                <td class="text-center">${entry.medicion}</td>
                            `;
            tableBody.appendChild(row);
        }
    }
    static clearInput(){
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach((input)=>input.value="");
    }
    static deleteEntry(target){
        if(target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
        }
    }
    
    static validateInputs(){
        return true;
    }
}

class Store{
    static getEntries(){
        let entries;
        if(localStorage.getItem('entries') === null){
            entries = [];
        }
        else{
            entries = JSON.parse(localStorage.getItem('entries'));
        }
        return entries;
    }
    static addEntries(entry){
        const entries = Store.getEntries();
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
    }
}

    document.addEventListener('DOMContentLoaded',UI.displayEntries);

    document.querySelector('#entryForm').addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const horario = document.querySelector('#horario').value;
        const medicion = document.querySelector('#medicion').value;
        if(!UI.validateInputs()){
            return;
        }

        const entry = new Entry(horario, medicion);

        UI.addEntryToTable(entry);
        Store.addEntries(entry);

        UI.clearInput();

    });
