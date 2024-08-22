const express = require('express');
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(path.join(__dirname, './'))

const useRouter = (app) => {
  files.forEach(file => {
    app.use(`/api/${file.split('.')[0]}`, require(`./${file}`))
  })
}

module.exports = useRouter