const question = document.querySelector('#question')
const questionSecond = document.querySelector('#question1')
const questionThird = document.querySelector('#question2')
const questionFourth = document.querySelector('#question3')
const answer = document.getElementsByClassName('answer')
const imgs = document.getElementsByClassName('sign')
const plus = "./assets/images/icon-plus.svg";
const minus = "./assets/images/icon-minus.svg";
question.addEventListener('click',()=>{
    showAnswer(answer[0],imgs[0])
})
questionSecond.addEventListener('click',()=>{
    showAnswer(answer[1],imgs[1])

})
questionThird.addEventListener('click',()=>{
    showAnswer(answer[2],imgs[2])

})
questionFourth.addEventListener('click',()=>{
    showAnswer(answer[3],imgs[3])

})
function showAnswer(y,x){
    if(y.style.display == 'block'){
        y.style.display = 'none'
        x.src = plus;
    }else {
        y.style.display = 'block'
        x.src = minus
    }
}
