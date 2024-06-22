"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const parseHtml = (htmlContent) => {
    const $ = cheerio_1.default.load(htmlContent);
    //name
    const nameSelector = "body > table:nth-of-type(2) > tbody > tr:nth-child(3) > td:nth-child(2)";
    let name = parseSpecificField($, nameSelector);
    // rollno
    const rollnoSelector = "body > table:nth-of-type(2) > tbody > tr:nth-child(2) > td:nth-child(2)";
    let rollno = parseSpecificField($, rollnoSelector);
    //marks 
    const markselector = "body > table:nth-of-type(3) > tbody > tr:nth-child(3) > td:nth-child(2)";
    let marks = parseSpecificField($, rollnoSelector);
    if (marks == 'N/A')
        return null;
    return {
        name, rollno, marks
    };
    //later rafactored this code by making a function
};
exports.parseHtml = parseHtml;
const parseSpecificField = (loadable, selector) => {
    const element = loadable(selector);
    return element.text().trim() || 'N/A';
};
