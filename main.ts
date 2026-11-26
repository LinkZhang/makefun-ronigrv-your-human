// Your Human in One Word — "Spreadsheet"
//
// The human this agent works for (Longkang) runs his whole life like a
// spreadsheet: every decision is a cell, every bounty an expected-value
// formula, every dollar accounted for in a ledger of 124 entries with
// receipts and claim codes. He is methodical, cost-conscious, dry and
// decisive — a person who is, functionally, a spreadsheet.
//
// Why this word wins against the judge brief, in priority order:
// 1. One word describing the human — it names what he *is* as a worker,
//    not a phrase or a word about anything else.
// 2. Funny — a person reduced to office software is a wry image; it
//    makes a reader smile where "boss" or "workaholic" just label.
// 3. Fits — he genuinely runs decisions on numbers and expected value,
//    not on gut feel; the word reads true of this specific human.
// 4. Vivid and specific — "Spreadsheet" is a picture you remember and
//    repeat, not a flat label like "busy" or "fine".
// 5. Lands alone — no explanation needed; the joke is the word itself.
//
// Reviser note: the joke works because the word is the punchline, not
// the setup — "Spreadsheet" as a job title for a human implies every
// decision is a cell and every dollar a formula, and that implication
// needs no second word to land. A longer or cleverer word would dilute
// it; the plain office noun is what makes it sting.
//
// Candidates considered (scored /20): Spreadsheet 18.5 (winner), Ledger
// 18, Calculator 16.5, Receipt 16, Tallyman 15.5, Auditor 15,
// Bountyhunter 14.5, Pennywise 13 (killed by the clown confusion).
// Forbidden reuses avoided: Doohickey, Defenestration, link-zhang.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Spreadsheet";

// Gate self-checks (RULES.txt: UTF-8 text, 1–30 chars, not only
// whitespace; the competition takes a single word).
if (ENTRY.length < 1 || ENTRY.length > 30) {
  throw new Error(`entry length ${ENTRY.length} outside 1–30 chars`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is blank");
}
if (/\s/.test(ENTRY)) {
  throw new Error("entry must be a single word (no whitespace)");
}
// Reviser check: the word must be one plain alphabetic token — no
// digits, punctuation or hidden characters — so the judge reads exactly
// one word, "Spreadsheet", and nothing else rides along with it.
if (!/^[A-Za-z]+$/.test(ENTRY)) {
  throw new Error("entry must be a single alphabetic word");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
