let isOpen = false;

document.querySelectorAll('.allPaths').forEach((e) => {
  e.setAttribute('class', `allPaths ${e.id}`);
  e.addEventListener('mouseover', function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById('name').style.top = y - 150 + 'px';
      document.getElementById('name').style.left = x - 200 + 'px';
    };
    const classes = e.className.baseVal.replace(/ /g, '.');
    document.querySelectorAll(`.${classes}`).forEach((country) => {
      //   country.style.fill = 'pink';
    });
    document.getElementById('name').style.opacity = 1;

    // if (e.id === 'Wonosari') {
    //   document.getElementById('namep').innerText = e.id;
    // }
  });
  e.addEventListener('mouseleave', function () {
    // const classes = e.className.baseVal.replace(/ /g, '.');
    // document.querySelectorAll(`.${classes}`).forEach((country) => {
    //   country.style.fill = '#ececec';
    // });
    document.getElementById('name').style.opacity = 0;
  });

  e.addEventListener('click', () => {
    if (isOpen) {
      document.getElementById('detail-data').style.opacity = 0;
      document.getElementById('detail-data').style.display = 'none';
      isOpen = !isOpen;
    } else {
      document.getElementById('detail-data').style.opacity = 1;
      document.getElementById('detail-data').style.display = 'block';
      isOpen = !isOpen;
    }
  });
});

document.getElementById('detail-data').style.opacity = 0;
document.getElementById('detail-data').style.display = 'none';
