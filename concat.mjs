import concat from 'concat-files';

concat([
    './prebuild/src/TagFactory.d.ts',
    './prebuild/src/Translator.d.ts',
    './prebuild/src/Code.d.ts'
], './index.d.ts', function(error) {
    console.log(error);
});