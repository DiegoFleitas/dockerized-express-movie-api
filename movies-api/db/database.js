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
                fs.readFile(USERS_PATH, 'utf8', (err, usersRaw) => {
                    if (err) {
                        console.log('error saving users!', err);
                        return;
                    }
                    const users = usersRaw ? JSON.parse(usersRaw) : [];
                    users.push(user);
                    fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2), function (err) {
                        if (err) return console.log(err);
                        console.log('users saved!');
                    });
                });
                break;
            case 'favoritos':
                const favorito = data;
                fs.readFile(FAVORITOS_PATH, 'utf8', (err, favoritosRaw) => {
                    if (err) {
                        console.log('error saving favoritos!', err);
                        return;
                    }
                    const favoritos = favoritosRaw ? JSON.parse(favoritosRaw) : [];
                    favoritos.push(favorito);
                    fs.writeFile(FAVORITOS_PATH, JSON.stringify(favoritos, null, 2), function (err) {
                        if (err) return console.log(err);
                        console.log('favoritos saved!');
                    });
                });
                break;
            default:
                throw new Error('Unknown db');
        }
    }

    static delete(db, data) {
        switch (db) {
            case 'users':
                const email = data.email;
                fs.readFile(USERS_PATH, 'utf8', (err, usersRaw) => {
                    if (err) {
                        console.log('error deleting users!', err);
                        return;
                    }
                    let users = usersRaw ? JSON.parse(usersRaw) : [];
                    var index = users.findIndex(user => {
                        return user.email === email;
                    });
                    if (index > -1) {
                        users.splice(index, 1);
                    }
                    fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2), function (err) {
                        if (err) return console.log(err);
                        console.log('users deleted!');
                    });
                });
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