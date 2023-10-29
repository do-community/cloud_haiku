const assert = require('assert');
import remark from 'remark';
import { validateHaiku } from './validateHaiku';
const frontmatter = require('remark-frontmatter');
const extract = require('remark-extract-frontmatter');
const yaml = require('yaml').parse;
const strip = require('strip-markdown');
const vfile = require('to-vfile');
const fs = require('fs');

const dir = './_haikus/';
const blockList = ['haikus.md'];

const files = fs.readdirSync(dir);

files.forEach(async(file) => {
    if (!blockList.includes(file)) {
        const [text, meta] = await processMarkdown(dir + file);
        const lines = text.split('\n').filter((line) => line !== '');

        if (meta.test !== false) {
            validateHaiku(file, lines, meta);
        }
    }
});

async function processMarkdown(filename) {
    return new Promise((resolve, reject) => {
        remark()
            .use(frontmatter)
            .use(extract, { yaml: yaml })
            .use(strip)
            .process(vfile.readSync(filename), (err, file) => {
                if (err) {
                    reject(err);
                } else {
                    resolve([file.toString(), file.data]);
                }
            });
    });
}