'use strict';

const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);




const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const commentContainer = document.querySelector('.comment-container');

  function loadComments() {
      commentContainer.innerHTML = localStorage.getItem('comments') || '';
  }

  loadComments();

  function saveComments() {
      localStorage.setItem('comments', commentContainer.innerHTML);
  }

  commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText) {
          let comment = document.createElement('div');
          comment.className = 'comment';
          let commentParagraph = document.createElement('p');
          commentParagraph.textContent = commentText;
          let deleteImg = document.createElement('img');
          deleteImg.src = 'images/delete.png';
          deleteImg.alt = 'Delete';
          
          comment.appendChild(commentParagraph);
          comment.appendChild(deleteImg);
          commentContainer.appendChild(comment);

          commentInput.value = '';

          saveComments();
      }
  });

  commentContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
          e.target.parentElement.remove();
          saveComments();
      }
  });

  
});

