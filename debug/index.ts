import Cement from 'cement';

interface IUser {
    firstName: string;
    lastName: string;
    biography: string;
}

interface IData {
    user: IUser;
}

interface IMethods {
    fullName: () => string;
}

const cement = new Cement<IData, IMethods>({
    el: '#app',
    methods: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`;
        },
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