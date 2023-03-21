const express = require("express");
const axios = require("axios");
const sessionController = require("../controllers/session");
const config = require("../config.json");

const path = require("path");
const env = require("dotenv").config({
	path: path.resolve(__dirname, "../.env"),
}).parsed;

const router = express.Router();

router.get("/auth", (req, res) => {
	if (req.query.oauth == "github") {
		const params = {
			scope: "read:user",
			client_id: env.GITHUB_CLIENT_ID,
		};

		const urlEncodedParams = new URLSearchParams(params).toString();
		res.redirect(`https://github.com/login/oauth/authorize?${urlEncodedParams}`);
	} else {
		res.status(400).json({ message: "Invalid OAuth provider." });
	}
});

router.get("/redirect", (req, res, next) => {
	try {
		const { code } = req.query;
		const options = { headers: { accept: "application/json" } };
		let accessToken;

		let body;
		let url;

		switch (req.query.oauth) {
			case "github":
				url = "https://github.com/login/oauth/access_token";
				body = {
					client_id: env.GITHUB_CLIENT_ID,
					client_secret: env.GITHUB_CLIENT_SECRET,
					code,
				};
				break;
		}

		axios
			.post(url, body, options)
			.then((response) => {
				console.log(response.data);
				res.redirect(`http://localhost:3000/?access_token=${response.data.access_token}`);
                return;
			})
			.catch((err) => {
				res.status(500).json({ err: err.message });
				return;
			});
	} catch (err) {
		console.error("Failed to create new user:", err);
		res.status(500).json({ message: "There was an error redirecting your request." });
	}

});

// Register a new user (returns a key)
router.post("/register", async (req, res, next) => {
	// try {
	//     const body = req.body;
	//     const result = await sessionController.createNewUser(body.email, body.password);

	//     if (result.error === "Invalid email") {
	//         res.status(400).json({ message: "Invalid email" });
	//     } else if (result.error === "User already exists") {
	//         res.status(400).json({ message: "User already exists" });
	//     } else if (result.error === "Incomplete input") {
	//         res.status(400).json({ message: "Incomplete input" });
	//     } else if (result.error === "Email already registered") {
	//         res.status(400).json({ message: "Email already registered" });
	//     } else {
	//         //Note: we don't need to authenticate the user here because the user is already created
	//         //Also, the role is not added to the table because it can change every session
	//         const token = await sessionController.generateAuthToken(body.email, 0); //the role is hardcoded to user
	//         res.status(201).json({ "accessToken": token });
	//     }

	// } catch (err) {
	//     console.error('Failed to create a new user:', err);
	//     res.status(500).json({ message: err.toString() });
	// }

	next();
});

// login a user (returns a auth key each time)
router.post("/login", async (req, res, next) => {
	// try {
	//     const body = req.body;
	//     const result = await sessionController.authenticateUser(body.email, body.password);

	//     if (result.error === "Email or password is missing") {
	//         res.status(400).json({
	//             error: result.error
	//         });
	//     }
	//     else if (result.error === "Invalid credentials") {
	//         res.status(401).json({
	//             error: result.error
	//         });
	//     }
	//     else {
	//         //generates a session token
	//         const token = await sessionController.generateAuthToken(body.email, 0); // force users to register with permission 0
	//         res.status(200).json({ "accessToken": token });
	//     }
	// } catch (err) {
	//     console.error('Failed to create new user:', err);
	//     res.status(500).json({ message: err.toString() });
	// }

	next();
});

module.exports = router;
