const Database = require('better-sqlite3');
const db = new Database('museum.db');

/* MAKE CHANGES TO OOUX STRUCTURE HERE */
db.exec(`
  CREATE TABLE IF NOT EXISTS exhibits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT
  );
`);

/* SEEDING DB WITH DATA ENTRIES */
const seedExhibits = [
  { title: 'The Starry Night', description: 'Famous painting by Van Gogh', image_url: '/starry-night.jpg' },
  { title: 'Mona Lisa', description: 'Iconic portrait by Da Vinci', image_url: '/mona-lisa.jpg' },
];

const stmt = db.prepare('INSERT INTO exhibits (title, description, image_url) VALUES (?, ?, ?)');
const count = db.prepare('SELECT COUNT(*) as count FROM exhibits').get();
if (count.count === 0) {
  seedExhibits.forEach(exhibit => stmt.run(exhibit.title, exhibit.description, exhibit.image_url));
  console.log('Database seeded!');
}

module.exports = db;