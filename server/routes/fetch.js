const express = require('express');
const fetchModel = require('../controllers/fetch.js');
const permissions = require('../utils/permission.js');
const { authenticateWithClaims } = require("../middleware/auth");
const config = require('../config.json').routes.fetch.fetch.GET;

const router = express.Router();

router.get('/phish/',
    async (req, res, next) => {
        let userLimit = config.max[0].amount
        try {
            userLimit = await permissions.reqAmmount(req.user.permission);
        } catch (e) {
            userLimit = config.max[0].amount;
        }

        let amount = (req.query.amount <= userLimit ? req.query.amount : userLimit);
        try {
            res.status(200).json(await fetchModel.find({}, amount, req.query.start));
            console.log(req.query.amount, req.query.start)
        } catch (err) {
            console.error('Failed to fetch:', err);
            res.status(500).json({ message: "Results not found" });
        }
        next();
    }
)

// router.post('/phish/',
//     async (req, res, next) => {
//         let userLimit = config.routes.fetch.endpoints.fetch.config.max[0].amount
//         try {
//             userLimit = await permissions.reqAmmount(req.user.permission);
//         } catch (e) {
//             userLimit = config.routes.fetch.endpoints.fetch.config.max[0].amount;
//         }

//         let amount = (req.query.amount <= userLimit ? req.query.amount : userLimit);
//         try {
//             res.status(200).json({ message: await fetchModel.find(req.body, amount, req.query.start) });
//             console.log(req.query.amount, req.query.start)
//         } catch (err) {
//             console.error('Failed to fetch:', err);
//             res.status(500).json({ message: "Results not found" });
//         }
//         next();
//     }
// )

router.get('/reports/',
    async (req, res, next) => {
        let userLimit = config.max[0].amount
        try {
            userLimit = await permissions.reqAmmount(req.user.permission);
        } catch (e) {
            userLimit = config.max[0].amount;
        }

        let amount = (req.query.amount <= userLimit ? req.query.amount : userLimit);
        try {
            res.status(200).json(await fetchModel.reportFind({}, amount, req.query.start));
            console.log(req.query.amount, req.query.start)
        } catch (err) {
            console.error('Failed to fetch:', err);
            res.status(500).json({ message: "Results not found" });
        }
        next();
    }
)

// router.post('/reports/',
//     async (req, res, next) => {
//         let userLimit = config.routes.fetch.endpoints.fetch.config.max[0].amount
//         try {
//             userLimit = await permissions.reqAmmount(req.user.permission);
//         } catch (e) {
//             userLimit = config.routes.fetch.endpoints.fetch.config.max[0].amount;
//         }

//         let amount = (req.query.amount <= userLimit ? req.query.amount : userLimit);
//         try {
//             res.status(200).json({ message: await fetchModel.find(req.body, amount, req.query.start) });
//             console.log(req.query.amount, req.query.start)
//         } catch (err) {
//             console.error('Failed to fetch:', err);
//             res.status(500).json({ message: "Results not found" });
//         }
//         next();
//     }
// )

// fetch information from data in the database
// router.post('/', /*authenticateWithClaims(0),*/
//     async (req, res, next) => {
//         try {
//             const result = await fetchModel.find(req.body);

//             /* 
//              * If an offset is provided to index, use it, else use default of 0
//              *
//              * If there is an amount in the POST request, use the amount, 
//              * otherwise use the default amount based on user permission
//              * 
//              * If the amount is over the max amount allowed by the user's permission,
//              * use the max amount allowed by the user's permission
//              */
//             const offset = Number(req.query.start) ? req.query.start : 0;

//             const RequestAmmount = (req.query.amount) ? req.query.amount : await permissions.reqAmmount(req.user.permission);
//             const fixedRequestAmmount = RequestAmmount <= await permissions.reqAmmount(req.user.permission) ?
//                                         RequestAmmount : await permissions.reqAmmount(req.user.permission);

//             const start = ((offset < result.length) ? offset : result.length);
//             const preEnd = Number(offset) + Number(fixedRequestAmmount);
//             const end = (preEnd < result.length ? RequestAmmount : Number(result.length)-Number(offset));
//             const finalResult = result.splice( start, end )

//             // console.log("test", finalResult)

//             res.status(200).json({ message: finalResult ? finalResult : "No results found" });
//         } catch (err) {
//             console.error('Failed to fetch:', err);
//             res.status(500).json({ message: "Results not found" });
//         }
//         next();
//     }
// );

// // get request version taking in two parameters: offset and amount
// router.get('/:offset/:amount', /*authenticateWithClaims(0),*/
//     async (req, res, next) => {
//         try {
//             const result = await fetchModel.find({});
//             const offset = Number(req.params.offset) ? req.params.offset : 0;
//             const RequestAmmount = (req.params.amount) ? req.params.amount : await permissions.reqAmmount(req.user.permission);
//             const fixedRequestAmmount = RequestAmmount <= await permissions.reqAmmount(req.user.permission) ?
//                                         RequestAmmount : await permissions.reqAmmount(req.user.permission);

//             const start = ((offset < result.length) ? offset : result.length);
//             const preEnd = Number(offset) + Number(fixedRequestAmmount);
//             const end = (preEnd < result.length ? RequestAmmount : Number(result.length)-Number(offset));
//             const finalResult = result.splice( start, end )

//             res.status(200).json({ message: finalResult ? finalResult : "No results found" });
//         } catch (err) {
//             console.error('Failed to fetch:', err);
//             res.status(500).json({ message: "Results not found" });
//         }
//         next();
//     }
// );

module.exports = router;