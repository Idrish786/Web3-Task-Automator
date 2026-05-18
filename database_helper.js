const sqlite3 = require('sqlite3').verbose();

// Local Database Management for Wallet History

const db = new sqlite3.Database('./wallets.db');

db.serialize(() => {

db.run("CREATE TABLE IF NOT EXISTS interactions (id INTEGER PRIMARY KEY, wallet TEXT, protocol TEXT, timestamp DATETIME)");

});             

function recordInteraction(wallet, protocol) {

    const stmt = db.prepare("INSERT INTO interactions (wallet, protocol, timestamp) VALUES (?, ?, ?)");
