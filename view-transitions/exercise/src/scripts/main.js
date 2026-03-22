document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a[href]');
  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
  const href = anchor.getAttribute('href');

  // Alleen interne pagina-navigatie, geen externe links of fragmenten.
  if (!href || href.startsWith('http') || href.startsWith('#')) return;

  event.preventDefault();

  if (document.startViewTransition) {
    document.startViewTransition(() => {
      window.location.href = href;
    });
  } else {
    window.location.href = href;
  }
});

