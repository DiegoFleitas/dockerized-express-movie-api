var fs = require('fs');

const USERS_PATH = 'db/users.txt';
const FAVORITOS_PATH = 'db/favoritos.txt';

/**
 *
 */
class Database {
    static insert(db, data) {
        switch (db) {
            case 'users':
                const user = data;
                const usersRaw = fs.readFileSync(USERS_PATH, 'utf8');
                const users = usersRaw ? JSON.parse(usersRaw) : [];
                users.push(user);
                fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
                console.log('users saved!');
                break;
            case 'favoritos':
                const favorito = data;
                const favoritosRaw = fs.readFileSync(FAVORITOS_PATH, 'utf8');
                const favoritos = favoritosRaw ? JSON.parse(favoritosRaw) : [];
                favoritos.push(favorito);
                fs.writeFileSync(FAVORITOS_PATH, JSON.stringify(favoritos, null, 2));
                console.log('favoritos saved!');
                break;
            default:
                throw new Error('Unknown db');
        }
    }

    static delete(db, data) {
        switch (db) {
            case 'users':
                const email = data.email;
                const usersRaw = fs.readFileSync(USERS_PATH, 'utf8');
                let users = usersRaw ? JSON.parse(usersRaw) : [];
                var index = users.findIndex(user => {
                    return user.email === email;
                });
                if (index > -1) {
                    users.splice(index, 1);
                }
                fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));
                console.log('users deleted!');
                break;
            case 'favoritos':
                console.log('todo..');
                break;
            default:
                throw new Error('Unknown db');
        }
    }

    // returns first match
    static where(db, column, value) {
        switch (db) {
            case 'users':
                const usersRaw = fs.readFileSync(USERS_PATH, 'utf8');
                let users = usersRaw ? JSON.parse(usersRaw) : [];
                const entry = users.find(user => {
                    return user[column] === value;
                });
                return entry;
                break;
            case 'favoritos':
                console.log('todo..');
                break;
            default:
                throw new Error('Unknown db');
        }
    }
}


module.exports = Database;