import { a as patchBrowser, b as bootstrapLazy } from './meetup-87acc331.js';
patchBrowser().then(function (resourcesUrl) {
    return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], { resourcesUrl: resourcesUrl });
});
