// نمسك ال input اللي عندي في الكود
var input = document.querySelector('input');

// Hold the button that in div 
var btn = document.querySelector(".addTask > button");

// when i click action will begin & fuanction run
btn.addEventListener('click',addList);

// function that we need to run code well
function addList(e){
    // we declare the two ol to return this anyWhere by name
    var notCompleted = document.querySelector('.notComplete')
    var Completed = document.querySelector('.Complete')

    // i will create new list because i will need it
    var newLi = document.createElement("Li")
    
    // Two icons to check & delete btn
    var checkBtn = document.createElement('button')
    var delBtn = document.createElement('button')

    // we put icons in every own button
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !== ' '){
        newLi.textContent = input.value;
        input.value = ' ';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn); 
    
        checkBtn.addEventListener('click',function(){
            var parent = this.parentNode;
            parent.remove();
            Completed.appendChild(parent);
            checkBtn.style.display = "none"; });
        
        delBtn.addEventListener('click',function(){
            var parent = this.parentNode;
            parent.remove(); });
    }
}