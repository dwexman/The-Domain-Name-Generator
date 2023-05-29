/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var pronoun = ["the", "our", "yours"];
var adj = ["great", "big", "excellent", "best"];
var noun = ["jogger", "racoon", "athlete", "teacher", "programmer"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
    }
  }
}
