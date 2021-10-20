async function checkAllKeys(optionsArr) {
  promiseArr = [];

  optionsArr.forEach(options => {
    promiseArr.push(checkKey(options))
  })
  return Promise.all(promiseArr)
               .then(
                 x => { x.map(y => console.log(y))
                        process.exitCode = 0
                      })
               .catch(
                 e => {console.log('inner err: ' +e)
                       process.exitCode = 1
                      })
}


async function checkKey(options) {
  console.log('running')
  return new Promise( (resolve, reject) => {
    https = require('https')
    let status
    req = https.request(options, res => {
      status = res.statusCode
      res.on('data', d => {
        //    process.stdout.write(d)
      })
      res.on('end', () => {
        if (status===200){
          return resolve(res.statusCode)
        }else
          return reject(status)
      })
    })

    req.on('error', error => {
      console.error(error)
      return Promise.reject(error)
    })

    req.end()
  })
}

module.exports = checkAllKeys
