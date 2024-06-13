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
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const result = (rollno, session, sem, examType) => __awaiter(void 0, void 0, void 0, function* () {
    let data = qs_1.default.stringify({
        'todo': 'post',
        'rollno': rollno,
        'session': session,
        'sem': sem,
        'examType': examType,
        'getdmc': 'SEARCH'
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://210.212.119.171/regresult/dmc.php',
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'http://210.212.119.171',
            'Referer': 'http://210.212.119.171/regresult/res.php',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'If-None-Match': '"TtE1NjjDkktiaEtYKfOAHdiTLBQ="',
            'If-Modified-Since': 'Thu, 21 Mar 2024 08:35:15 GMT'
        },
        data: data
    };
    const response = yield axios_1.default.request(config);
    console.log(response.data);
});
//cherios,nodejs-html-parser
