import jwt from "jsonwebtoken";
class authenticationController {
	//Génere un token
	async login(req, res) {
		const payload = { name: "John Mitch" };
		const token = await jwt.sign(payload, "monmotdepasse", {
			algorithm: "HS512",
			expiresIn: 60,
		});
		res.json({ token });
	}
}

export default new authenticationController();
