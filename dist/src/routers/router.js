"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const routes = (0, express_1.Router)();
routes.get("/pokemon/list", async (req, res) => {
    try {
        const url = "https://pokeapi.co/api/v2/ability/?limit=100&offset=0";
        const response = await axios_1.default.get(url);
        const data = response.data;
        if (data) {
            res.status(200).json({ data: data });
        }
        else {
            res.end("<h1>Error<h1>");
        }
    }
    catch (err) {
        res.end("<h1>Error<h1>");
    }
});
exports.default = routes;
//# sourceMappingURL=router.js.map