let input=document.getElementById('inputBox');
input.addEventListener("keyup",(event)=>{
    if(event.key=="Enter")
    { 
        addtask(input.value)
        input.value=""
    }
})


let list = document.querySelector('#list');

let addmsg = (message) => {
    let toastBox = document.querySelector('.toastBox');
    let newdiv = document.createElement('div');
    newdiv.classList.add('tst');
    newdiv.innerHTML = message;
    toastBox.appendChild(newdiv);

    setTimeout(() => {
        newdiv.remove();
    }, 2500);
}

let v;
let addtask = (text) => {
    if(text==='')
    {
        alert("Please enter a task");
        return;
    }
    else
    {
        let l = document.createElement("li");
        l.innerHTML = `${text}<i></i>`;
        l.classList.add('unmarked');
        l.addEventListener("click", () => {
            if(l.classList.contains('unmarked'))
            {
                l.classList.remove('unmarked');
                l.classList.toggle('done');
                addmsg("Task completed");
            }
            else
            {
                l.classList.add('unmarked');
                l.classList.toggle('done');
                addmsg("Task incompleted");
            }
        });
        v=l.querySelector('i');
        l.querySelector('i').addEventListener("click", (event) => {
            event.stopPropagation(); 
            addmsg("Task Deleted");
            l.remove();
        });

        list.appendChild(l);
        addmsg("Task added");
   }
}



//Theme 

let t=document.querySelector('.theme');
let body=document.body;
let b=document.querySelector('.box');
let h2=document.querySelector('.h');
t.addEventListener("click",()=>{
    t.classList.toggle('change');
    if(t.classList.contains('change'))
    {
        v.style.color='black';
        body.style.background='grey';
        b.style.background='grey';
        b.style.boxShadow='1px 1px 10px black';
        h2.style.color='black';
    }
    else
    {
         v.style.color='';
        body.style.background='';
        b.style.background='';
        b.style.boxShadow='';
        h2.style.color='';
    }
})

let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
    filterTasks(searchInput.value.toLowerCase());
});

let filterTasks = (searchText) => {
    let tasks = document.querySelectorAll('li');
    tasks.forEach(task => {
        let taskText = task.textContent.toLowerCase();
        if (taskText.includes(searchText)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
};
