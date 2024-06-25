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
    let marks = parseSpecificField($, markselector);
    //individual subject marks
    const tbody = $("body > table:nth-child(7) > tbody"); // Adjust index if necessary
    const marksDetails = [];
    // Extract data from the tbody
    tbody.find('tr').each((index, ele) => {
        var _a, _b;
        const cells = $(ele).children('td');
        //  console.log(cells.length);
        //length 6 means in tr there are 6 td element 
        //and index is greater than 5
        if (cells.length === 6 && index > 6) { // Adjust index as needed to skip headers
            // if(index==7){
            let theoryMarks = "";
            let internalMarks = "";
            const marksObtained = (_a = $(cells[3]).html()) === null || _a === void 0 ? void 0 : _a.toString();
            marksObtained === null || marksObtained === void 0 ? void 0 : marksObtained.split('<br>').map((ele, index) => {
                (index == 0 ? theoryMarks = ele.trim() : internalMarks = ele.trim());
            });
            let theoryMax = "";
            let internalMax = "";
            const maxMarks = (_b = $(cells[2]).html()) === null || _b === void 0 ? void 0 : _b.toString();
            maxMarks === null || maxMarks === void 0 ? void 0 : maxMarks.split('<br>').map((ele, index) => {
                (index == 0 ? theoryMax = ele.trim() : internalMax = ele.trim());
            });
            const detail = {
                slNo: $(cells[0]).text().trim(),
                subject: $(cells[1]).text().trim(),
                maxMarks: theoryMax,
                marksObtained: theoryMarks,
                internaMaxMarks: internalMax,
                internalObtainedMarks: internalMarks,
                credits: $(cells[4]).text().trim(),
                gradePoint: $(cells[5]).text().trim()
            };
            marksDetails.push(detail);
        }
    });
    // Log the extracted marks details
    marksDetails.pop();
    // console.log('Marks Details:', marksDetails);
    if (marks == 'N/A')
        return null;
    return {
        name, rollno, marks,
        marksDetails
    };
    //later rafactored this code by making a function
};
exports.parseHtml = parseHtml;
const parseSpecificField = (loadable, selector) => {
    const element = loadable(selector);
    return element.text().trim() || 'N/A';
};
