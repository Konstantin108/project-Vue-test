const API = 'https://github.com/Konstantin108/project-Vue-test';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError();
                })
        },
    },
    mounted() {
        console.log(this);
    }
});