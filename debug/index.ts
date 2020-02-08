import Cement from 'cement';

// Instanciate project
const cement = new Cement({
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
        hello: 'World'
    }
});

globalThis['cement'] = cement;

console.log(cement.methods.builders()); // 2
console.log(cement.data.builders[0]); // {name: "Jeff", age: 36}
console.log(cement.data.hello); // World