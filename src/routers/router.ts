import { Router } from "express";
import onHeaders from "on-headers";
import axios from "axios";

const routes = Router();

routes.get("/pokemon/list", async (req, res) => {
  try {
    const url = "https://pokeapi.co/api/v2/ability/?limit=100&offset=0";
    const response = await axios.get(url);
    const data = response.data;
    if (data) {
      res.status(200).json({ data: data });
    } else {
      res.end("<h1>Error<h1>");
    }
  } catch (err) {
    res.end("<h1>Error<h1>");
  }
});

export default routes;
