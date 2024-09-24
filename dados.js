let dados = [
    {
        titulo: "Bulbasaur",
        pkmnNumber: '#0001',
        pkmnType: 'Grass Poison',
        descricao: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
        link: "https://www.pokemon.com/br/pokedex/bulbasaur",
        tags: "bulba 1 0001 grass poison"
    },
    {
        titulo: "Ivysaur",
        pkmnNumber: '#0002',
        pkmnType: 'Grass Poison',
        descricao: "The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.",
        link: "https://www.pokemon.com/br/pokedex/ivysaur",
        tags: "ivy 2 0002 grass poison"
    },
    {
        titulo: "Venusaur",
        pkmnNumber: '#0003',
        pkmnType: 'Grass Poison',
        descricao: "While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.",
        link: "https://www.pokemon.com/br/pokedex/venusaur",
        tags: "venu 3 0003 grass poison"
    },
    {
        titulo: "Charmander",
        pkmnNumber: '#0004',
        pkmnType: 'Fire',
        descricao: "It has a lit tail from the time it is born. People say that it will die if the flame goes out.",
        link: "https://www.pokemon.com/br/pokedex/charmander",
        tags: "char 4 0004 fire"
    },
    {
        titulo: "Charmeleon",
        pkmnNumber: '#0005',
        pkmnType: 'Fire',
        descricao: "When the flame on its tail burns strong, Charmeleon shows off its toughness with a fearless expression.",
        link: "https://www.pokemon.com/br/pokedex/charmeleon",
        tags: "char 5 0005 fire"
    },
    {
        titulo: "Charizard",
        pkmnNumber: '#0006',
        pkmnType: 'Fire Flying',
        descricao: "Spits fire that can melt anything. It has a savage heart and cares for no one.",
        link: "https://www.pokemon.com/br/pokedex/charizard",
        tags: "char 6 0006 fire flying"
    },
    {
        titulo: "Squirtle",
        pkmnNumber: '#0007',
        pkmnType: 'Water',
        descricao: "Its shell is hard as iron. It withdraws into its shell to protect itself from attacks.",
        link: "https://www.pokemon.com/br/pokedex/squirtle",
        tags: "squirtle 7 0007 water"
    },
    {
        titulo: "Wartortle",
        pkmnNumber: '#0008',
        pkmnType: 'Water',
        descricao: "Its shell is extremely hard. It uses its tail to withdraw into its shell.",
        link: "https://www.pokemon.com/br/pokedex/wartortle",
        tags: "wartortle 8 0008 water"
    },
    {
        titulo: "Blastoise",
        pkmnNumber: '#0009',
        pkmnType: 'Water',
        descricao: "Its powerful cannons can shoot water at incredible speeds. It is said to have a calm and gentle nature.",
        link: "https://www.pokemon.com/br/pokedex/blastoise",
        tags: "blastoise 9 0009 water"
    },
    {
        titulo: "Caterpie",
        pkmnNumber: '#0010',
        pkmnType: 'Bug',
        descricao: "It always leaves a trail of sticky silk. It is often seen in forests, munching on leaves.",
        link: "https://www.pokemon.com/br/pokedex/caterpie",
        tags: "caterpie 10 0010 bug"
    },
    {
        titulo: "Metapod",
        pkmnNumber: '#0011',
        pkmnType: 'Bug',
        descricao: "It is completely wrapped in a hard shell. It is said to be immobile during this stage, but it is actually slowly growing inside.",
        link: "https://www.pokemon.com/br/pokedex/metapod",
        tags: "metapod 11 0011 bug"
    },
    {
        titulo: "Butterfree",
        pkmnNumber: '#0012',
        pkmnType: 'Bug Flying',
        descricao: "It flutters its wings to collect pollen from flowers. Its colorful wings are a beautiful sight.",
        link: "https://www.pokemon.com/br/pokedex/butterfree",
        tags: "butterfree 12 0012 bug flying"
    },
    {
        titulo: "Weedle",
        pkmnNumber: '#0013',
        pkmnType: 'Bug Poison',
        descricao: "It releases a poisonous sting from its twin needles. It lives in forests, where it feeds on leaves.",
        link: "https://www.pokemon.com/br/pokedex/weedle",
        tags: "weedle 13 0013 bug poison"
    },
    {
        titulo: "Kakuna",
        pkmnNumber: '#0014',
        pkmnType: 'Bug Poison',
        descricao: "It is completely wrapped in a hard shell. It is said to be immobile during this stage, but it is actually slowly growing inside.",
        link: "https://www.pokemon.com/br/pokedex/kakuna",
        tags: "kakuna 14 0014 bug poison"
    },
    {
        titulo: "Beedrill",
        pkmnNumber: '#0015',
        pkmnType: 'Bug Poison',
        descricao: "Its twin needles are poisonous. It is a dangerous Pokémon that can fly at high speeds.",
        link: "https://www.pokemon.com/br/pokedex/beedrill",
        tags: "beedrill 15 0015 bug poison"
    },
    {
        titulo: "Pidgey",
        pkmnNumber: '#0016',
        pkmnType: 'Normal Flying',
        descricao: "It is a very common Pokémon that can be found in forests and grasslands. It is often seen flying in flocks.",
        link: "https://www.pokemon.com/br/pokedex/pidgey",
        tags: "pidgey 16 0016 normal flying"
    },
    {
        titulo: "Pidgeotto",
        pkmnNumber: '#0017',
        pkmnType: 'Normal Flying',
        descricao: "Its wings are incredibly powerful, allowing it to fly at high speeds. It is said to have a sharp eye.",
        link: "https://www.pokemon.com/br/pokedex/pidgeotto",
        tags: "pidgeotto 17 0017 normal flying"
    },
    {
        titulo: "Pidgeot",
        pkmnNumber: '#0018',
        pkmnType: 'Normal Flying',
        descricao: "Its wings are so powerful that it can fly at speeds of over 100 miles per hour. It is said to have a sharp eye.",
        link: "https://www.pokemon.com/br/pokedex/pidgeot",
        tags: "pidgeot 18 0018 normal flying"
    },
    {
        titulo: "Rattata",
        pkmnNumber: '#0019',
        pkmnType: 'Normal',
        descricao: "It is a common Pokémon that can be found in cities and forests. It is known to be a very fast runner.",
        link: "https://www.pokemon.com/br/pokedex/rattata",
        tags: "rattata 19 0019 normal"
    },
    {
        titulo: "Raticate",
        pkmnNumber: '#0020',
        pkmnType: 'Normal',
        descricao: "It is a large and powerful Pokémon that is known to be very aggressive. It is often seen in cities and forests.",
        link: "https://www.pokemon.com/br/pokedex/raticate",
        tags: "raticate 20 0020 normal"
    },
    {
        titulo: "Spearow",
        pkmnNumber: '#0021',
        pkmnType: 'Normal Flying',
        descricao: "It is a small and agile Pokémon that is often seen flying in flocks. It is known to be a very fast flier.",
        link: "https://www.pokemon.com/br/pokedex/spearow",
        tags: "spearow 21 0021 normal flying"
    },
    {
        titulo: "Fearow",
        pkmnNumber: '#0022',
        pkmnType: 'Normal Flying',
        descricao: "It is a large and powerful Pokémon that is known to be a fearsome hunter. It is often seen flying in flocks.",
        link: "https://www.pokemon.com/br/pokedex/fearow",
        tags: "fearow 22 0022 normal flying"
    },
    {
        titulo: "Ekans",
        pkmnNumber: '#0023',
        pkmnType: 'Poison',
        descricao: "It is a long and slender Pokémon that is known to be very poisonous. It is often seen slithering through the grass.",
        link: "https://www.pokemon.com/br/pokedex/ekans",
        tags: "ekans 23 0023 poison"
    },
    {
        titulo: "Arbok",
        pkmnNumber: '#0024',
        pkmnType: 'Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen slithering through the forest.",
        link: "https://www.pokemon.com/br/pokedex/arbok",
        tags: "arbok 24 0024 poison"
    },
    {
        titulo: "Pikachu",
        pkmnNumber: '#0025',
        pkmnType: 'Electric',
        descricao: "It is a small and agile Pokémon that is known to be very intelligent. It is often seen carrying a small electric rod.",
        link: "https://www.pokemon.com/br/pokedex/pikachu",
        tags: "pikachu 25 0025 electric"
    },
    {
        titulo: "Raichu",
        pkmnNumber: '#0026',
        pkmnType: 'Electric',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen carrying a large electric rod.",
        link: "https://www.pokemon.com/br/pokedex/raichu",
        tags: "raichu 26 0026 electric"
    },
    {
        titulo: "Sandshrew",
        pkmnNumber: '#0027',
        pkmnType: 'Ground',
        descricao: "It is a small and agile Pokémon that is known to be very tough. It is often seen burrowing through the sand.",
        link: "https://www.pokemon.com/br/pokedex/sandshrew",
        tags: "sandshrew 27 0027 ground"
    },
    {
        titulo: "Sandslash",
        pkmnNumber: '#0028',
        pkmnType: 'Ground',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen burrowing through the sand.",
        link: "https://www.pokemon.com/br/pokedex/sandslash",
        tags: "sandslash 28 0028 ground"
    },
    {
        titulo: "Nidoran♀",
        pkmnNumber: '#0029',
        pkmnType: 'Poison',
        descricao: "It is a small and agile Pokémon that is known to be very poisonous. It is often seen hiding in the grass.",
        link: "https://www.pokemon.com/br/pokedex/nidoran-female",
        tags: "nidoran-female 29 0029 poison"
    },
    {
        titulo: "Nidorina",
        pkmnNumber: '#0030',
        pkmnType: 'Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen hiding in the forest.",
        link: "https://www.pokemon.com/br/pokedex/nidorina",
        tags: "nidorina 30 0030 poison"
    },
    {
        titulo: "Nidoqueen",
        pkmnNumber: '#0031',
        pkmnType: 'Poison Ground',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen hiding in the mountains.",
        link: "https://www.pokemon.com/br/pokedex/nidoqueen",
        tags: "nidoqueen 31 0031 poison ground"
    },
    {
        titulo: "Nidoran♂",
        pkmnNumber: '#0032',
        pkmnType: 'Poison',
        descricao: "It is a small and agile Pokémon that is known to be very poisonous. It is often seen hiding in the grass.",
        link: "https://www.pokemon.com/br/pokedex/nidoran-male",
        tags: "nidoran-male 32 0032 poison"
    },
    {
        titulo: "Nidorino",
        pkmnNumber: '#0033',
        pkmnType: 'Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen hiding in the forest.",
        link: "https://www.pokemon.com/br/pokedex/nidorino",
        tags: "nidorino 33 0033 poison"
    },
    {
        titulo: "Nidoking",
        pkmnNumber: '#0034',
        pkmnType: 'Poison Ground',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen hiding in the mountains.",
        link: "https://www.pokemon.com/br/pokedex/nidoking",
        tags: "nidoking 34 0034 poison ground"
    },
    {
        titulo: "Clefairy",
        pkmnNumber: '#0035',
        pkmnType: 'Normal Fairy',
        descricao: "It is a small and agile Pokémon that is known to be very friendly. It is often seen playing in the moonlight.",
        link: "https://www.pokemon.com/br/pokedex/clefairy",
        tags: "clefairy 35 0035 normal fairy"
    },
    {
        titulo: "Clefable",
        pkmnNumber: '#0036',
        pkmnType: 'Normal Fairy',
        descricao: "It is a large and powerful Pokémon that is known to be very gentle. It is often seen playing in the moonlight.",
        link: "https://www.pokemon.com/br/pokedex/clefable",
        tags: "clefable 36 0036 normal fairy"
    },
    {
        titulo: "Vulpix",
        pkmnNumber: '#0037',
        pkmnType: 'Fire',
        descricao: "It is a small and agile Pokémon that is known to be very playful. It is often seen running through the snow.",
        link: "https://www.pokemon.com/br/pokedex/vulpix",
        tags: "vulpix 37 0037 fire"
    },
    {
        titulo: "Ninetales",
        pkmnNumber: '#0038',
        pkmnType: 'Fire',
        descricao: "It is a large and powerful Pokémon that is known to be very wise. It is said to have lived for a thousand years.",
        link: "https://www.pokemon.com/br/pokedex/ninetales",
        tags: "ninetales 38 0038 fire"
    },
    {
        titulo: "Jigglypuff",
        pkmnNumber: '#0039',
        pkmnType: 'Normal Fairy',
        descricao: "It is a small and agile Pokémon that is known to be very playful. It is often seen singing lullabies to people.",
        link: "https://www.pokemon.com/br/pokedex/jigglypuff",
        tags: "jigglypuff 39 0039 normal fairy"
    },
    {
        titulo: "Wigglytuff",
        pkmnNumber: '#0040',
        pkmnType: 'Normal Fairy',
        descricao: "It is a large and powerful Pokémon that is known to be very gentle. It is often seen singing lullabies to people.",
        link: "https://www.pokemon.com/br/pokedex/wigglytuff",
        tags: "wigglytuff 40 0040 normal fairy"
    },
    {
        titulo: "Zubat",
        pkmnNumber: '#0041',
        pkmnType: 'Poison Flying',
        descricao: "It is a small and agile Pokémon that is known to be very poisonous. It is often seen flying in dark caves.",
        link: "https://www.pokemon.com/br/pokedex/zubat",
        tags: "zubat 41 0041 poison flying"
    },
    {
        titulo: "Golbat",
        pkmnNumber: '#0042',
        pkmnType: 'Poison Flying',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen flying in dark caves.",
        link: "https://www.pokemon.com/br/pokedex/golbat",
        tags: "golbat 42 0042 poison flying"
    },
    {
        titulo: "Oddish",
        pkmnNumber: '#0043',
        pkmnType: 'Grass Poison',
        descricao: "It is a small and agile Pokémon that is known to be very poisonous. It is often seen hiding in the grass.",
        link: "https://www.pokemon.com/br/pokedex/oddish",
        tags: "oddish 43 0043 grass poison"
    },
    {
        titulo: "Gloom",
        pkmnNumber: '#0044',
        pkmnType: 'Grass Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very poisonous. It is often seen hiding in the forest.",
        link: "https://www.pokemon.com/br/pokedex/gloom",
        tags: "gloom 44 0044 grass poison"
    },
    {
        titulo: "Vileplume",
        pkmnNumber: '#0045',
        pkmnType: 'Grass Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very poisonous. It is often seen hiding in the mountains.",
        link: "https://www.pokemon.com/br/pokedex/vileplume",
        tags: "vileplume 45 0045 grass poison"
    },
    {
        titulo: "Paras",
        pkmnNumber: '#0046',
        pkmnType: 'Bug Grass',
        descricao: "It is a small and agile Pokémon that is known to be very parasitic. It is often seen attached to trees.",
        link: "https://www.pokemon.com/br/pokedex/paras",
        tags: "paras 46 0046 bug grass"
    },
    {
        titulo: "Parasect",
        pkmnNumber: '#0047',
        pkmnType: 'Bug Grass',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen attached to trees.",
        link: "https://www.pokemon.com/br/pokedex/parasect",
        tags: "parasect 47 0047 bug grass"
    },
    {
        titulo: "Venonat",
        pkmnNumber: '#0048',
        pkmnType: 'Bug Poison',
        descricao: "It is a small and agile Pokémon that is known to be very poisonous. It is often seen hiding in the grass.",
        link: "https://www.pokemon.com/br/pokedex/venonat",
        tags: "venonat 48 0048 bug poison"
    },
    {
        titulo: "Venomoth",
        pkmnNumber: '#0049',
        pkmnType: 'Bug Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen flying in the night.",
        link: "https://www.pokemon.com/br/pokedex/venomoth",
        tags: "venomoth 49 0049 bug poison"
    },
    {
        titulo: "Diglett",
        pkmnNumber: '#0050',
        pkmnType: 'Ground',
        descricao: "It is a small and agile Pokémon that is known to be very fast. It is often seen burrowing through the ground.",
        link: "https://www.pokemon.com/br/pokedex/diglett",
        tags: "diglett 50 0050 ground"
    },
    {
        titulo: "Dugtrio",
        pkmnNumber: '#0051',
        pkmnType: 'Ground',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen burrowing through the ground.",
        link: "https://www.pokemon.com/br/pokedex/dugtrio",
        tags: "dugtrio 51 0051 ground"
    },
    {
        titulo: "Meowth",
        pkmnNumber: '#0052',
        pkmnType: 'Normal',
        descricao: "It is a small and agile Pokémon that is known to be very clever. It is often seen stealing shiny objects.",
        link: "https://www.pokemon.com/br/pokedex/meowth",
        tags: "meowth 52 0052 normal"
    },
    {
        titulo: "Persian",
        pkmnNumber: '#0053',
        pkmnType: 'Normal',
        descricao: "It is a large and powerful Pokémon that is known to be very proud. It is often seen walking around with its tail held high.",
        link: "https://www.pokemon.com/br/pokedex/persian",
        tags: "persian 53 0053 normal"
    },
    {
        titulo: "Psyduck",
        pkmnNumber: '#0054',
        pkmnType: 'Water',
        descricao: "It is a small and agile Pokémon that is known to be very clumsy. It is often seen holding its head in pain.",
        link: "https://www.pokemon.com/br/pokedex/psyduck",
        tags: "psyduck 54 0054 water"
    },
    {
        titulo: "Golduck",
        pkmnNumber: '#0055',
        pkmnType: 'Water',
        descricao: "It is a large and powerful Pokémon that is known to be very intelligent. It is often seen swimming in lakes and rivers.",
        link: "https://www.pokemon.com/br/pokedex/golduck",
        tags: "golduck 55 0055 water"
    },
    {
        titulo: "Mankey",
        pkmnNumber: '#0056',
        pkmnType: 'Fighting',
        descricao: "It is a small and agile Pokémon that is known to be very aggressive. It is often seen swinging its arms around.",
        link: "https://www.pokemon.com/br/pokedex/mankey",
        tags: "mankey 56 0056 fighting"
    },
    {
        titulo: "Primeape",
        pkmnNumber: '#0057',
        pkmnType: 'Fighting',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen throwing rocks and trees.",
        link: "https://www.pokemon.com/br/pokedex/primeape",
        tags: "primeape 57 0057 fighting"
    },
    {
        titulo: "Growlithe",
        pkmnNumber: '#0058',
        pkmnType: 'Fire',
        descricao: "It is a small and agile Pokémon that is known to be very loyal. It is often seen guarding its trainer's home.",
        link: "https://www.pokemon.com/br/pokedex/growlithe",
        tags: "growlithe 58 0058 fire"
    },
    {
        titulo: "Arcanine",
        pkmnNumber: '#0059',
        pkmnType: 'Fire',
        descricao: "It is a large and powerful Pokémon that is known to be very loyal. It is often seen running through the forest.",
        link: "https://www.pokemon.com/br/pokedex/arcanine",
        tags: "arcanine 59 0059 fire"
    },
    {
        titulo: "Poliwag",
        pkmnNumber: '#0060',
        pkmnType: 'Water',
        descricao: "It is a small and agile Pokémon that is known to be very playful. It is often seen swimming in lakes and rivers.",
        link: "https://www.pokemon.com/br/pokedex/poliwag",
        tags: "poliwag 60 0060 water"
    },
    {
        titulo: "Poliwhirl",
        pkmnNumber: '#0061',
        pkmnType: 'Water',
        descricao: "It is a large and powerful Pokémon that is known to be very intelligent. It is often seen swimming in lakes and rivers.",
        link: "https://www.pokemon.com/br/pokedex/poliwhirl",
        tags: "poliwhirl 61 0061 water"
    },
    {
        titulo: "Poliwrath",
        pkmnNumber: '#0062',
        pkmnType: 'Water Fighting',
        descricao: "It is a large and powerful Pokémon that is known to be very strong. It is often seen swimming in lakes and rivers.",
        link: "https://www.pokemon.com/br/pokedex/poliwrath",
        tags: "poliwrath 62 0062 water fighting"
    },
    {
        titulo: "Abra",
        pkmnNumber: '#0063',
        pkmnType: 'Psychic',
        descricao: "It is a small and agile Pokémon that is known to be very psychic. It is often seen meditating in quiet places.",
        link: "https://www.pokemon.com/br/pokedex/abra",
        tags: "abra 63 0063 psychic"
    },
    {
        titulo: "Kadabra",
        pkmnNumber: '#0064',
        pkmnType: 'Psychic',
        descricao: "It is a large and powerful Pokémon that is known to be very intelligent. It is often seen performing psychic tricks.",
        link: "https://www.pokemon.com/br/pokedex/kadabra",
        tags: "kadabra 64 0064 psychic"
    },
    {
        titulo: "Alakazam",
        pkmnNumber: '#0065',
        pkmnType: 'Psychic',
        descricao: "It is a large and powerful Pokémon that is known to be very wise. It is said to have an IQ of 5000.",
        link: "https://www.pokemon.com/br/pokedex/alakazam",
        tags: "alakazam 65 0065 psychic"
    },
    {
        titulo: "Machop",
        pkmnNumber: '#0066',
        pkmnType: 'Fighting',
        descricao: "It is a small and agile Pokémon that is known to be very strong. It is often seen lifting weights.",
        link: "https://www.pokemon.com/br/pokedex/machop",
        tags: "machop 66 0066 fighting"
    },
    {
        titulo: "Machoke",
        pkmnNumber: '#0067',
        pkmnType: 'Fighting',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen lifting boulders.",
        link: "https://www.pokemon.com/br/pokedex/machoke",
        tags: "machoke 67 0067 fighting"
    },
    {
        titulo: "Machamp",
        pkmnNumber: '#0068',
        pkmnType: 'Fighting',
        descricao: "It is a large and powerful Pokémon that is known to be very strong. It is said to be able to lift a mountain.",
        link: "https://www.pokemon.com/br/pokedex/machamp",
        tags: "machamp 68 0068 fighting"
    },
    {
        titulo: "Bellsprout",
        pkmnNumber: '#0069',
        pkmnType: 'Grass',
        descricao: "It is a small and agile Pokémon that is known to be very poisonous. It is often seen hiding in the grass.",
        link: "https://www.pokemon.com/br/pokedex/bellsprout",
        tags: "bellsprout 69 0069 grass"
    },
    {
        titulo: "Weepinbell",
        pkmnNumber: '#0070',
        pkmnType: 'Grass Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen hiding in the forest.",
        link: "https://www.pokemon.com/br/pokedex/weepinbell",
        tags: "weepinbell 70 0070 grass poison"
    },
    {
        titulo: "Victreebel",
        pkmnNumber: '#0071',
        pkmnType: 'Grass Poison',
        descricao: "It is a large and powerful Pokémon that is known to be very dangerous. It is often seen hiding in the mountains.",
        link: "https://www.pokemon.com/br/pokedex/victreebel",
        tags: "victreebel 71 0071 grass poison"
    },
    {
        titulo: "Tentacool",
        pkmnNumber: '#0072',
        pkmnType: 'Water Poison',
        descricao: "Tentacool's body is mostly water. The more water it drinks, the longer it can swim.",
        link: "https://www.pokemon.com/br/pokedex/tentacool",
        tags: "tentacool 72 0072 water poison"
    },
    {
        titulo: "Tentacruel",
        pkmnNumber: '#0073',
        pkmnType: 'Water Poison',
        descricao: "Tentacruel's 80 tentacles can immobilize enemies and can also deliver a painful sting.",
        link: "https://www.pokemon.com/br/pokedex/tentacruel",
        tags: "tentacruel 73 0073 water poison"
    },
    {
        titulo: "Geodude",
        pkmnNumber: '#0074',
        pkmnType: 'Rock Ground',
        descricao: "Geodude is capable of lifting boulders of over 100 times its own weight.",
        link: "https://www.pokemon.com/br/pokedex/geodude",
        tags: "geodude 74 0074 rock ground"
    },
    {
        titulo: "Graveler",
        pkmnNumber: '#0075',
        pkmnType: 'Rock Ground',
        descricao: "Graveler's many hard, sharp rocks can shatter any foe.",
        link: "https://www.pokemon.com/br/pokedex/graveler",
        tags: "graveler 75 0075 rock ground"
    },
    {
        titulo: "Golem",
        pkmnNumber: '#0076',
        pkmnType: 'Rock Ground',
        descricao: "Golem's body is made of a rock-hard shell. It can cause massive damage with a single blow.",
        link: "https://www.pokemon.com/br/pokedex/golem",
        tags: "golem 76 0076 rock ground"
    },
    {
        titulo: "Ponyta",
        pkmnNumber: '#0077',
        pkmnType: 'Fire',
        descricao: "Ponyta can gallop at high speeds, and it’s known for its ability to leap over obstacles.",
        link: "https://www.pokemon.com/br/pokedex/ponyta",
        tags: "ponyta 77 0077 fire"
    },
    {
        titulo: "Rapidash",
        pkmnNumber: '#0078',
        pkmnType: 'Fire',
        descricao: "Rapidash's fiery mane and tail are said to scorch the air around it.",
        link: "https://www.pokemon.com/br/pokedex/rapidash",
        tags: "rapidash 78 0078 fire"
    },
    {
        titulo: "Slowpoke",
        pkmnNumber: '#0079',
        pkmnType: 'Water Psychic',
        descricao: "Slowpoke is known for being forgetful and often seems to be in a daze.",
        link: "https://www.pokemon.com/br/pokedex/slowpoke",
        tags: "slowpoke 79 0079 water psychic"
    },
    {
        titulo: "Slowbro",
        pkmnNumber: '#0080',
        pkmnType: 'Water Psychic',
        descricao: "Slowbro's tail is home to a Shellder, which grants it additional powers.",
        link: "https://www.pokemon.com/br/pokedex/slowbro",
        tags: "slowbro 80 0080 water psychic"
    },
    {
        titulo: "Magnemite",
        pkmnNumber: '#0081',
        pkmnType: 'Electric Steel',
        descricao: "Magnemite can generate powerful magnetic fields that attract metal objects.",
        link: "https://www.pokemon.com/br/pokedex/magnemite",
        tags: "magnemite 81 0081 electric steel"
    },
    {
        titulo: "Magneton",
        pkmnNumber: '#0082',
        pkmnType: 'Electric Steel',
        descricao: "Magneton is formed from three Magnemite linked together.",
        link: "https://www.pokemon.com/br/pokedex/magneton",
        tags: "magneton 82 0082 electric steel"
    },
    {
        titulo: "Farfetch'd",
        pkmnNumber: '#0083',
        pkmnType: 'Normal Flying',
        descricao: "Farfetch'd is known for carrying a leek, which it uses to defend itself.",
        link: "https://www.pokemon.com/br/pokedex/farfetchd",
        tags: "farfetchd 83 0083 normal flying"
    },
    {
        titulo: "Doduo",
        pkmnNumber: '#0084',
        pkmnType: 'Normal Flying',
        descricao: "Doduo is known for its speed, allowing it to run very quickly and evade predators.",
        link: "https://www.pokemon.com/br/pokedex/doduo",
        tags: "doduo 84 0084 normal flying"
    },
    {
        titulo: "Dodrio",
        pkmnNumber: '#0085',
        pkmnType: 'Normal Flying',
        descricao: "Dodrio has three heads that can each spot foes from a distance.",
        link: "https://www.pokemon.com/br/pokedex/dodrio",
        tags: "dodrio 85 0085 normal flying"
    },
    {
        titulo: "Seel",
        pkmnNumber: '#0086',
        pkmnType: 'Water',
        descricao: "Seel's body is covered with a thick layer of blubber that allows it to swim easily in cold water.",
        link: "https://www.pokemon.com/br/pokedex/seel",
        tags: "seel 86 0086 water"
    },
    {
        titulo: "Dewgong",
        pkmnNumber: '#0087',
        pkmnType: 'Water Ice',
        descricao: "Dewgong can swim gracefully in the water and is known for its beautiful singing.",
        link: "https://www.pokemon.com/br/pokedex/dewgong",
        tags: "dewgong 87 0087 water ice"
    },
    {
        titulo: "Grimer",
        pkmnNumber: '#0088',
        pkmnType: 'Poison',
        descricao: "Grimer is a creature made of sludge and can leave a trail of toxic waste wherever it goes.",
        link: "https://www.pokemon.com/br/pokedex/grimer",
        tags: "grimer 88 0088 poison"
    },
    {
        titulo: "Muk",
        pkmnNumber: '#0089',
        pkmnType: 'Poison',
        descricao: "Muk's body is made up of a massive pile of toxic sludge, making it highly dangerous.",
        link: "https://www.pokemon.com/br/pokedex/muk",
        tags: "muk 89 0089 poison"
    },
    {
        titulo: "Shellder",
        pkmnNumber: '#0090',
        pkmnType: 'Water',
        descricao: "Shellder's shell is very hard, and it can close its shell tightly to protect itself.",
        link: "https://www.pokemon.com/br/pokedex/shellder",
        tags: "shellder 90 0090 water"
    },
    {
        titulo: "Cloyster",
        pkmnNumber: '#0091',
        pkmnType: 'Water Ice',
        descricao: "Cloyster’s shell is extremely durable, and it can unleash powerful ice attacks.",
        link: "https://www.pokemon.com/br/pokedex/cloyster",
        tags: "cloyster 91 0091 water ice"
    },
    {
        titulo: "Gastly",
        pkmnNumber: '#0092',
        pkmnType: 'Ghost Poison',
        descricao: "Gastly is composed of gas, and it can easily hide in shadows and darkness.",
        link: "https://www.pokemon.com/br/pokedex/gastly",
        tags: "gastly 92 0092 ghost poison"
    },
    {
        titulo: "Haunter",
        pkmnNumber: '#0093',
        pkmnType: 'Ghost Poison',
        descricao: "Haunter can phase through walls and is known for its mischievous nature.",
        link: "https://www.pokemon.com/br/pokedex/haunter",
        tags: "haunter 93 0093 ghost poison"
    },
    {
        titulo: "Gengar",
        pkmnNumber: '#0094',
        pkmnType: 'Ghost Poison',
        descricao: "Gengar is known for its shadowy appearance and love of pranks.",
        link: "https://www.pokemon.com/br/pokedex/gengar",
        tags: "gengar 94 0094 ghost poison"
    },
    {
        titulo: "Onix",
        pkmnNumber: '#0095',
        pkmnType: 'Rock Ground',
        descricao: "Onix’s body is made of linked rock and metal, and it can burrow through the ground at high speeds.",
        link: "https://www.pokemon.com/br/pokedex/onix",
        tags: "onix 95 0095 rock ground"
    },
    {
        titulo: "Drowzee",
        pkmnNumber: '#0096',
        pkmnType: 'Psychic',
        descricao: "Drowzee is known to eat dreams, and it can use its psychic abilities to induce sleep.",
        link: "https://www.pokemon.com/br/pokedex/drowzee",
        tags: "drowzee 96 0096 psychic"
    },
    {
        titulo: "Hypno",
        pkmnNumber: '#0097',
        pkmnType: 'Psychic',
        descricao: "Hypno is known for its ability to lull its foes to sleep using its pendulum.",
        link: "https://www.pokemon.com/br/pokedex/hypno",
        tags: "hypno 97 0097 psychic"
    },
    {
        titulo: "Krabby",
        pkmnNumber: '#0098',
        pkmnType: 'Water',
        descricao: "Krabby is known for its powerful claws, which can crush anything.",
        link: "https://www.pokemon.com/br/pokedex/krabby",
        tags: "krabby 98 0098 water"
    },
    {
        titulo: "Kingler",
        pkmnNumber: '#0099',
        pkmnType: 'Water',
        descricao: "Kingler's claws are extremely powerful, and it can slice through hard objects.",
        link: "https://www.pokemon.com/br/pokedex/kingler",
        tags: "kingler 99 0099 water"
    },
    {
        titulo: "Voltorb",
        pkmnNumber: '#0100',
        pkmnType: 'Electric',
        descricao: "Voltorb resembles a Poké Ball and can explode when startled.",
        link: "https://www.pokemon.com/br/pokedex/voltorb",
        tags: "voltorb 100 0100 electric"
    },
    {
        titulo: "Electrode",
        pkmnNumber: '#0101',
        pkmnType: 'Electric',
        descricao: "Electrode is known for its speed and can explode with little warning.",
        link: "https://www.pokemon.com/br/pokedex/electrode",
        tags: "electrode 101 0101 electric"
    },
    {
        titulo: "Exeggcute",
        pkmnNumber: '#0102',
        pkmnType: 'Grass Psychic',
        descricao: "Exeggcute is made up of six eggs that can communicate telepathically.",
        link: "https://www.pokemon.com/br/pokedex/exeggcute",
        tags: "exeggcute 102 0102 grass psychic"
    },
    {
        titulo: "Exeggutor",
        pkmnNumber: '#0103',
        pkmnType: 'Grass Psychic',
        descricao: "Exeggutor has three heads, each capable of independent thought.",
        link: "https://www.pokemon.com/br/pokedex/exeggutor",
        tags: "exeggutor 103 0103 grass psychic"
    },
    {
        titulo: "Cubone",
        pkmnNumber: '#0104',
        pkmnType: 'Ground',
        descricao: "Cubone wears the skull of its deceased mother, and it is known for its sadness.",
        link: "https://www.pokemon.com/br/pokedex/cubone",
        tags: "cubone 104 0104 ground"
    },
    {
        titulo: "Marowak",
        pkmnNumber: '#0105',
        pkmnType: 'Ground',
        descricao: "Marowak is known for its powerful bone attacks and fierce loyalty.",
        link: "https://www.pokemon.com/br/pokedex/marowak",
        tags: "marowak 105 0105 ground"
    },
    {
        titulo: "Hitmonlee",
        pkmnNumber: '#0106',
        pkmnType: 'Fighting',
        descricao: "Hitmonlee's legs are powerful and can deliver devastating kicks.",
        link: "https://www.pokemon.com/br/pokedex/hitmonlee",
        tags: "hitmonlee 106 0106 fighting"
    },
    {
        titulo: "Hitmonchan",
        pkmnNumber: '#0107',
        pkmnType: 'Fighting',
        descricao: "Hitmonchan is known for its punching ability and its wide variety of punches.",
        link: "https://www.pokemon.com/br/pokedex/hitmonchan",
        tags: "hitmonchan 107 0107 fighting"
    },
    {
        titulo: "Lickitung",
        pkmnNumber: '#0108',
        pkmnType: 'Normal',
        descricao: "Lickitung's long tongue is used to capture prey and can be extremely sticky.",
        link: "https://www.pokemon.com/br/pokedex/lickitung",
        tags: "lickitung 108 0108 normal"
    },
    {
        titulo: "Koffing",
        pkmnNumber: '#0109',
        pkmnType: 'Poison',
        descricao: "Koffing releases toxic gas and is known for its round, balloon-like body.",
        link: "https://www.pokemon.com/br/pokedex/koffing",
        tags: "koffing 109 0109 poison"
    },
    {
        titulo: "Weezing",
        pkmnNumber: '#0110',
        pkmnType: 'Poison',
        descricao: "Weezing is a larger form of Koffing, known for its dual gas outlets.",
        link: "https://www.pokemon.com/br/pokedex/weezing",
        tags: "weezing 110 0110 poison"
    },
    {
        titulo: "Rhyhorn",
        pkmnNumber: '#0111',
        pkmnType: 'Ground Rock',
        descricao: "Rhyhorn can easily knock down a house. It can travel over 100 kilometers an hour.",
        link: "https://www.pokemon.com/br/pokedex/rhyhorn",
        tags: "rhyhorn 111 0111 ground rock"
    },
    {
        titulo: "Rhydon",
        pkmnNumber: '#0112',
        pkmnType: 'Ground Rock',
        descricao: "Rhydon is the first Pokémon to be created by humans. It can punch holes through thick steel.",
        link: "https://www.pokemon.com/br/pokedex/rhydon",
        tags: "rhydon 112 0112 ground rock"
    },
    {
        titulo: "Chansey",
        pkmnNumber: '#0113',
        pkmnType: 'Normal',
        descricao: "Chansey’s egg is filled with happiness. It is said to bring good luck to those who eat it.",
        link: "https://www.pokemon.com/br/pokedex/chansey",
        tags: "chansey 113 0113 normal"
    },
    {
        titulo: "Tangela",
        pkmnNumber: '#0114',
        pkmnType: 'Grass',
        descricao: "Tangela entangles anything that comes near it in vines. It is said to be the vine Pokémon.",
        link: "https://www.pokemon.com/br/pokedex/tangela",
        tags: "tangela 114 0114 grass"
    },
    {
        titulo: "Kangaskhan",
        pkmnNumber: '#0115',
        pkmnType: 'Normal',
        descricao: "Kangaskhan’s parenting is legendary. It raises its young in its pouch.",
        link: "https://www.pokemon.com/br/pokedex/kangaskhan",
        tags: "kangaskhan 115 0115 normal"
    },
    {
        titulo: "Horsea",
        pkmnNumber: '#0116',
        pkmnType: 'Water',
        descricao: "Horsea can shoot water from its mouth. It’s said to be able to swim very quickly.",
        link: "https://www.pokemon.com/br/pokedex/horse",
        tags: "horse 116 0116 water"
    },
    {
        titulo: "Seadra",
        pkmnNumber: '#0117',
        pkmnType: 'Water',
        descricao: "Seadra can swim backwards. It can shoot water at high pressure.",
        link: "https://www.pokemon.com/br/pokedex/seadra",
        tags: "seadra 117 0117 water"
    },
    {
        titulo: "Goldeen",
        pkmnNumber: '#0118',
        pkmnType: 'Water',
        descricao: "Goldeen is known for its beautiful fins. It can leap out of the water.",
        link: "https://www.pokemon.com/br/pokedex/goldeen",
        tags: "goldeen 118 0118 water"
    },
    {
        titulo: "Seaking",
        pkmnNumber: '#0119',
        pkmnType: 'Water',
        descricao: "Seaking’s horn is powerful and can pierce a thick steel sheet.",
        link: "https://www.pokemon.com/br/pokedex/seaking",
        tags: "seaking 119 0119 water"
    },
    {
        titulo: "Staryu",
        pkmnNumber: '#0120',
        pkmnType: 'Water',
        descricao: "Staryu has the ability to regenerate its limbs. It’s often found in oceans.",
        link: "https://www.pokemon.com/br/pokedex/staryu",
        tags: "staryu 120 0120 water"
    },
    {
        titulo: "Starmie",
        pkmnNumber: '#0121',
        pkmnType: 'Water Psychic',
        descricao: "Starmie is known for its fast swimming speed. It can create powerful water jets.",
        link: "https://www.pokemon.com/br/pokedex/starmie",
        tags: "starmie 121 0121 water psychic"
    },
    {
        titulo: "Mr. Mime",
        pkmnNumber: '#0122',
        pkmnType: 'Psychic Fairy',
        descricao: "Mr. Mime creates invisible walls. It can manipulate light and sound.",
        link: "https://www.pokemon.com/br/pokedex/mr-mime",
        tags: "mr mime 122 0122 psychic fairy"
    },
    {
        titulo: "Scyther",
        pkmnNumber: '#0123',
        pkmnType: 'Bug Flying',
        descricao: "Scyther is known for its speed and scythe-like arms. It’s an agile fighter.",
        link: "https://www.pokemon.com/br/pokedex/scyther",
        tags: "scyther 123 0123 bug flying"
    },
    {
        titulo: "Jynx",
        pkmnNumber: '#0124',
        pkmnType: 'Ice Psychic',
        descricao: "Jynx is known for its beautiful voice and can freeze opponents with its powers.",
        link: "https://www.pokemon.com/br/pokedex/jynx",
        tags: "jynx 124 0124 ice psychic"
    },
    {
        titulo: "Electabuzz",
        pkmnNumber: '#0125',
        pkmnType: 'Electric',
        descricao: "Electabuzz has a very energetic personality and generates electricity.",
        link: "https://www.pokemon.com/br/pokedex/electabuzz",
        tags: "electabuzz 125 0125 electric"
    },
    {
        titulo: "Magmar",
        pkmnNumber: '#0126',
        pkmnType: 'Fire',
        descricao: "Magmar’s body temperature can reach up to 1,100 degrees Fahrenheit.",
        link: "https://www.pokemon.com/br/pokedex/magmar",
        tags: "magmar 126 0126 fire"
    },
    {
        titulo: "Pinsir",
        pkmnNumber: '#0127',
        pkmnType: 'Bug',
        descricao: "Pinsir is known for its strong pincers. It’s a formidable opponent in battle.",
        link: "https://www.pokemon.com/br/pokedex/pinsir",
        tags: "pinsir 127 0127 bug"
    },
    {
        titulo: "Tauros",
        pkmnNumber: '#0128',
        pkmnType: 'Normal',
        descricao: "Tauros is known for its fierce nature and can charge at high speeds.",
        link: "https://www.pokemon.com/br/pokedex/tauros",
        tags: "tauros 128 0128 normal"
    },
    {
        titulo: "Magikarp",
        pkmnNumber: '#0129',
        pkmnType: 'Water',
        descricao: "Magikarp is known for being weak, but it evolves into a powerful Gyarados.",
        link: "https://www.pokemon.com/br/pokedex/magikarp",
        tags: "magikarp 129 0129 water"
    },
    {
        titulo: "Gyarados",
        pkmnNumber: '#0130',
        pkmnType: 'Water Flying',
        descricao: "Gyarados is known for its ferocious temper and can cause massive destruction.",
        link: "https://www.pokemon.com/br/pokedex/gyarados",
        tags: "gyarados 130 0130 water flying"
    },
    {
        titulo: "Lapras",
        pkmnNumber: '#0131',
        pkmnType: 'Water Ice',
        descricao: "Lapras is known for its gentle nature. It can ferry people across water.",
        link: "https://www.pokemon.com/br/pokedex/lapras",
        tags: "lapras 131 0131 water ice"
    },
    {
        titulo: "Ditto",
        pkmnNumber: '#0132',
        pkmnType: 'Normal',
        descricao: "Ditto can transform into anything. It can mimic the appearance of any Pokémon.",
        link: "https://www.pokemon.com/br/pokedex/ditto",
        tags: "ditto 132 0132 normal"
    },
    {
        titulo: "Eevee",
        pkmnNumber: '#0133',
        pkmnType: 'Normal',
        descricao: "Eevee has an unstable genetic makeup that suddenly mutates due to its environment.",
        link: "https://www.pokemon.com/br/pokedex/eevee",
        tags: "eevee 133 0133 normal"
    },
    {
        titulo: "Vaporeon",
        pkmnNumber: '#0134',
        pkmnType: 'Water',
        descricao: "Vaporeon can melt into water. Its body is similar to water molecules.",
        link: "https://www.pokemon.com/br/pokedex/vaporeon",
        tags: "vaporeon 134 0134 water"
    },
    {
        titulo: "Jolteon",
        pkmnNumber: '#0135',
        pkmnType: 'Electric',
        descricao: "Jolteon can discharge electricity from its fur. It can be very dangerous.",
        link: "https://www.pokemon.com/br/pokedex/jolteon",
        tags: "jolteon 135 0135 electric"
    },
    {
        titulo: "Flareon",
        pkmnNumber: '#0136',
        pkmnType: 'Fire',
        descricao: "Flareon’s body temperature can reach 1,650 degrees Fahrenheit. Its flames are intense.",
        link: "https://www.pokemon.com/br/pokedex/flareon",
        tags: "flareon 136 0136 fire"
    },
    {
        titulo: "Porygon",
        pkmnNumber: '#0137',
        pkmnType: 'Normal',
        descricao: "Porygon was created using computer programming. It can convert its body into data.",
        link: "https://www.pokemon.com/br/pokedex/porygon",
        tags: "porygon 137 0137 normal"
    },
    {
        titulo: "Omanyte",
        pkmnNumber: '#0138',
        pkmnType: 'Rock Water',
        descricao: "Omanyte is a fossil Pokémon. It’s known to be quite rare.",
        link: "https://www.pokemon.com/br/pokedex/omanyte",
        tags: "omanyte 138 0138 rock water"
    },
    {
        titulo: "Omastar",
        pkmnNumber: '#0139',
        pkmnType: 'Rock Water',
        descricao: "Omastar has two long tentacles and can swim swiftly in the water.",
        link: "https://www.pokemon.com/br/pokedex/omastar",
        tags: "omastar 139 0139 rock water"
    },
    {
        titulo: "Kabuto",
        pkmnNumber: '#0140',
        pkmnType: 'Rock Water',
        descricao: "Kabuto is a small, fossil Pokémon. It has a hard shell for protection.",
        link: "https://www.pokemon.com/br/pokedex/kabuto",
        tags: "kabuto 140 0140 rock water"
    },
    {
        titulo: "Kabutops",
        pkmnNumber: '#0141',
        pkmnType: 'Rock Water',
        descricao: "Kabutops can cut its prey with its sharp scythes. It’s a fierce predator.",
        link: "https://www.pokemon.com/br/pokedex/kabutops",
        tags: "kabutops 141 0141 rock water"
    },
    {
        titulo: "Aerodactyl",
        pkmnNumber: '#0142',
        pkmnType: 'Rock Flying',
        descricao: "Aerodactyl is known for its speed and sharp teeth. It’s a fearsome predator.",
        link: "https://www.pokemon.com/br/pokedex/aerodactyl",
        tags: "aerodactyl 142 0142 rock flying"
    },
    {
        titulo: "Snorlax",
        pkmnNumber: '#0143',
        pkmnType: 'Normal',
        descricao: "Snorlax is known for its massive size. It can sleep for long periods.",
        link: "https://www.pokemon.com/br/pokedex/snorlax",
        tags: "snorlax 143 0143 normal"
    },
    {
        titulo: "Articuno",
        pkmnNumber: '#0144',
        pkmnType: 'Ice Flying',
        descricao: "Articuno is a legendary Pokémon that can control ice. It’s very rare.",
        link: "https://www.pokemon.com/br/pokedex/articuno",
        tags: "articuno 144 0144 ice flying"
    },
    {
        titulo: "Zapdos",
        pkmnNumber: '#0145',
        pkmnType: 'Electric Flying',
        descricao: "Zapdos is known for its ability to control electricity. It’s a legendary Pokémon.",
        link: "https://www.pokemon.com/br/pokedex/zapdos",
        tags: "zapdos 145 0145 electric flying"
    },
    {
        titulo: "Moltres",
        pkmnNumber: '#0146',
        pkmnType: 'Fire Flying',
        descricao: "Moltres can control flames and is considered a legendary Pokémon.",
        link: "https://www.pokemon.com/br/pokedex/moltres",
        tags: "moltres 146 0146 fire flying"
    },
    {
        titulo: "Dratini",
        pkmnNumber: '#0147',
        pkmnType: 'Dragon',
        descricao: "Dratini is a rare Pokémon that is known for its elegance and grace.",
        link: "https://www.pokemon.com/br/pokedex/dratini",
        tags: "dratini 147 0147 dragon"
    },
    {
        titulo: "Dragonair",
        pkmnNumber: '#0148',
        pkmnType: 'Dragon',
        descricao: "Dragonair is a graceful Pokémon that is said to have mystical powers.",
        link: "https://www.pokemon.com/br/pokedex/dragonair",
        tags: "dragonair 148 0148 dragon"
    },
    {
        titulo: "Dragonite",
        pkmnNumber: '#0149',
        pkmnType: 'Dragon Flying',
        descricao: "Dragonite is a powerful Pokémon known for its speed and strength.",
        link: "https://www.pokemon.com/br/pokedex/dragonite",
        tags: "dragonite 149 0149 dragon flying"
    },
    {
        titulo: "Mewtwo",
        pkmnNumber: '#0150',
        pkmnType: 'Psychic',
        descricao: "Mewtwo is a legendary Pokémon created from the DNA of Mew. It has psychic powers.",
        link: "https://www.pokemon.com/br/pokedex/mewtwo",
        tags: "mewtwo 150 0150 psychic"
    },
    {
        titulo: "Mew",
        pkmnNumber: '#0151',
        pkmnType: 'Psychic',
        descricao: "Mew is a mythical Pokémon said to have the ability to learn any move.",
        link: "https://www.pokemon.com/br/pokedex/mew",
        tags: "mew 151 0151 psychic"
    }
       
]
