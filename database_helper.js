const sqlite3 = require('sqlite3').verbose();

// Local Database Management for Wallet History

const db = new sqlite3.Database('./wallets.db');

db.serialize(() => {
