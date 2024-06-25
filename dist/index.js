"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const create_student_1 = require("./src/database/create-student");
const fetch_result_1 = require("./src/fetch-result");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let overall_result = [];
    let iterate_rollno = 210010130001;
    let response = null;
    do {
        response = yield (0, fetch_result_1.fetch_result)(iterate_rollno.toString(), "DEC2023", "5", "MAIN");
        if (response) {
            // console.log(overall_result);
            overall_result.push(response);
        }
        iterate_rollno++;
        if (iterate_rollno == 210010130073) {
            iterate_rollno = 210010139001;
        }
    } while (iterate_rollno == 210010130001);
});
exports.main = main;
(0, exports.main)();
//send batch request
//30 request
(0, create_student_1.createStudent)();
