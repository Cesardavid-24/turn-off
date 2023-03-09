const { exec } = require('child_process') 
const path = require('path')

const pathFile = path.join(__dirname, 'shut-down/test') 

const turnOff = () => {
    exec(`start ${pathFile}`)
}

module.exports = { turnOff } 