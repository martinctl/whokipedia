import Fuse from "fuse.js"

/**
 * This functions takes a string as parameter and returns all celebrities from our list whose name is close
 * to the query. It uses Fuse.js which is a powerful, lightweight fuzzy-search library. Fuzzy searching is the
 * technique of finding strings that are approximately equal to a given pattern (our query).
 * @param query - this string will filter the output of our function to return only celebrities close to our input.
 */
export function getAutocompleteSuggestions(query: string): string[] {
    const fuseOptions: Fuse.IFuseOptions<string> = {
        threshold: 0.4,
    }
    // Initialize Fuse with the celebrity data and options and perform search
    const fuse = new Fuse(celebrities, fuseOptions)
    return fuse.search(query).map(result => result.item)
}

export const celebrities: string[] = [
    "Taylor Swift",
    "Albert Einstein",
    "Dua Lipa",
    "Leonardo da Vinci",
    "Michael Jackson",
    "Madonna",
    "Elvis Presley",
    "Beyoncé",
    "Tom Cruise",
    "Angelina Jolie",
    "Brad Pitt",
    "Marilyn Monroe",
    "Barack Obama",
    "Oprah Winfrey",
    "Justin Bieber",
    "Rihanna",
    "Adele",
    "Emma Watson",
    "Kanye West",
    "Lady Gaga",
    "Jennifer Lopez",
    "Will Smith",
    "Britney Spears",
    "Johnny Depp",
    "Selena Gomez",
    "David Beckham",
    "Cristiano Ronaldo",
    "Katy Perry",
    "Steve Jobs",
    "Mark Zuckerberg",
    "Bill Gates",
    "Jeff Bezos",
    "Salvador Dalí",
    "Vincent van Gogh",
    "Walt Disney",
    "Angela Merkel",
    "Kylie Jenner",
    "Kim Kardashian",
    "Kendall Jenner",
    "Stephen Hawking",
    "Snoop Dogg",
    "Eminem",
    "Arnold Schwarzenegger",
    "Michael Jordan",
    "Muhammad Ali",
    "Celine Dion",
    "John Lennon",
    "Paul McCartney",
    "Ringo Starr",
    "George Harrison",
    "Bob Marley",
    "Elton John",
    "Freddie Mercury",
    "David Bowie",
    "Elizabeth II",
    "William, Prince of Wales",
    "Diana, Princess of Wales",
    "Nelson Mandela",
    "Malala Yousafzai",
    "Ellen DeGeneres",
    "Tom Hanks",
    "Robert Downey Jr.",
    "Jennifer Aniston",
    "Meryl Streep",
    "Leonardo DiCaprio",
    "Julia Roberts",
    "George Clooney",
    "Matt Damon",
    "Nicole Kidman",
    "Tom Hardy",
    "Daniel Radcliffe",
    "Emma Stone",
    "Scarlett Johansson",
    "Chris Hemsworth",
    "Jennifer Lawrence",
    "Gigi Hadid",
    "Zendaya",
    "Harry Styles",
    "Lionel Messi",
    "Neymar",
    "Serena Williams",
    "Roger Federer",
    "Lewis Hamilton",
    "Usain Bolt",
    "Tiger Woods",
    "Billie Eilish",
    "Ariana Grande",
    "Megan Fox",
    "Jessica Alba",
    "Gwyneth Paltrow",
    "Emmanuel Macron",
    "François Hollande",
    "Nicolas Sarkozy",
    "Carla Bruni",
    "Édith Piaf",
    "Marion Cotillard",
    "Ryan Reynolds",
    "Blake Lively",
    "Ryan Gosling",
    "Tom Holland",
    "Coco Chanel",
    "Christian Dior",
    "Jacques Brel",
    "Charles Aznavour",
    "Joe Biden",
    "Greta Thunberg",
    "John von Neumann",
    "Haruma Miura",
    "Donald Trump",
    "Elon Musk",
    "Adolf Hitler",
    "Pablo Escobar",
    "Vladimir Putin",
    "Sigmund Freud",
    "Napoleon",
    "Jeffrey Epstein",
    "Joseph Stalin",
    "Prince Philip, Duke of Edinburgh",
    "Ken Shimura",
    "Ludwig van Beethoven",
    "Joaquin Phoenix",
    "Dwayne Johnson",
    "Jesus",
    "Kobe Bryant",
    "Winston Churchill",
    "Alexander the Great",
    "Ragnar Lodbrok",
    "Paul Walker",
    "Frida Kahlo",
    "Bruce Lee",
    "Nikola Tesla",
    "Christopher Columbus",
    "Wolfgang Amadeus Mozart",
    "Keanu Reeves",
    "Queen Victoria",
    "Heath Ledger",
    "Julius Caesar",
    "Mahatma Gandhi",
    "Charles, Prince of Wales",
    "Princess Margaret, Countess of Snowdon",
    "Mike Tyson",
    "Jason Statham",
    "Marie Curie",
    "Clint Eastwood",
    "Charles Manson",
    "Martin Luther King Jr.",
    "Zlatan Ibrahimoviƒá",
    "George VI",
    "Karl Marx",
    "Boris Johnson",
    "William Shakespeare",
    "Louis XIV of France",
    "Pope Francis",
    "Margot Robbie",
    "John F. Kennedy",
    "Ted Bundy",
    "Sylvester Stallone",
    "Aristotle",
    "Kirk Douglas",
    "Joaquín \"El Chapo\" Guzmán",
    "Vladimir Lenin",
    "Quentin Tarantino",
    "Mia Khalifa",
    "Elizabeth I of England",
    "Robin Williams",
    "Che Guevara",
    "Charlize Theron",
    "LeBron James",
    "Pablo Picasso",
    "6ix9ine",
    "Xi Jinping",
    "Pope John Paul II",
    "Ronaldo",
    "Naya Rivera",
    "Catherine the Great",
    "Al Pacino",
    "Sharon Tate",
    "Takeru Satoh",
    "Ronaldinho",
    "Isaac Newton",
    "Miguel Ángel Félix Gallardo",
    "Plato",
    "Shakira",
    "Robert De Niro",
    "Abraham Lincoln",
    "Timothée Chalamet",
    "Roman Polanski",
    "Benito Mussolini",
    "Amber Heard",
    "Genghis Khan",
    "Tupac Shakur",
    "Patrick Swayze",
    "Lali Espósito",
    "Moses",
    "Socrates",
    "Dennis Rodman",
    "Charlie Chaplin",
    "Michael Schumacher",
    "Galileo Galilei",
    "Anne Frank",
    "Ken Miles",
    "Friedrich Nietzsche",
    "Anne Hathaway",
    "Jackie Chan",
    "Suleiman the Magnificent",
    "Henry VIII of England",
    "Mary, Queen of Scots",
    "Ennio Morricone",
    "Alexander Lukashenko",
    "Zinedine Zidane",
    "XXXTentacion",
    "Franklin D. Roosevelt",
    "Natalie Portman",
    "Scottie Pippen",
    "Thomas Edison",
    "Yuriko Koike",
    "Johannes Kepler",
    "Pelé",
    "Giuseppe Conte",
    "Pope Benedict XVI",
    "Tedros Adhanom",
    "Joan of Arc",
    "Charles Darwin",
    "John Travolta",
    "Edward VIII",
    "Whitney Houston",
    "Judy Garland",
    "Mikhail Gorbachev",
    "Nostradamus",
    "Vin Diesel",
    "Bradley Cooper",
    "Al Capone",
    "Kurt Cobain",
    "Johann Sebastian Bach",
    "Cillian Murphy",
    "Gautama Buddha",
    "Ana de Armas",
    "Carles Puigdemont",
    "Mao Zedong",
    "Ben Affleck",
    "Martin Luther",
    "Akechi Mitsuhide",
    "Audrey Hepburn",
    "Diego Maradona",
    "Jim Carrey",
    "Charlemagne",
    "Marie Antoinette",
    "Meghan, Duchess of Sussex",
    "Michelangelo",
    "Keiji Fujiwara",
    "Park Seo-joon",
    "Najwa Nimri",
    "Hyun Bin",
    "Son Ye-jin",
    "George Soros",
    "Bruce Willis",
    "Kristen Stewart",
    "Kelly Preston",
    "Cleopatra",
    "Abraham",
    "Avicii",
    "Augustus",
    "Nicholas II of Russia",
    "Sandra Bullock",
    "Sean Connery",
    "River Phoenix",
    "Ivar the Boneless",
    "Stephen King",
    "Kim Jong-il",
    "Taylor Swift",
    "Zac Efron",
    "Saitō Dōsan",
    "J. K. Rowling",
    "Wentworth Miller",
    "Hayao Miyazaki",
    "Cameron Boyce",
    "Steven Spielberg",
    "Michael Douglas",
    "George V",
    "Oda Nobunaga",
    "Jair Bolsonaro",
    "Matthew McConaughey",
    "Robert Pattinson",
    "Kim Yo-jong",
    "Jean-Claude Van Damme",
    "Ronald Reagan",
    "Michael J. Fox",
    "Melania Trump",
    "Orlando Bloom",
    "Saddam Hussein",
    "Frédéric Chopin",
    "Christopher Nolan",
    "Erling Braut H√•land",
    "Immanuel Kant",
    "Mark Wahlberg",
    "Harvey Weinstein",
    "Alan Turing",
    "Liam Neeson",
    "Mel Gibson",
    "Neil Armstrong",
    "Renée Zellweger",
    "Conor McGregor",
    "Josef Mengele",
    "Nicolas Cage",
    "Amy Winehouse",
    "Christian Bale",
    "Henry Cavill",
    "Warren Buffett",
    "Paul the Apostle",
    "Queen Elizabeth The Queen Mother",
    "Marlon Brando",
    "O. J. Simpson",
    "Adam Sandler",
    "Robert Lewandowski",
    "Osama bin Laden",
    "Mother Teresa",
    "Banksy",
    "Mustafa Kemal Atatürk",
    "Shaquille O'Neal",
    "Fyodor Dostoevsky",
    "Caitlyn Jenner",
    "Luke Perry",
    "Alba Flores",
    "Kylian Mbappé",
    "J. R. R. Tolkien",
    "Edward Snowden",
    "Dakota Johnson",
    "Simón Bolívar",
    "Jake Gyllenhaal",
    "Keira Knightley",
    "Ayrton Senna",
    "Chris Evans",
    "Yuri Gagarin",
    "Ip Man",
    "Maria Theresa",
    "Fidel Castro",
    "Mila Kunis",
    "Ernest Hemingway",
    "Anne, Princess Royal",
    "Monica Bellucci",
    "Ester Expósito",
    "Ali",
    "Kate Winslet",
    "Louis de Funès",
    "Mikhail Yefremov",
    "René Descartes",
    "Charlie Sheen",
    "Ayumi Hamasaki",
    "Khabib Nurmagomedov",
    "Cole Sprouse",
    "Kris Jenner",
    "Emilia Clarke",
    "Audrey Tang",
    "Johnny Cash",
    "Francisco Franco",
    "Lil Peep",
    "Grigori Rasputin",
    "Daniel Craig",
    "Martin Scorsese",
    "Mehmed the Conqueror",
    "Margaret Thatcher",
    "Jack Nicholson",
    "Albert Camus",
    "Lee Min-ho",
    "Morgan Freeman",
    "Úrsula Corberó",
    "Harrison Ford",
    "Chris Kyle",
    "Marco Polo",
    "Travis Scott",
    "Björn Ironside",
    "George W. Bush",
    "Avicenna",
    "Leo Tolstoy",
    "Denzel Washington",
    "Heinrich Himmler",
    "Prince William, Duke of Cambridge",
    "Gal Gadot",
    "Prince Harry, Duke of Sussex",
    "Natsuki Hanae",
    "Malcolm X",
    "Millie Bobby Brown",
    "Miley Cyrus",
    "Pep Guardiola",
    "Niki Lauda",
    "Olivia de Havilland",
    "Kim Il-sung",
    "Joseph Goebbels",
    "Jean-Jacques Rousseau",
    "George Washington",
    "Sergio Ramos",
    "Bernie Sanders",
    "Leon Trotsky",
    "Prince Andrew, Duke of York",
    "Adolf Eichmann",
    "Nicolaus Copernicus",
    "Anthony Hopkins",
    "Ronald Koeman",
    "Umar",
    "Rachel McAdams",
    "Louis XVI of France",
    "Mary Magdalene",
    "Charles de Gaulle",
    "Franz Kafka",
    "Tutankhamun",
    "Alan Rickman",
    "Chester Bennington",
    "Winona Ryder",
    "Qin Shi Huang",
    "Grace Kelly",
    "Pythagoras",
    "Jason Momoa",
    "Mary, mother of Jesus",
    "Freddie Highmore",
    "Rafał Trzaskowski",
    "Andrea Bocelli",
    "Solomon",
    "Victor Hugo",
    "IU",
    "Cameron Diaz",
    "Osman I",
    "Louis Pasteur",
    "Recep Tayyip Erdoƒüan",
    "Bill Clinton",
    "Chuck Norris",
    "John Cena",
    "Richard Nixon",
    "Benjamin Franklin",
    "David",
    "Dante Alighieri",
    "Frank Sinatra",
    "Charles V, Holy Roman Emperor",
    "Beyoncé",
    "Alfred the Great",
    "Cara Delevingne",
    "Amado Carrillo Fuentes",
    "Edward VII",
    "Stanley Kubrick",
    "Gabriel García Márquez",
    "Madam C. J. Walker",
    "Spartacus",
    "Magic Johnson",
    "Milla Jovovich",
    "Zodiac Killer",
    "Manuel Belgrano",
    "Ertuƒürul",
    "Agatha Christie",
    "The Weeknd",
    "Woody Allen",
    "Saladin",
    "Bong Joon-ho",
    "Cate Blanchett",
    "Rowan Atkinson",
    "Jennifer Connelly",
    "Lisa",
    "Yukio Mishima",
    "Anne Boleyn",
    "Hurrem Sultan",
    "Confucius",
    "Benedict Cumberbatch",
    "Ashton Kutcher",
    "Marcus Aurelius",
    "Pierce Brosnan",
    "Peter the Great",
    "Nikita Khrushchev",
    "Nero",
    "Steve McQueen",
    "Gerard Butler",
    "Niccolò Machiavelli",
    "Demi Moore",
    "Dakota Fanning",
    "Rami Malek",
    "Lee Teng-hui",
    "Camilla, Duchess of Cornwall",
    "Juan Carlos I of Spain",
    "Salma Hayek",
    "Oskar Schindler",
    "Hana Kimura",
    "Sérgio Vieira de Mello",
    "Helena Bonham Carter",
    "Russell Crowe",
    "Otto von Bismarck",
    "Saint Peter",
    "Dalida",
    "Jacqueline Kennedy Onassis",
    "The Undertaker",
    "Joey King",
    "Jude Law",
    "Zayn Malik",
    "Vlad the Impaler",
    "Mary I of England",
    "Alfred Hitchcock",
    "Nicki Minaj",
    "Jack the Ripper",
    "Novak Djokovic",
    "Eva Green",
    "Andrea Pirlo",
    "Edgar Allan Poe",
    "George Orwell",
    "Courteney Cox",
    "Muammar Gaddafi",
    "Emily Blunt",
    "Thierry Henry",
    "Bob Dylan",
    "Terence Hill",
    "Tyson Fury",
    "George Michael",
    "Reese Witherspoon",
    "Rooney Mara",
    "Guy Ritchie",
    "Charlie Hunnam",
    "Steven Seagal",
    "Alain Delon",
    "Saoirse Ronan",
    "Karim Benzema",
    "Jungkook",
    "Catherine Zeta-Jones",
    "Pyotr Ilyich Tchaikovsky",
    "V",
    "Penélope Cruz",
    "Robert Kardashian",
    "Gianluigi Buffon",
    "Kenshi Yonezu",
    "Cory Monteith",
    "Ralph Fiennes",
    "Baba Vanga",
    "Abu Bakr",
    "Prince",
    "Kamala Harris",
    "Tina Turner",
    "Alexandra Daddario",
    "Marilyn Manson",
    "Floyd Mayweather Jr.",
    "Takuya Kimura",
    "Voltaire",
    "Johann Wolfgang von Goethe",
    "Yui Aragaki",
    "Cher",
    "Kevin Spacey",
    "Brittany Murphy",
    "Juice Wrld",
    "George H. W. Bush",
    "Astrid Lindgren",
    "Ted Kaczynski",
    "María Pedraza",
    "Samuel L. Jackson",
    "Rafael Nadal",
    "Kana Hanazawa",
    "Caligula",
    "Gary Oldman",
    "Augustine of Hippo",
    "Johan Cruyff",
    "Jimi Hendrix",
    "Commodus",
    "Edinson Cavani",
    "Carroll Shelby",
    "Liam Hemsworth",
    "Jodie Foster",
    "Travis Fimmel",
    "Miguel de Cervantes",
    "Andy Warhol",
    "Romy Schneider",
    "Brandon Lee",
    "Empress Elisabeth of Austria",
    "Selena",
    "Hermann Göring",
    "Salman of Saudi Arabia",
    "Rachel Weisz",
    "Alexander Pushkin",
    "Viggo Mortensen",
    "Theodore Roosevelt",
    "Oscar Wilde",
    "Jared Leto",
    "Wilhelm II, German Emperor",
    "Stephen Curry",
    "Macaulay Culkin",
    "Kevin Costner",
    "Kourtney Kardashian",
    "Raphael",
    "Ozzy Osbourne",
    "Hugh Jackman",
    "Henry V of England",
    "Jimmy Carter",
    "Vajiralongkorn",
    "Ed Sheeran",
    "Gerard Piqué",
    "Chris Pratt",
    "Archimedes",
    "Israel Kamakawiwoʻole",
    "Danna Paola",
    "Osamu Dazai",
    "Antonio Banderas",
    "Jules Verne",
    "Sean Penn",
    "Felipe VI of Spain",
    "Phil Jackson",
    "Paolo Maldini",
    "Timur",
    "Lindsay Lohan",
    "Ho Chi Minh",
    "Leonid Brezhnev",
    "John Locke",
    "Elle Fanning",
    "Catherine, Duchess of Cambridge",
    "Kim Soo-hyun",
    "Mohammad bin Salman",
    "Cardi B",
    "50 Cent",
    "Constantine the Great",
    "Kaká",
    "Attila",
    "Avril Lavigne",
    "Elsa Pataky",
    "Mohamed Salah",
    "Boris Yeltsin",
    "Alex Zanardi",
    "John D. Rockefeller",
    "Prince Edward, Earl of Wessex",
    "Ferdinand Magellan",
    "Édith Piaf",
    "Elizabeth Taylor",
    "Anders Behring Breivik",
    "Channing Tatum",
    "John the Baptist",
    "Bud Spencer",
    "Shia LaBeouf",
    "Richard Gere",
    "Michelle Rodriguez",
    "Nicolae Ceaușescu",
    "Homer",
    "Kareem Abdul-Jabbar",
    "Viktor Tsoi",
    "Irrfan Khan",
    "José Mourinho",
    "Jean-Paul Sartre",
    "Michael Fassbender",
    "Jacob",
    "Jean Castex",
    "Sophia Loren",
    "Liv Tyler",
    "Nayib Bukele",
    "Hannibal",
    "Kirsten Dunst",
    "Antonio Vivaldi",
    "Florence Nightingale",
    "Ivanka Trump",
    "Li Wenliang",
    "Jens Spahn",
    "Ri Sol-ju",
    "Lili Reinhart",
    "Max von Sydow",
    "J. Y. Park",
    "Álvaro Morte",
    "Colin Farrell",
    "Ramesses II",
    "Kaley Cuoco",
    "Robert Redford",
    "Tokugawa Ieyasu",
    "Claude Monet",
    "Dwight D. Eisenhower",
    "Ignaz Semmelweis",
    "Gianni Versace",
    "Serge Gnabry",
    "Jordan Belfort",
    "Suga",
    "Khloé Kardashian",
    "Jane Fonda",
    "Vanessa Hudgens",
    "Ewan McGregor",
    "Carl Jung",
    "Kate Beckinsale",
    "Napoleon III",
    "Jimmy Hoffa",
    "Jürgen Klopp",
    "Rupert Grint",
    "Paulo Dybala",
    "James Dean",
    "Jean Reno",
    "Judas Iscariot",
    "Sofía Vergara",
    "Laura Dern",
    "Tenzin Gyatso",
    "Javier Bardem",
    "Priyanka Chopra",
    "Hirohito",
    "Emma Roberts",
    "Georgy Zhukov",
    "James Franco",
    "Elizabeth Olsen",
    "Ian McKellen",
    "Grimes",
    "Qianlong Emperor",
    "Eddie Murphy",
    "Michael Clarke Duncan",
    "Michel Piccoli",
    "Diodato",
    "Jessica Biel",
    "Ali Khamenei",
    "Julian Assange",
    "Christophe",
    "Adam Smith",
    "Andrzej Duda",
    "Tomohisa Yamashita",
    "Antoine Griezmann",
    "Edward Norton",
    "Brigitte Macron",
    "James VI and I",
    "Édouard Philippe",
    "Rock Hudson",
    "Carrie Fisher",
    "Luis Suárez",
    "Ivan the Terrible",
    "Amy Adams",
    "Cicero",
    "Elliot Page",
    "Maggie Smith",
    "Arthur Schopenhauer",
    "Bruno Mars",
    "Drake",
    "Lily James",
    "Mohammad Reza Pahlavi",
    "Lily Collins",
    "Chloë Grace Moretz",
    "The Notorious B.I.G.",
    "Tones and I",
    "Brian May",
    "Erwin Rommel",
    "Helen Keller",
    "Daniel Day-Lewis",
    "Muslim Magomayev",
    "Kösem",
    "Michelle Williams",
    "Puyi",
    "Sharon Stone",
    "Philip II of Spain",
    "Justin Timberlake",
    "Katheryn Winnick",
    "Matthew Perry",
    "Max Weber",
    "Taika Waititi",
    "Rosa Parks",
    "Josip Broz Tito",
    "Alicia Vikander",
    "Jennifer Garner",
    "Christopher Lloyd",
    "Eva Braun",
    "Katherine Heigl",
    "Adam Driver",
    "Georg Wilhelm Friedrich Hegel",
    "Demi Lovato",
    "Uma Thurman",
    "Dietmar Hopp",
    "Lee Jong-suk",
    "Idris Elba",
    "Jane Austen",
    "Nana Komatsu",
    "Valentino Rossi",
    "Dustin Hoffman",
    "Ghislaine Maxwell",
    "Tim Burton",
    "Sebastian Vettel",
    "Ian Somerhalder",
    "Robert Koch",
    "Thomas Aquinas",
    "Bryan Cranston",
    "Antoine de Saint-Exupéry",
    "Jeffrey Dahmer",
    "Pontius Pilate",
    "Tom Ellis",
    "Masami Nagasawa",
    "Hans Christian Andersen",
    "Selim II",
    "Carlos Tevez",
    "Samuel Eto'o",
    "José de San Martín",
    "Takahiro Moriuchi",
    "Reinhard Heydrich",
    "Molière",
    "Phil Collins",
    "Thales of Miletus",
    "Wayne Rooney",
    "Stan Lee",
    "Jim Morrison",
    "Harry S. Truman",
    "Camila Cabello",
    "Shah Rukh Khan",
    "Rebecca Ferguson",
    "Eric Clapton",
    "Christian Drosten",
    "Lana Del Rey",
    "Heidi Klum",
    "Ciro Immobile",
    "Michelle Pfeiffer",
    "Charles Dickens",
    "Jim Parsons",
    "Michelle Obama",
    "Kim Jong-nam",
    "Louis XV of France",
    "Post Malone",
    "Drew Barrymore",
    "Nina Dobrev",
    "Richard Wagner",
    "Amanda Seyfried",
    "Vincent Cassel",
    "Mark Salling",
    "Vanessa Paradis",
    "Ursula von der Leyen",
    "Irina Shayk",
    "Mick Jagger",
    "Eddie Redmayne",
    "Romelu Lukaku",
    "Brie Larson",
    "Franz Joseph I of Austria",
    "Yūki Kaji",
    "Brigitte Bardot",
    "Bashar al-Assad",
    "Chris Cornell",
    "Saori Hayami",
    "Abdul Hamid II",
    "Asa Butterfield",
    "Francis of Assisi",
    "Eden Hazard",
    "Thomas Jefferson",
    "Jet Li",
    "David Lynch",
    "Luciano Pavarotti",
    "Jaden Smith",
    "Jamie Dornan",
    "Vivien Leigh",
    "Andrés Manuel López Obrador",
    "Jada Pinkett Smith",
    "Lisa Marie Presley",
    "Sergio Agüero",
    "Jessica Chastain",
    "Ben Stiller",
    "Arjen Robben",
    "Luis Sepúlveda",
    "Jennie",
    "Pol Pot",
    "Ji Chang-wook",
    "Rosamund Pike",
    "John Wayne",
    "Gordon Ramsay",
    "Dolph Lundgren",
    "James McAvoy",
    "Charles Bronson",
    "Eva Mendes",
    "Shawn Mendes",
    "Frank Abagnale",
    "Naomi Watts",
    "Bernard Arnault",
    "Catherine of Aragon",
    "Uthman",
    "Noam Chomsky",
    "Woody Harrelson",
    "Mac Miller",
    "Diane Kruger",
    "Sakamoto Ry≈çma",
    "Kurt Russell",
    "Baruch Spinoza",
    "Kim Seok-jin",
    "Martin Braithwaite",
    "Maximilien Robespierre",
    "Philip Seymour Hoffman",
    "Ezio Bosso",
    "Mark Twain",
    "Benito Juárez",
    "Qasem Soleimani",
    "Deng Xiaoping",
    "Miguel Herrán",
    "Tar≈ç As≈ç",
    "Zoe Saldana",
    "Iker Casillas",
    "Hailey Baldwin",
    "Josh Brolin",
    "Robert F. Kennedy",
    "Michel Foucault",
    "Martina Stoessel",
    "Jaime Lorente",
    "Peter III of Russia",
    "Mario Balotelli",
    "Philippe Coutinho",
    "Alec Baldwin",
    "Lyndon B. Johnson",
    "Luke Evans",
    "Hugh Grant",
    "Nick Jonas",
    "Lee Harvey Oswald",
    "Chiang Kai-shek",
    "Kublai Khan",
    "Paris Hilton",
    "Elijah Wood",
    "Richard I of England",
    "Jennifer Grey",
    "Silvio Berlusconi",
    "Erika Toda",
    "Christoph Waltz",
    "Andrés Iniesta",
    "Dan Bilzerian",
    "Shivaji",
    "Nicolas Anelka",
    "Haruka Ayase",
    "Till Lindemann",
    "John Forbes Nash Jr.",
    "Mario Casas",
    "Barbra Streisand",
    "Alexandre Dumas",
    "Natasha Richardson",
    "Hans Zimmer",
    "James Cameron",
    "Roberto Baggio",
    "Hernan Cortés",
    "Andrei Chikatilo",
    "Vasco da Gama",
    "J-Hope",
    "Whoopi Goldberg",
    "Anton Chekhov",
    "Liza Minnelli",
    "Sia",
    "Lev Yashin",
    "LP",
    "Chris Martin",
    "Toyotomi Hideyoshi",
    "Janis Joplin",
    "Bella Thorne",
    "Emma Thompson",
    "Michael Bloomberg",
    "Stevie Wonder",
    "Halle Berry",
    "Little Richard",
    "Björn Borg",
    "Richard Harris",
    "Norman Reedus",
    "Ahmed I",
    "Roger Moore",
    "Paul Newman",
    "Matt LeBlanc",
    "H. P. Lovecraft",
    "Steve Carell",
    "Michael Caine",
    "Thomas M√ºller",
    "Eric Cantona",
    "Nozomi Sasaki",
    "Stellan Skarsgård",
    "Yoko Ono",
    "Park Shin-hye",
    "Catherine de' Medici",
    "Michael Sheen",
    "Charles Bukowski",
    "Enrique Iglesias",
    "Dmitry Medvedev",
    "Julianne Moore",
    "Henry Ford",
    "Olga Kurylenko",
    "Sophie Turner",
    "Tobey Maguire",
    "Montesquieu",
    "Markus S√∂der",
    "Sukarno",
    "Christina Aguilera",
    "Willem Dafoe",
    "Steve Irwin",
    "Blanca Suárez",
    "Satomi Ishihara",
    "Valentina Tereshkova",
    "Zoë Kravitz",
    "Lavrentiy Beria",
    "Augusto Pinochet",
    "Izumi Sakai",
    "Henry VII of England",
    "Giannis Antetokounmpo",
    "Colin Firth",
    "Jeffrey Dean Morgan",
    "Jean-Paul Belmondo",
    "Itziar Ituño",
    "Émile Zola",
    "Haruki Murakami",
    "Fernando Alonso",
    "Aisha",
    "Roberto Carlos"
]