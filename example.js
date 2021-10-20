// This is just an example.
// If you want to use it, you can rename this file to check-my-keys.js.
// Then it will not be commited since check-my-keys.js is in .gitignore.
// Then replace the values in optionsArr below.

// See the README.md for an example how to use it in a build-script

const checkAllKeys = require('./checkKeys')

main()

async function main () {

optionsArr = [
   {
    hostname: 'api.domain.com',
    port: 443,
    path: `/path?format=json&key=${your_key}`,
    method: 'GET'
  },
    {
    hostname: 'api.domain.com',
    port: 443,
    path: `/path?key=${your_other_key}&someoption=9`,
    method: 'GET'
    }
]

  await checkAllKeys(optionsArr);
}
