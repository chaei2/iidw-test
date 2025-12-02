// const customCursor = document.querySelector('#custom-cursor');
// // 마우스 커서 따라다니게 하기

// const hoverContainer = document.querySelector('.hover-container');
// // 호버 컨테이너에 마우스 올리면 커서 커지게 하기

// window.addEventListener('mousemove', (e) => {
//   console.log(e.clientX, e.clientY);
//   customCursor.style.top = `${e.clientY}px`;
//   customCursor.style.left = `${e.clientX}px`;

//   // 호버 컨테이너에 영역 안에 들어왔는지
//   // matches() 매치가 되면 true, 아니면 false
//   if (hoverContainer.matches(':hover')) {
//     customCursor.classList.add('zoom');
//   } else {
//     customCursor.classList.remove('zoom');
//   }
// });

// // 마우스 커서 영상 참고 자료 https://youtu.be/wMfer1zavbA?si=hzbBrlHKUESW1hA3
