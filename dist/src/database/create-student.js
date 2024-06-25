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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createStudent = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.student.create({
        data: {
            name: "pratham",
            rollno: 1009
        }
    });
});
exports.createStudent = createStudent;