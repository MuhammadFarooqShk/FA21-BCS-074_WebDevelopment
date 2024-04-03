const logo = document.getElementById('m2111');
  const navstyle = document.getElementById('navstyle');

  logo.addEventListener('mouseover', function(event) {
    const target = event.target;
    if (target.tagName === 'IMG') {
        navstyle.append = target.alt;
        navstyle.style.display = 'block';
    }
  });

  logo.addEventListener('mouseout', function() {
    navstyle.append= '';
    navstyle.style.display = 'none';
  });