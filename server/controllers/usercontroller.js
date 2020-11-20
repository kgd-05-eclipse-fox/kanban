const { User } = require('../models/index')
const { compare } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken')

class UserController {
	static async register(req, res, next) {
		try {
			const newUser = req.body
			const createNewUser = await User.create(newUser)
			res.status(201).json({
				id: createNewUser.id,
				email: createNewUser.email
			})
		} catch (error) {
			const err = []
			error.errors.forEach(element => {
				err.push(element.message)
			});
			res.status(400).json({ error: err.join(',') })
		}
	}

	static async login(req, res, next) {
		try {
			const userLogin = req.body
			const findUser = await User.findOne({
				where: {
					email: userLogin.email
				}
			})
			if (!findUser) {
				res.status(401).json({ error: 'Wrong Email or Password' })
			} else if (!compare(userLogin.password, findUser.password)) {
				res.status(401).json({ error: 'Wrong Email or Password' })
			} else {
				const token = createToken({
					id: findUser.id,
					email: findUser.email
				})
				res.status(200).json({ id: findUser.id, email: findUser.email, token })
			}
		} catch (error) {
			console.log(error)
			res.status(400).json(error)
		}
	}

	static async gLogin(req, res, next) {
		let { gToken } = req.body
		console.log(req.body)
		try {
			const client = new OAuth2Client(process.env.GOAUTH);
			async function verify() {
				const ticket = await client.verifyIdToken({
					idToken: gToken,
					audience: process.env.GOAUTH,  // Specify the CLIENT_ID of the app that accesses the backend
					// Or, if multiple clients access the backend:
					//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
				});
				const payload = ticket.getPayload();
				const userid = payload['sub'];
				const email = payload.email
				// If request specified a G Suite domain:
				// const domain = payload['hd'];
				const find = await User.findOne({
					where: {
						email: payload.email
					}
				})
				if (find) {
					console.log('di find')
					const token = createToken({
						id: find.id,
						email: payload.email
					})
					res.status(200).json({ accessToken: token, email: payload.email })
				} else {
					console.log('di else')
					const newUser = await User.create({
						email,
						password: 'random'
					})
					if (newUser) {
						console.log('di newUser')
						let access_token = { id: newUser.id, email: newUser.email }
						res.status(200).json({ accessToken: access_token })
					}
				}
			}
			verify().catch(console.error);
		} catch (error) {
			next(error)
		}
	}
}

module.exports = UserController