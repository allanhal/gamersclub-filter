setInterval(() => {
  console.log('Frame', window.filterActive);
  frame();
}, 1000);

function frame() {
  console.log('Frame', window.filterActive);
  // if (!window.filterActive) return;
  Array.from(document.getElementsByClassName('olx-text olx-text--body-large olx-text--block olx-text--semibold olx-adcard__title')).forEach(
    (element) => {
      console.log('Element found:', window.textToFilter);

      // if (textToFilter.some((string) => element.innerText.includes(string))) {
      //   const closest = element.closest('section');
      //   if (closest) {
      //     closest.remove();
      //   }
      // }

      if (
        [
          '9 8 7 4 8 3 1 0 8',
          'Diego 9989f',
          '9 87 48 31 08',
          'diego 989F',
          '9 87 48 31-08',
          'DIEGO 9989F',
          'DIEGO9989F',
          'Carvalho9989F',
        ].some((string) => element.innerText.includes(string))
      ) {
        const closest = element.closest('section');
        if (closest) {
          closest.remove();
        }
      }
    }
  );
}
