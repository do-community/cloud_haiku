const tap = require('tap');
const syllable = require('syllable');

export function validateHaiku(filename, lines, meta) {
    tap.test(filename, () => {
        tap.test('should have a '.md, ' file extension', () => {
            tap.ok(/\.md$/.test(filename), 'extension does not match '.md, '');
        });

        tap.test('file metadata', () => {
            tap.test('should have layout equal to \'haiku\'', () => {
                tap.equal(meta.layout, 'haiku', 'layout metadata should equal \'haiku\'');
            });

            tap.test('should have non-blank title', () => {
                tap.equal(typeof meta.title, 'string', 'title metadata is missing');
            });

            tap.test('should have non-blank author', () => {
                tap.equal(typeof meta.author, 'string', 'author metadata is missing');
            });
        });

        tap.test('haiku structure', () => {
            tap.test('should have three lines', () => {
                tap.equal(lines.length, 3);
            });

            tap.test('should have five syllables on the first line', () => {
                tap.equal(syllable(lines[0]), 5);
            });

            tap.test('should have seven syllables on the second line', () => {});
        });
    });
}