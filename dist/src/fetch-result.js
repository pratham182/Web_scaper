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
exports.fetch_result = void 0;
const axios_1 = __importDefault(require("axios"));
const qs_1 = __importDefault(require("qs"));
const parse_html_1 = require("./parse-html");
const fetch_result = (rollno, session, sem, examType) => __awaiter(void 0, void 0, void 0, function* () {
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
        url: process.env.url,
        headers: {
            'Accept': process.env.HEADER_ACCEPT,
            'Accept-Language': process.env.HEADER_ACCEPT_LANGUAGE,
            'Cache-Control': process.env.HEADER_CACHE_CONTROL,
            'Connection': process.env.HEADER_CONNECTION,
            'Content-Type': process.env.HEADER_CONTENT_TYPE,
            'Origin': process.env.HEADER_ORIGIN,
            'Referer': process.env.HEADER_REFERER,
            'Upgrade-Insecure-Requests': process.env.HEADER_UPGRADE_INSECURE_REQUESTS,
            'User-Agent': process.env.HEADER_USER_AGENT,
            'If-None-Match': process.env.HEADER_IF_NONE_MATCH,
            'If-Modified-Since': process.env.HEADER_IF_MODIFIED_SINCE
        },
        data: data
    };
    try {
        const response = yield axios_1.default.request(config);
        const parsedData = (0, parse_html_1.parseHtml)(JSON.stringify(response.data));
        console.log(parsedData);
        if (parsedData) {
            return parsedData;
        }
    }
    catch (err) {
        return null;
    }
});
exports.fetch_result = fetch_result;
