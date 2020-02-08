import Cement from 'cement';

// Instanciate project
const cement = new Cement({
    el: '#app',
    methods: {
        totalUsers: function () {
            return cement.data.builders.length;
        }
    },
    data: {
        user: {
        	firstName: 'Benjamin',
            lastName: 'Akar',
            biography: 'I code things'
        },
    }
});

globalThis['cement'] = cement;

console.log(cement.data.user.fullName());