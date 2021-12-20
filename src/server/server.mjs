import request from "request";
import cheerio from "cheerio";
import express from "express";

const app = express();

//mw-changeslist-date, history-size, mw-plusminus-pos, bdi
export async function getUserTweets() {
  console.log("inside");
  let object = [];
  const html = await request(
    "http://en.wikipedia.org/w/index.php?title=Barack_Obama&offset=&limit=50&action=history",
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
        return object;
      }
    }
  );
  return html;
}

export const main = await getUserTweets();
