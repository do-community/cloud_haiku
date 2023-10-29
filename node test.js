import { describe, it } from 'mocha'; // Import describe and it from Mocha
import { assert } from 'chai'; // Import assert from Chai
import remark from 'remark';
import frontmatter from 'remark-frontmatter';
import extract from 'remark-extract-frontmatter';
import yaml from 'yaml';
import strip from 'strip-markdown';
import vfile from 'to-vfile';
import syllable from 'syllable';
import fs from 'fs';

const dir = './_haikus/';
const blockList = ['haikus.md'];

async function processMarkdown(filename) {
    return new Promise((resolve, reject) => {
        remark()
            .use(frontmatter)
            .use(extract, { yaml })
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

async function validateHaiku(filename, lines, meta) {
    describe(filename, () => {
        it("should have a '.md' file extension", () => {
            assert.ok(/\.md$/.test(filename), "extension does not match '.md'");
        });

        describe('file metadata', () => {
            it("should have layout equal to 'haiku'", () => {
                assert.equal(meta.layout, 'haiku', "layout metadata should equal 'haiku'");
            });

            it('should have non-blank title', () => {
                assert.equal(typeof meta.title, 'string', 'title metadata is missing');
            });

            it('should have non-blank author', () => {
                assert.equal(typeof meta.author, 'string', 'author metadata is missing');
            });
        });

        describe('haiku structure', () => {
            it('should have three lines', () => {
                assert.equal(lines.length, 3);
            });

            it('should have five syllables on the first line', () => {
                assert.equal(syllable(lines[0]), 5);
            });

            it('should have seven syllables on the second line', () => {
                assert.equal(syllable(lines[1]), 7);
            });

            it('should have five syllables on the third line', () => {
                assert.equal(syllable(lines[2]), 5);
            });
        });
    });
}

async function main() {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        if (!blockList.includes(file)) {
            const [text, meta] = await processMarkdown(dir + file);
            const lines = text.split('\n').filter((line) => line !== '');

            if (meta.test !== false) {
                await validateHaiku(file, lines, meta);
            }
        }
    }
}

main(); // Call the main function to start the validation process