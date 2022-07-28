const { response } = require('express')
const { getList, getListById, createList, updateList, deleteList } = require('./list.controllers')

const getAll = (req, res) => {
    const data = getList()
    res.status(200).json(data)
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id){
        const data = getListById(id)
        if(data.id){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: "Invalid ID"})
        }
    }else{
        res.status(400).jsom({message: "Invalid number"})
    }
}

const listCreate = (req, res) => {
    const data = req.body
    if( data.title && data.description){
        const response = createList(data)
        res.status(201).json(response)
    }else{
        res.status(400).json({message: 'Date invalid'})
    }
}

const listUpdate = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if( data.title && data.description ){
        const response = updateList(id, data)
        res.status(200).json(response)
    }else{
        res.status(400).json({message: 'Date invalid'})
    }
}

const listDelete = (req, res) => {
    const id = Number(req.params.id)
    if( typeof id === 'number'){
        const deleted = deleteList(id)
        if(deleted){
            res.status(204).json()
        }else{
            res.status(400).json({message: 'No ID found'})
        }
    }else{
        res.status(400).json({message: 'Invalid ID'})
    }
}

module.exports={
    getAll,
    getById,
    listCreate,
    listUpdate,
    listDelete
}