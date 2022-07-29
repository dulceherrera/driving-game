var $Img = document.querySelector('.right');

$Img.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'ArrowLeft') {
    $Img.className = 'left';
  } else if (event.key === 'ArrowDown') {
    $Img.className = 'down';
  } else if (event.key === 'ArrowRight') {
    $Img.className = 'right';
  } else if (event.key === 'ArrowUp') {
    $Img.className = 'up';
  }
}
