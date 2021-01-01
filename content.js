setInterval(frame, 1000);
function frame() {
  if (window.filterGCLobby) {
    Array.from(document.getElementsByClassName('lobby-btn-big')).forEach((element) => {
      if (element.innerText !== 'ENTRAR') {
        var closest = element.closest('.sala-card-wrapper');
        if (closest && closest instanceof HTMLElement) {
          closest.style.display = 'none';
        }
      }
    });
  }
}
