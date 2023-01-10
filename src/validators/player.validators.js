const { check, validationResult, query } = require('express-validator');

const validateCreatePlayer = async (req, res, next) => {

    await check('playName', 'Name is required').exists().run(req);
    await check('playName', 'Name should be a string').isString().run(req);
    await check('playName', 'Name length should be in range[2-100]').isLength({ min: 2, max: 100 }).run(req);

    await check('playerTeam', 'Team name is required').exists().run(req);
    await check('playerTeam', 'Team name should be a string').isString().run(req);
    await check('playerTeam', 'Team name length should be in range[2-100]').isLength({ min: 2, max: 100 }).run(req);
    
    await check('playerCountry', 'Country is required').exists().run(req);
    await check('playerCountry', 'Country should be a string').isString().run(req);
    await check('playerCountry', 'Country length should be in range[2-100]').isLength({ min: 2, max: 100 }).run(req);
    
    await check('totalMatch', 'Total match is required').exists().run(req);
    await check('totalMatch', 'Total match should be a number').isNumeric().run(req);
    
    await check('trophy', 'Trophy is required').exists().run(req);
    await check('trophy', 'Trophy should be a number').isNumeric().run(req);

    await check('dateOfBirth', 'Date of birth is required').exists().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).send({ errors: errors.array() })
    } else {
        next()
    }
}

const validateGetPlayer = async (req, res, next) => {
    
    // * creating a custom validator for minimum and maximum value, where value = req and value = req.query.limit
    await query('skip', 'Skip is required in query params').optional().isNumeric().run(req);
    await query('limit', 'Limit is required in query params').optional().isNumeric().custom((value) => value > 100 || value < 1 ? false : true).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).send({ errors: errors.array() })
    } else {
        next()
    }
}

module.exports = {
    validateCreatePlayer,
    validateGetPlayer
}