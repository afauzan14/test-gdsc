const {Router} = require('express')

const users = [
    {
        'name': 'ojan',
        'age': 20
    }
]
/**
 * 
 * @param {Router} router 
 */
function setupUserHandler(router) {

    router.get('/', (req, res) => {
        res.json({
          "data": users
        })
    })

    return router
}

module.exports = {setupUserHandler}