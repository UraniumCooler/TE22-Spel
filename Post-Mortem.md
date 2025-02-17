# Post-Mortem
Daniel Carlsson, TE22, 2025-02-17

## Inledning
Idén var att skapa ett spel med jultema. Vi tänkte först att vi skulle göra det lite till ett pusselspel på hur du, som Nisse, skulle fly tomtens verkstad. Det var också mycket "trial and error" från spelarens sida att försöka fly, på en av dom 5 sätten. Vi planerade ganska mycket för vi hade förstått att det var ett grupparbete som vi skulle jobba på tillsammans. Det visades att det var individuellt, men det efter att vi hade planerat och Esteterna börjat rita. Från detta så har jag lärt mig mer om det (100% jätte fantastiska) kodspråket JavaScript och att alltid fråga om bättre förtydligande när det kommer till instruktioner.

## Bakgrund
Under processen att skapa spelet stötte jag på ett antal problem som påverkade spelets funktionalitet och spelupplevelse. Trots att jag hade en tydlig plan och en uppdelning av händelser, visade det sig att jag inte hade kommit så långt som jag hade hoppats. Att spelet innehöll ett antal buggar som påverkade hur spelare interagerade med spelets element var en av de största problemen.

Tomtens pathfinding var mycket grundläggande, vilket gjorde att han inte alltid kunde följa Nisse på ett effektivt sätt. Dessutom var tomten saknade kollisioner, vilket gjorde att han kunde gå genom saker utan att bli påverkad av dem. Tomten teleporterade bara tillbaka Nisse till startpositionen i stället för att skapa en utmanande fiende. Detta minskade spänningen och hur roligt spelet var.

En annan sak som irriterade var att borden fungerade som lim, vilket gjorde att Nisse fastnade och inte kunde röra sig. Jag förstår nu hur viktigt det är att noggrant testa och justera spelmekaniken för att göra spelet mer flytande och engagerande.

## Positiva Erfarenheter
Jag tycker grunden, i starten när jag och Oliver satt och bollade hur vi skulle inte följa genomgången utan få spelaren att röra sig fritt från ett top-down perspektiv. Jag tyckte att det var den delen som gav mest kunskap och var roligast.


## Negativa Erfarenheter
Grafik och kollisioner var nästan hopplöst. Jag satt i flera lektioner i rad och gjorde långsamt framsteg men var irriterad. Jag är fortfarande inte nöjd men tänkte inte plåga mig själv längre än vad jag behöver.

## Sammanfattning
Spelet kan utveklas 100%, men jag kommer inte vara den som gör det. Den skulle behöva ett nytt kollisions system. Antagligen lite kod ränsning och att grafiken skulle fungera innan man äns börjar tänka på att fortsätta med orignal planen. Spelet är inte redo för saker som man behöver intergera med eller andra dynamiska ting. Var det ett roligt projekt? Helt okej. Jag vet inte om jag kan säga starkt åt något håll, varken positivt eller negativt.