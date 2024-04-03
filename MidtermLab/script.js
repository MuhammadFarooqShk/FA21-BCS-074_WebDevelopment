const logo = document.getElementById('m2111');
  const navstyle = document.getElementById('navstyle');

  logo.addEventListener('mouseover', function(event) {
    const target = event.target;
    if (target.tagName === 'IMG') {
        navstyle.innerHTML = target.alt;
    }
  });

  logo.addEventListener('mouseout', function() {
    navstyle.append= '';
    navstyle.style.display = 'none';
  });