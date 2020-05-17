const API = 'https://raw.githubusercontent.com/Konstantin108/project-Vue-test/master/approveReview.json';

class Quiz {
    constructor(api, container = ".quiz") {
        this._fetch(api);
    }

    _fetch(api) {
        return fetch(api)
            .then((response) => response.json())
            .then((response) => {
                console.log(api.contents)

            })
            .catch((error) => {
                console.log(error);
            });
    }
}

new Quiz(API);