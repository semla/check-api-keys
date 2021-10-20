# check-api-keys

## Usage
I use it to check my api-keys before deploying. See [example.js](example.js).

You can use the package inside an npm script. If you use `&&` between commands, the script will stop if a key is not succesful (the request returns something other than 200). Example `node check-my-keys.js && npm run deploy`.

## Installation

```bash
npm i check-api-keys -D
```

### Contributing
Feel free.
