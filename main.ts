// One-Line Office Joke Laugh-Off — one original one-line joke about office life.
// The program writes the joke to /output/entry.txt (at most 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Our 'quick sync' has a calendar invite, an agenda, and a pre-read. It is a meeting wearing a fake moustache.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
