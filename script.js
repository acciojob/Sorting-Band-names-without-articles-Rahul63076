//your code here
let bandNames = ['The Beatles', 'Metallica', 'Red Hot Chili Peppers', 'Led Zeppelin', 'Pink Floyd'];

function sortBandNames(names) {
  // Remove articles from the band names
  const articles = ['a', 'an', 'the'];
  const regex = new RegExp(`^(${articles.join('|')})\\s`, 'i');
  const cleanedNames = names.map(name => name.replace(regex, ''));

  // Sort the cleaned band names in lexicographic order
  const sortedNames = cleanedNames.sort((a, b) => a.localeCompare(b));

  // Display the sorted band names inside the 'band' ul tag
  const ulElement = document.getElementById('band');
  sortedNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

sortBandNames(bandNames);

