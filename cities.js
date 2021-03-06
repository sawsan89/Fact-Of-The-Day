
// onchange action function to display picture,paragraph and name of city
function setCity() { 
    var img = document.getElementById("city-image"); 
    var prg = document.getElementById("city-info");
    var name = document.getElementById("city-name");
    var x = document.getElementById ("city").selectedIndex; // get the selected city index
    var selCity = document.getElementsByTagName("option")[x].value; // save the selected city value
    each(cities,function(element){ // each to loop through the array
    	if (element.name === selCity) { // checking name property is equal to selected city
            	img.src = element.url; // set image source to url property value
            	prg.innerHTML = element.pragraph; // to display paragraph property value
            	name.innerHTML = element.name; // to display selcted city name
		}
	});
};

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

//cities info array (array of objects)
var cities = [
  {
    name:"Paris",
    url:"Paris.jpg",
    pragraph:"This one's a given, right? Paris is a place where romance and history play side by side. Cafés line cobblestone streets, beautiful people stroll along the Seine at all hours, and every neighborhood seems to have its own iconic landmark, be it the Notre Dame, Sacré-Coeur, or Eiffel Tower"
  },
  {
    name:"Doha",
    url:"Doha.jpg",
    pragraph:"If you think Dubai needs a low-dose chill pill prescription, then you might find Doha to be more your cup of tea. Founded on a turquoise bay in the 1820s, this former fishing village is lined with Emerald City-esque skyscrapers, the colorful Souq Waqif, and the I. M. Pei–designed Museum of Islamic Art. (Get ready to see more of the city as Qatar gears up to host the FIFA World Cup in 2022.)"
  },
  {
    name:"venice",
    url:"Cities/venice.jpg",
    pragraph:"There's nowhere on Earth quite like Venice: Its canals, labyrinth of car-free cobblestone streets, and hidden passageways are perfect for wandering. Hail a water taxi or gondola to wind through the city and, if you have time, get out of the historic center and head for the outer islands."
  },
  {
    name:"Beirut",
    url:"Cities/Beirut.jpg",
    pragraph:"Beirut's seaside glamour rivals that of any European riviera, with posh beach clubs and rooftop bars, palm tree-lined promenades, and hidden courtyards filled with bougainvillea. But here, glossy high-rises are juxtaposed against centuries-old mosques and souks, giving the city a timeless appeal you won't find anywhere else."
  }, 
  {
    name:"Budapest",
    url:"Cities/Budapest.jpg",
    pragraph:"With some of the best Art Nouveau architecture in Europe, Budapest has no bad angles. Case in point: The city's famous thermal baths, or the gilded, slightly ostentatious Café Gerbeaud. For the very best angle, though, walk the Széchenyi Chain Bridge at night for unforgettable views of the Hungarian Parliament shining over the Danube River"
  }, 
  {
    name:"istanbul",
    url:"Cities/istanbul.jpg",
    pragraph:"Istanbul continues to draw us in, whether it's through the frenetic opulence of the Grand Bazaar or the old-meets-new aesthetic of Karaköy. But the architecture still shines brightest here, with the Blue Mosque and Hagia Sophia featuring prominent displays of both Byzantine and Ottoman styles: Think massive domes, colored mosaics, minarets, and Islamic calligraphy"
  }, 
  {
    name:"Jerusalem",
    url:"Cities/Jerusalem.jpg",
    pragraph:"Long a place of religious pilgrimage, Jerusalem is now drawing a different sort of pilgrim: the global traveler. The city's monuments of faith—like the Western Wall or the Dome of the Rock—are still spectacular, of course; but the influx of design hotels and buzzy restaurants in open-air markets are reinventing Jerusalem from the ground up. It's amazing how a city that dates to the fourth millennium B.C. still manages to surprise us."
  }, 
  {
    name:"Kyoto",
    url:"Cities/Kyoto.jpg",
    pragraph:"Visiting Japan's imperial capital is like taking a step back in time. Some 1,600 Buddhist temples and 400 Shinto shrines are ready to entrance visitors, and you might even spot a geisha while strolling the city's leafy, craft shop-lined streets. For those desperately seeking cherry blossoms, fear not: Kyoto Botanical Garden and Philosopher's Path are some of Japan's most popular spots for hanami"
  }, 
  {
    name:"San-Miguel",
    url:"Cities/San-Miguel.jpg",
    pragraph:"Many consider colonial-era San Miguel de Allende one of Mexico’s prettiest cities, and it’s no wonder. Here, you’ll find leafy courtyards, narrow cobblestone streets, and a historic town center from which the Gothic Parroquia de San Miguel Arcángel’s pink towers rise high above the main plaza."
  },
  {
    name:"Athens",
    url:"Cities/Athens.jpg",
    pragraph:"One of the world’s oldest cities is brimming with new life these days, but the appeal of Athens' beauty is its healthy mix of ancient and modern. Get your dose of history at the Acropolis, which provides both close-up views of the Parthenon and panoramic views of the city from its hilltop. Get similarly sweeping views without the heavy footwork at Lykavittos Hill, reachable via cable car. After all that antiquity, devote an afternoon to a site that's only a couple years old: The Renzo Piano-designed, $623 million Stavros Niarchos Foundation Cultural Center, which houses the National Opera and the National Library of Greece."
  }];