const fs = require('fs');

const path = require('path');

// Advanced Event Logging System

class TransactionLogger {

    constructor() {

    this.logPath = path.join(__dirname, 'transactions.log');

    }
