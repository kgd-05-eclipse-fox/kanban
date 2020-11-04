const bcrypt = require('bcryptjs')

class BcryptUser{

    static hashPassword(data){
        let salt = bcrypt.genSaltSync(+process.env.SALT)
        let hash = bcrypt.hashSync(data, salt)

        return hash
    }

    static ConperPassword(pasLog, pasDB){
        return bcrypt.compareSync(pasLog, pasDB)
    }
}

module.exports = BcryptUser