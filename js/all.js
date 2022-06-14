
document.querySelector('.light').addEventListener('mousemove', ({ offsetX, offsetY, target }) => {
  const x = offsetX / target.clientWidth;
  const y = offsetY / target.clientHeight;
  target.style.setProperty('--x', `${x * 100}%`);
  target.style.setProperty('--y', `${y * 100}%`);
});
