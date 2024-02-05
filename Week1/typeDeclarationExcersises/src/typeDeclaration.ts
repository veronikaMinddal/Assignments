import axios from "axios";

let user1URL: string = "https://jsonplaceholder.typicode.com/users/1";
let usersURL: string = "https://jsonplaceholder.typicode.com/users";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const user1 = axios.get(user1URL).then((response) => {
return response.data as User;
}).catch((error) => {
    console.log(error)
});
const users = axios.get(usersURL).then((response) => {

    return response.data as User;
}).catch((error) => {
    console.log(error)
});

function printThisUser(user: User) {
    console.log(user);
}

