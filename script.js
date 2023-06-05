'use strict';
const questions = document.querySelectorAll(".question");
const paragraph = document.querySelectorAll(".desc");
let previousQuestion = false;

questions.forEach((que, p) => {
    que.addEventListener('click', () => {
        if(que.classList.contains('active')) {
            que.classList.add('active');
            paragraph[p].classList.remove('active');
        } else {
            if(previousQuestion !== false) {
                questions[previousQuestion].classList.remove('active');
                paragraph[previousQuestion].classList.remove('active');
            }
            que.classList.add('active');
            paragraph[p].classList.add('active');
            previousQuestion = p;
        }
    });
    
});
