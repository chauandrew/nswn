const StoriesModel = require('../models/StoriesModel');
const SignedUrlModel = require('../models/SignedUrlModel');

class StoriesService {
    constructor() {
        this._storiesModel = new StoriesModel.StoriesModel();
        this._signedUrlModel = new SignedUrlModel.SignedUrlModel();
    }

    getAllStories() {
        let self = this;
        return self._storiesModel.getAll().then(function(stories) {
            let data = [];
            stories.forEach(function(story) {
                let curr = story.data();
                curr.src = self._signedUrlModel.getSignedUrl(curr.src);
                data.push(curr);
            })
            return data;
        })
    }
}

module.exports = {StoriesService: StoriesService};