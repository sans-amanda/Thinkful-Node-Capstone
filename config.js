"use strict";

exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1/thinkful-node-capstone";
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || "mongodb://127.0.0.1/test-thinkful-node-capstone";
exports.PORT = process.env.PORT || 8080;