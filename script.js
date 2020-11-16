let counter = 0;

document.getElementsByTagName('footer')[0].addEventListener('click', function(){
    console.log("click");
    console.log(`click numero ${counter}`);
    counter++;
})

document.querySelector(".navbar-toggler-icon").addEventListener('click', function(){
    document.getElementById('navbarHeader').classList.remove("collapse");
}) 


document.querySelectorAll('.card-body  > .d-flex > .btn-group > .btn-outline-secondary').forEach((btn)=>{
    btn.addEventListener('click', function(){
        this.classList.add('btn-danger')
    })
});


document.querySelectorAll('.card-body  > .d-flex > .btn-group > .btn-outline-secondary')[1].addEventListener('click', function(){
    this.classList.toggle('btn-success')
    this.classList.remove('btn-danger')
    console.log(this);
})

document.querySelector(".navbar").addEventListener('dblclick', function(){
    document.getElementsByTagName('link')[0].href = '';
})

document.querySelectorAll('.card-body  > .d-flex > .btn-group > .btn-success').forEach((btn)=>{
    btn.addEventListener('mouseover', function(e){
        if(this.parentElement.parentElement.parentElement.querySelector('p').style.display != "none"){
            this.parentElement.parentElement.parentElement.querySelector('p').style.display = "none"
            let el = this.parentElement.parentElement.parentElement.parentElement.querySelector('img');
            console.log(window.getComputedStyle(el).height.replace('px', '')/100*20);
            el.style.width = (window.getComputedStyle(el).width.replace('px', '')*20/100 + 'px');
            el.style.height = (window.getComputedStyle(el).height.replace('px', '')*20/100 + 'px');
        } else{
            let el = this.parentElement.parentElement.parentElement.parentElement.querySelector('img');
            this.parentElement.parentElement.parentElement.querySelector('p').style.display = null;
            el.style.width = null;
            el.style.height = null;
        }
    }
)})

document.querySelector('.jumbotron > .container > p > .btn-secondary').addEventListener('click', function(e){
    let a = document.querySelector('main > .album > .container > .row')
    a.insertBefore(a.removeChild(a.lastElementChild), a.firstChild)
    console.log(a);
})


document.querySelector('.jumbotron > .container > p > .btn-primary').addEventListener('click', function(e){
    e.preventDefault()
    let a = document.querySelector('main > .album > .container > .row')
    a.appendChild(a.removeChild(a.firstElementChild))
    console.log(a);
})


document.querySelector('.navbar-brand').addEventListener('click', function(e){
    el = document.querySelector('main > .album > .container > .row')
    document.addEventListener("keydown", function(event){
        if(event.key == 'a'){
            console.log(el);
            Array.from(el.children).forEach((sel) =>{
                sel.classList.add("col-md-3")
                sel.classList.remove("col-md-4")
            })
            el.parentElement.style.marginLeft = "0"
        }else if(event.key == 'y'){
            console.log(el);
            Array.from(el.children).forEach((sel) =>{
                sel.classList.add("col-md-3")
                sel.classList.remove("col-md-4")
            })
            el.parentElement.style.marginLeft = 'auto';
            el.parentElement.style.marginRight = 'auto'
        }else if(event.key == 'p'){
            console.log(el);
            Array.from(el.children).forEach((sel) =>{
                sel.classList.add("col-md-3")
                sel.classList.remove("col-md-4")
            })
            el.parentElement.style.marginRight = "0"
            el.style.justifyContent = "end";
        }else if(event.key == 'b'){
            Array.from(el.children).forEach((sel) =>{
                sel.classList = "col-md-4"
            })
            el.parentElement.style.marginLeft = null;
            el.parentElement.style.marginRight = null;
        }
      });
})