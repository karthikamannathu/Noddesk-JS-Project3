// 1. take all input filed
newQuizBtn = document.querySelector('#new_quiz');
quizAddBlock = document.querySelector('.quiz_builder_block');
basicInputTitle = document.querySelector('#title');
addQunsBtn = document.querySelector('#add_quns');
basicInputCatogery = document.querySelector('#categorey');
basicInputTime = document.querySelector('#time_limit');
basicInputDesc = document.querySelector('#description');



newQuizBtn.style.display = 'flex';
quizAddBlock.style.display = 'block';
infoValidation()

// 2.add events
newQuizBtn.addEventListener('click',() => {
    quizAddBlock.style.display = 'block';
    newQuizBtn.style.display = 'none'
    

})



// 3. functions


function infoValidation() {
    addQunsBtn.addEventListener('click',()=>{
        let inputTitle = basicInputTitle.value;
        let inputCategoery = basicInputCatogery.value;
        let inputTime = basicInputTime.value;
        let inputDesc = basicInputDesc.value;
// console.log(inputDesc,'inputDesc');
 })

}
