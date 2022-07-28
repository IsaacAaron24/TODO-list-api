const listDB = [{
    "id": 1,
    "title": "",
    "description": "",
    "finished": false
}]

const getList = () => {
    return listDB
};

const getListById = (id) => {
    const filteredDB = listDB.filter( i => i.id === id)
    return filteredDB[0]
}

const createList = (listObj) =>{
    if(listDB.length === 0){
        const newList = {
            id: 1,
            title: listObj.title,
            description: listObj.description,
            finished: listObj.finished,
        }
        listDB.push(newList)
        return newList
    }
    const newList = {
        id: listDB[listDB.length - 1].id + 1,
        title: listObj.title,
        description: listObj.description,
        finished: listObj.finished,
    }
    listDB.push(newList)
    return newList
}

const updateList = (id, data) => {
    const index = listDB.findIndex( i => i.id === id)
    if(index !== -1){
        listDB[index] = data
        return listDB[index]
    }else{
        createList(data)
        return listDB.at(-1)
    }
}

const deleteList = (id) => {
    const index = listDB.findIndex(i => i.id === id)
    if(index !== -1){
        listDB.splice(index, 1)
        return true
    }
    return false
}

module.exports = {
    getList,
    getListById, 
    createList,
    updateList,
    deleteList
}