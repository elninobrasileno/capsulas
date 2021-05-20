document.addEventListener('DOMContentLoaded', function () {
  const siteTitle = 'NOTÍCIA';
  const articleTitle =
    'Surpreendente: pacientes se livram do alcoolismo após usarem fórmula contida em cápsulas';
  const productUrl = 'https://app.monetizze.com.br/r/BZH1243248';

  document.title = articleTitle;

  const allTitles = Array.from(document.querySelectorAll('.site-title'));
  allTitles.forEach(function (item) {
    item.innerText = siteTitle;
  });

  const allLinks = Array.from(document.querySelectorAll('a'));
  allLinks.forEach(function (link) {
    link.href = productUrl;
  });
});
