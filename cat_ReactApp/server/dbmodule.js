const jsonFile = require('jsonFile')

exports.getAll = async () => {
    const fileData = await jsonFile.readFile('./data.json');
    return fileData
}

exports.getById = async (id) => {
    try {
        const fileData = await jsonFile.readFile('./data.json');
        let dataId = fileData.find(cat => cat.id == id);
        if (!dataId) {
            dataId = {}
        }
        return dataId;
    } catch (err) {
        console.log(err);
    }
}

exports.addUser = async (user) => {
    try {
        let saveNew = true
        const fileData = await jsonFile.readFile('./data.json');
        fileData.forEach((e)=>{
            if(user.id==e.id){
                saveNew =false
            }
        })
        if(!saveNew){
            return "error:have id";
        }
        fileData.push(user);
        const updateFile = await jsonFile.writeFile('./data.json', fileData)
        return "success";
    } catch (err) {
        console.log(err);
        return err
    }
}

exports.deleteById = async (catToRemoveId) => {
    try {
        const oldData = await jsonFile.readFile('./data.json')
        let remove = "error"
        const newData = await oldData.filter((e) => {
            if(e.id != catToRemoveId){
                return true
            }else{
                remove = "success"
                return false
            }
        })
        const updateFile = await jsonFile.writeFile('./data.json', newData)
        return (remove)
    } catch (err) {
        return err
    }
}

exports.getRandomCat = async ()=>{
    try{
        const cats = await jsonFile.readFile('./data.json')
        return cats[Math.floor(Math.random() * cats.length)]
    }catch(err){
        return err
    }
}