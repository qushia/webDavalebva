function changer(meore) {
    document.getElementById('firstvideo').setAttribute("src", meore);
}
function restarter(pirvela) {
    document.getElementById('firstvideo').setAttribute("src", pirvela);
}
function brothethood(gggg) {
    document.getElementById('firstvideo').setAttribute("src", gggg);
}
function theard(mesame) {
    document.getElementById('firstvideo').setAttribute("src", mesame);
}
function second(brotherhood) {
    document.getElementById('firstvideo').setAttribute("src", brotherhood);
}
function first(oneass) {
    document.getElementById('firstvideo').setAttribute("src", oneass);
}
function six(assasisix) {
    document.getElementById('firstvideo').setAttribute("src", assasisix);
}
function seven(assseven) {
    document.getElementById('firstvideo').setAttribute("src", assseven);
}
function eight(asseight) {
    document.getElementById('firstvideo').setAttribute("src", asseight);
}
function nine(assasnine) {
    document.getElementById('firstvideo').setAttribute("src", assasnine);
}
function ten(assasinten) {
    document.getElementById('firstvideo').setAttribute("src", assasinten);
}
function twelth(assasinvalhala) {
    document.getElementById('firstvideo').setAttribute("src", assasinvalhala);
}
function cideotke(meorei) {
    document.getElementById('firstvideo').setAttribute("src", meorei);

}
function fffff(fffff) {
    document.getElementById('firstvideo').setAttribute("src", fffff);

}


function addTask() {

    const send = {}
   send.name = document.forms['task']['name'].value
   send.lname = document.forms['task']['lname'].value
   send.email = document.forms['task']['email'].value
   send.password = document.forms['task']['password'].value
   send.rpassword =document.forms['task']['tel'].value
   send.tel = document.forms['task']['tel'].value
   send.male =document.forms['task']['male'].value
   send.femal = document.forms['task']['femal'].value
   send.costume = document.forms['task']['costume'].value
    console.log(send)
    addData(send)
}
function addData(task) {
    fetch('http://localhost:3000/tasks', {
    
        method:'POST',
        headers:{'Content-Type': 'application/json',},
        body: JSON.stringify(task)
    
    }).then(() => getData())
    
    }


    async function getData() {
        let sending = await fetch('http://localhost:3000/tasks')
        let getting = await sending.json()
        console.log(getting)
        
        for(i = 0; i < getting.length; i++) {

        document.getElementById('addtext').innerHTML = '';
     
       

        let userName = document.createElement('div')
       userName.innerHTML = getting[i].name
        document.getElementById('addtext').appendChild(userName)

        
    }
}

async function getusers() {
    let sendings = await fetch('http://localhost:3000/tasks')
    let gettings = await sendings.json()
    console.log(gettings)
    
    for(i = 0; i < gettings.length; i++) {

    document.getElementById('useremal').innerHTML = '';
 
   

    let useremail = document.createElement('div')
    useremail.innerHTML = gettings[i].email
     document.getElementById('useremal').appendChild(useremail)
 
    
}
}

function scrol(){
    const elemet = document.getElementById('ass3');
    elemet.scrollIntoView();
}



function search() {

    const searchsending = {}
    searchsending.name = document.getElementById('name').value 
    
   console.log(searchsending)
   searchpart(searchsending)
}
function searchpart(task) {
    fetch('http://localhost:3000/search', {
    
        method:'POST',
        headers:{'Content-Type': 'application/json',},
        body: JSON.stringify(task)
    
    }).then(() => getserch())
    
    }
    async function getserch() {
        let sendsearch = await fetch('http://localhost:3000/search')
        let getsearch = await sendsearch.json()
        console.log(getsearch)

        for (i = 0; i < getsearch.length; i++) {

            document.getElementById('name').innerHTML = '';
            
            if (getsearch[i].name === 'assasin creed ') {
                const elemet = document.getElementById('ass1');
                elemet.scrollIntoView();
           }  else if(getsearch[i].name === 'assasin creed 2') {
            const elemet = document.getElementById('ass2');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed brotherhood') {
            const elemet = document.getElementById('assb');
            elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed relevation') {
            const elemet = document.getElementById('assr');
            elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed 3') {
            const elemet = document.getElementById('ass3');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed black flag') {
            const elemet = document.getElementById('ass4');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed rouge') {
            const elemet = document.getElementById('assrog');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed unity') {
            const elemet = document.getElementById('assu');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed syndicate') {
            const elemet = document.getElementById('asssin');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed origins') {
            const elemet = document.getElementById('assorig');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed odyssey') {
            const elemet = document.getElementById('assodis');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed valhalla') {
            const elemet = document.getElementById('assval');
                elemet.scrollIntoView();
           }else if(getsearch[i].name === 'assasin creed mirage') {
            const elemet = document.getElementById('assmir');
                elemet.scrollIntoView();
           }
    }



    }

    function searcher(){
        const elemet = document.getElementById('name');
        elemet.scrollIntoView();
       
    }


