# React + Vite

Inlämnings uppgift till Frontend 2

React + Vite framework erbjuder både möjligheten för att dela upp koden i flera moduler och möjligheten för att paketera ihop i dessa moduler med JavaScript-kod som returnerar html i form av Single Page Application (SPA).

Checklistan för Godkänd:
1.	lägg till Javascript (REACT + VITE) så att när man klickar blir stolen Selected eller ledig (N/A) beroende på
2.	Occupied är redan bokade av andra så dessa kan man inte kunna klicka på 
3.	texten nedan (2 seats  for a price of ... ) ska naturligtvis uppdateras 
4.	koden skall vara välstrukturerad och i mesta mån fixad med "EsLint" 
5.	priset osv tar man nu från select options - men GÖR OM SÅ ATT DU HAR... 
6.	Javascript klass Movie med namn och pris. 
7.	Alla movies ska hämtas från JSONServer (i.e REST API) tex på hur movies kan se ut https://gist.githubusercontent.com/aspcodenet/32a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json
8.	lämna in LÄNK till privat github repository (läraren skall vara inbjuden som collaborator) med din källkod 
9.	Skapa en readme.md i ditt Github repository där du beskriver ditt projekt
10.	Koden ska vara uppdelad i filer (moduler)

Checklistan för Väl Godkänd:
1.	alla G krav samt [OK]
2.	använd React eller Angular eller liknande (NextJS, Vue) [OK]
3.	lägg till en knapp "Boka" och då visas ett formulär där man får mata in namn och telefonnummer [OK]
4.	Formuläret ska med Javascript validera korrekt och sen posta  till en JSONServer (i.e REST API)  där alla bokningar ska lagras  [OK-ish]
5.	Bygg en admin-del där man kan Administerera (CRUDDA) Movies. Du behöver inte ha inloggning till den sidan dock [OK]
6.	I readme.md beskriv och motivera dessutom ingående de val du gjort gällande ramverk och bibliotek/struktur för ditt projekt  [OK]
7.	Produktionssätt med Github Actions alt med npm install gh-pages --save-dev [OK]
8.	och npm run deploy på Github Pages [OK]

OBS.:
Svårigheter med installationen av EsLing (airbnb) som fungerar med Vite (deprecated).
Svårigheter med tillämpningen av Formik i detta projekt.
Svårigheter med uppdateringar av variabler vid beräkningar.

Databasen hämtas från:
https://github.com/LuizOliveir4/movieseatbookingapi/blob/main/db.json

och körs localt med kommandot:
npx json-server db.json

Projektet är deployad:
https://luizoliveir4.github.io/movieseatbooking