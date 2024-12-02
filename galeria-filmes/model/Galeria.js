import Sequelize from 'sequelize'
import connection from '../config/sequelize-config.js'

const Imagem = connection.define('imagens', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    file: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})  
Imagem.sync({force:false})
export default Imagem;