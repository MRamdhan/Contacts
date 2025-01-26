const contact = require('./contacts');

const main = async() => {
    const nama = await contact.tulisPertanyaan('Masukan nama anda : ');
    const email = await contact.tulisPertanyaan('Masukan email anda : ');
    const noHp = await contact.tulisPertanyaan('Masukan noHp anda : ');

    contact.simpanContact(nama, email, noHp);
}

main();