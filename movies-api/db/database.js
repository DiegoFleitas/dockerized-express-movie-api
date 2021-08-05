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
                fs.readFile(USERS_PATH, 'utf8', (err, usersRaw) => {
                    if (err) {
                        console.log('error saving users!', err);
                        return;
                    }
                    const users = usersRaw ? JSON.parse(usersRaw) : [];
                    users.push(data);
                    fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2), function (err) {
                        if (err) return console.log(err);
                        console.log('users saved!');
                    });
                });
                break;
            case 'favoritos':
                fs.readFile(FAVORITOS_PATH, 'utf8', (err, favoritosRaw) => {
                    if (err) {
                        console.log('error saving favoritos!', err);
                        return;
                    }
                    const favoritos = favoritosRaw ? JSON.parse(favoritosRaw) : [];
                    favoritos.push(data);
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

    static select(db) {
        switch (db) {
            case 'users':
                // fs.writeFile(USERS_PATH, 'Hello World!', function (err) {
                //     if (err) return console.log(err);
                // });
                break;
            case 'favoritos':
                // fs.writeFile(FAVORITOS_PATH, 'Hello World!', function (err) {
                //     if (err) return console.log(err);
                // });
                break;
            default:
                throw new Error('Unknown db');
        }
    }

    static update(db) {
        switch (db) {
            case 'users':
                // fs.writeFile(USERS_PATH, 'Hello World!', function (err) {
                //     if (err) return console.log(err);
                // });
                break;
            case 'favoritos':
                // fs.writeFile(FAVORITOS_PATH, 'Hello World!', function (err) {
                //     if (err) return console.log(err);
                // });
                break;
            default:
                throw new Error('Unknown db');
        }
    }
}


module.exports = Database;