const fs = require('fs');

const path = require('path');

// Advanced Event Logging System

class TransactionLogger {

    constructor() {

    this.logPath = path.join(__dirname, 'transactions.log');

    }

logEvent(level, message) {

        const timestamp = new Date().toISOString();

   const logEntry = \[${timestamp}] [${level.toUpperCase()}] ${message}\n`;` 

    fs.appendFileSync(this.logPath, logEntry);

        console.log(logEntry.trim());

    }
