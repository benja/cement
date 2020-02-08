import Cement from 'cement';

// Instanciate project
const cement = new Cement({
    el: '#app',
    methods: {
        builders: function () {
            return cement.data.builders.length;
        }
    },
    data: {
        builders: [
            {
                name: 'Jeff',
                age: 36
            },
            {
                name: 'Kevin',
                age: 26
            },
        ],
        hello: 'World',
        cement: {
            message: 'A logic based reactive JavaScript library that binds your application together.',
        },
    }
});

globalThis['cement'] = cement;