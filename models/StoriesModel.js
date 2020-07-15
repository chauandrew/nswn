const admin = require('./init');

class StoriesModel {
    constructor() {
        this._collection = admin.firestore().collection('stories');
        this._bucket = admin.storage().bucket();
    }

    // TODO: Add pagination
    async getAll(page) {
        if (page == null) {
            return this._collection.get();
        }
    }
}

module.exports = {StoriesModel:StoriesModel};