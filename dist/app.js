"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express = require("express");
const app = express();
app.use(express.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
