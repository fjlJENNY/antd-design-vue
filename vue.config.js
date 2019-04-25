const path = require('path');
const fs = require('fs');


function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = {
  chainWebpack:(config)=>{
    config.module.rules.delete('eslint');
    config.resolve.alias
        .set('@',resolve('src'))
        .set('@component',resolve('src/components'))
  }
}