import key from '../key.json'
const fs = require('fs');
const EditJson = (newKey: string,expire: string) => {

    //edit the key.json file in root directory and add the token
    key.token = newKey
    key.expires = expire

    //write the new key to the file
    console.log("Writing new key to file")
    //rewrite the file key.json
    const newJsonData = JSON.stringify(key);
    fs.writeFileSync('key.json', newJsonData);
    
    
    
}

export {EditJson}