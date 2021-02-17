const geniuses = [
    { first: 'Albert', last: 'Einstein', year: 1879, died: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, died: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, died: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, died: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, died: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, died: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, died: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, died: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, died: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, died: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, died: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, died: 1909 }
  ];

  const persons = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
 const table = console.table; // Variating my console fxn here

  // Array.prototype.filter()
  // 1. Filter the list of geniuses for those who were born in the 1500's
  const fifteens = geniuses.filter(genius=>
    (genius.year >= 1500 &&  genius.year <= 1599 ));
  table(fifteens);

  // Array.prototype.map()
  // 2. Give us an array of the geniuses first and last names
 const names = geniuses.map(genius=>`${genius.first} ${genius.last}`)
 table(names);

  // Array.prototype.sort()
  // 3. Sort the geniuses by birthdate, oldest to youngest
  const sortedBirthdays = geniuses.sort((a,b)=> a.year>b.year?1:-1);
  table(sortedBirthdays);

  // Array.prototype.reduce()
  // 4. How many years did all the geniuses live all together?
   const reduceGeniuses = geniuses.reduce((total,curr)=>
   {return total+(curr.died-curr.year)},0)
table(reduceGeniuses);

  // 5. Sort the inventors by years lived
  const yearSort= geniuses.sort((a,b)=>{
      const prev= a.died-a.year;
      const curr= b.died-b.year;
      return prev>curr? 1: -1
    });
    table(yearSort);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/* const category = document.querySelector('.mw-category');
  const links = Array.from(category.querySelectorAll('a'));
  //const links = [...category.querySelectorAll('a')]; Also works
  const de = links.map(link => link.textContent)
  .filter(streetname => streetname.includes('de'))
  table(de);  */

  // 7. sort Exercise
  // Sort the persons alphabetically by last name
  const alphaSort = persons.sort((a,b)=>{
    const [aLast, aFirst] = a.split(', '); // also worked without splitting
    const [bLast, bFirst] = b.split(', '); // also worked without splitting
    return a>b?1:-1}
  );
  table(alphaSort);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  const mobileMeans = data.reduce((obj,item)=>{
    if(!obj[item]){
    obj[item]=0;
    }
    obj[item]++;
    return obj;
  }, {});
 console.log(mobileMeans);