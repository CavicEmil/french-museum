const Database = require('better-sqlite3');
const db = new Database('museum.db');

/* MAKE CHANGES TO OOUX STRUCTURE HERE */
db.exec(
  `CREATE TABLE IF NOT EXISTS exhibits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    year_of_creation INTEGER NOT NULL,
    short_description TEXT,
    gallery TEXT NOT NULL,
    time_frame TEXT NOT NULL,
    image TEXT
  )`
);

/* SEEDING DB WITH DATA ENTRIES */
const seedExhibits = [
  {
    title: 'Making Sense',
    artist: 'Aysha Amin',
    year_of_creation: '2025',
    short_description: 'Presents an insight into a living archive of homemaking, rhizomatic thinking, and landscape memories.', 
    gallery: 'Gallery 3', 
    time_frame: '05.03 - 10.04', 
    image: '/images/exsense.jpg'
  },
  { 
    title: 'WORKS+WORDS', 
    artist: 'Arkitekturbiennalen', 
    year_of_creation: '2026', 
    short_description: 'Alongside artist, and architect Aysha Amins solo exhibition Making Sense,experimental architecture will be presented in collaboration with the architecture biennale WORKS+WORDS.', 
    gallery: 'Gallery 1', 
    time_frame: '05.03 - 10.04', 
    image: '/images/exworks1.jpg' 
  },

  { 
    title: 'KP & SPRING', 
    artist: 'Various Artists', 
    year_of_creation: '2026', 
    short_description: 'This years Easter exhibition shows a clear move towards miniature works, colours, boldness and a renewed focus on playfulness and experimentation with materials.', 
    gallery: 'Gallery 2', 
    time_frame: '28.03 - 17.05', 
    image: '/images/exspring1.jpg' 
  },

  { 
    title: 'Ooze: Afgang', artist: 'Fie Hansigne, Carl Otto Linde & Ulf Stubbe Teglbjærg', 
    year_of_creation: '2026', 
    short_description: 'The exhibition shows works created by graduating students from Det Jyske Kunstakademi and is part of the DNA of Kunsthal Aarhus exhibition programme.', 
    gallery: 'UPCOMING', 
    time_frame: '24.04 - 24.05', 
    image: '/images/afgang.jpg' 
  },

  { 
    title: 'A Flag is a Piece of Fabric', 
    artist: 'Tiger Tanuki & Malene Wagner', 
    year_of_creation: '2017', 
    short_description: 'Until May 2026, Ay-Os Rainbow Landscape 2025 will continue to wave over the Sculpture Park.', 
    gallery: 'UPCOMING', 
    time_frame: '08.05.2026 - 14.05.2027', 
    image: '/images/flagfabric.jpg' 
  },

  { 
    title: 'The Hall of Failure', 
    artist: 'Anders Bonnesen, Sarah Trahan, Maria Viftrup, FACTORY WORKERS UNITE (Tina Helen & Søren Thilo Funder).', 
    year_of_creation: '2022', 
    short_description: 'The Hall of Failure unfolds across all the galleries and in the park surrounding the building. It takes a critical look at perfectionism and our approach to failure through new works by several prominent artists.', 
    gallery: 'UPCOMING', 
    time_frame: '26.06.2026 - 03.01.2027', 
    image: '/images/failure.jpg' 
  },

];

const stmt = db.prepare('INSERT INTO exhibits (title, artist, year_of_creation, short_description, gallery, time_frame, image) VALUES (?, ?, ?, ?, ?, ?, ?)');

const count = db.prepare('SELECT COUNT(*) as count FROM exhibits').get();
if (count.count === 0) {
  seedExhibits.forEach(exhibit => stmt.run(exhibit.title, exhibit.artist, exhibit.year_of_creation, exhibit.short_description, exhibit.gallery, exhibit.time_frame, exhibit.image));
  console.log('Database seeded!');
}

module.exports = db;
