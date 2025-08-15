function toggleMenu(){
  document.querySelector('.site-header').classList.toggle('nav-open');
}

function sendQuote(e){
  e.preventDefault();
  const form = e.target.closest('form');
  const data = new FormData(form);
  const params = new URLSearchParams(data).toString();
  const to = 'tinaishem@nickelrodsys.com'; // TODO: change if needed
  const subject = encodeURIComponent('Website quote request');
  const body = encodeURIComponent(
    Array.from(data.entries()).map(([k,v])=>`${k}: ${v}`).join('\n')
  );
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
