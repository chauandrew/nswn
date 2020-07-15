const admin = require('./init');

class SignedUrlModel {
    constructor() {
        this._bucket = admin.storage().bucket('nswn-eb5e5.appspot.com');
    }

    // Return a signed url for a given file, expiring in an hour
    async getSignedUrl(path) {
        // let expiry = new Date().getTime() + 3600;
        let config = { action: 'read', expires: '03-09-2491' }
        console.log(path)
        return this._bucket.file(path).getSignedUrl(config)
    }
}

module.exports = {SignedUrlModel: SignedUrlModel}