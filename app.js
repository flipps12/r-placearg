const banderaPrincipal2 = document.querySelector('.banderaPrincipal2');
const banderaPrincipal = document.querySelector('.banderaPrincipal1');

banderaPrincipal2.addEventListener('mouseover', () => {
  banderaPrincipal.classList.add('blur-effect');
});

banderaPrincipal2.addEventListener('mouseout', () => {
  banderaPrincipal.classList.remove('blur-effect');
});
