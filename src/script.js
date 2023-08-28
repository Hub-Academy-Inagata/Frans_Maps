let isOpen = false;

if (!isOpen) {
  document.getElementById('detail-data').style.opacity = 0;
  document.getElementById('detail-data').style.display = 'none';
} else {
  document.getElementById('detail-data').style.opacity = 1;
  document.getElementById('detail-data').style.display = 'flex';
}

document.querySelectorAll('.allPaths').forEach((e) => {
  e.setAttribute('class', `allPaths ${e.id}`);
  e.addEventListener('mouseover', function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById('name').style.top = y - 180 + 'px';
      document.getElementById('name').style.left = x - 200 + 'px';
    };
    const classes = e.className.baseVal.replace(/ /g, '.');
    document.querySelectorAll(`.${classes}`).forEach((country) => {
      //   country.style.fill = 'pink';
    });
    document.getElementById('name').style.opacity = 1;
    document.getElementById('namep').innerText = e.id;
  });
  e.addEventListener('mouseleave', function () {
    // const classes = e.className.baseVal.replace(/ /g, '.');
    // document.querySelectorAll(`.${classes}`).forEach((country) => {
    //   country.style.fill = '#ececec';
    // });
    document.getElementById('name').style.opacity = 0;
  });

  e.addEventListener('click', () => {
    document.getElementById('kecamatan').innerText = e.id;
    isOpen = true;
    document.getElementById('detail-data').style.opacity = 1;
    document.getElementById('detail-data').style.display = 'flex';
    document.getElementById('footer').style.position = 'relative';
    document.getElementById('footer').style.bottom = 0;
    document.getElementById('footer').style.left = 0;
    document.getElementById('footer').style.right = 0;
  });
});

document
  .getElementById('arrow-right')
  .addEventListener('click', () => {
    document.getElementById('detail-data').style.opacity = 0;
    document.getElementById('detail-data').style.display = 'none';
    document.getElementById('footer').style.position = 'absolute';
    document.getElementById('footer').style.bottom = 0;
    document.getElementById('footer').style.left = 0;
    document.getElementById('footer').style.right = 0;
  });

document
  .getElementById('arrow-bottom')
  .addEventListener('click', () => {
    document.getElementById('detail-data').style.opacity = 0;
    document.getElementById('detail-data').style.display = 'none';
    document.getElementById('footer').style.position = 'absolute';
    document.getElementById('footer').style.bottom = 0;
    document.getElementById('footer').style.left = 0;
    document.getElementById('footer').style.right = 0;
  });
