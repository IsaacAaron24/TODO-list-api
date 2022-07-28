const router = require('express').Router()
const listHttp = require('./list.http')

router.route('/list')
    .get(listHttp.getAll)
    .post(listHttp.listCreate)
router.route('/list/:id')
    .get(listHttp.getById)
    .put(listHttp.listUpdate)
    .delete(listHttp.listDelete)

module.exports = {
    router
}