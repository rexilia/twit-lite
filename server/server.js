const express = require("express");
const path = require("path");
const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
let object = [];

app.get("/", async (req, res) => {
  await request(
    "https://en.wikipedia.org/w/index.php?title=Adolf_Hitler&offset=&limit=20000&action=history",
    (err, res, body) => {
      if (!err && res.statusCode == 200) {
        const $ = cheerio.load(body);
        $(".mw-changeslist-date").each((index, item) => {
          object[index] = { date: item.children[0].data };
        });
        $(".history-size").each((index, item) => {
          object[index].size = item.children[0].data;
        });
        $(".mw-plusminus-pos").each((index, item) => {
          object[index].changed = item.children[0].data;
        });
        $("bdi").each((index, item) => {
          object[index].name = item.children[0].data;
        });
        console.log(object);
      }
    }
  );
});

app.get("/results", async (req, response) => {
  axios(
    "https://en.wikipedia.org/w/index.php?title=Adolf_Hitler&offset=&limit=20000&action=history"
  ).then((res) => {
    const $ = cheerio.load(res.data);
    $(".mw-changeslist-date").each((index, item) => {
      object[index] = { date: item.children[0].data };
    });
    $(".history-size").each((index, item) => {
      object[index].size = item.children[0].data;
    });
    $(".mw-plusminus-pos").each((index, item) => {
      object[index].changed = item.children[0].data;
    });
    $("bdi").each((index, item) => {
      object[index].name = item.children[0].data;
      object[index].uri = encodeURI(item.children[0].data);
    });
    response.json(object);
  });
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
