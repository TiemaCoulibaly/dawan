import jwt from 'jsonwebtoken';
// smenut@dawan.fr
// npm i jsonwebtoken

class AuthenticationController {

    async login(req, res) {
        const payload = { name: 'John Doe' };

        const token = await jwt.sign(payload, 'commentestvotreblanquette', {
            algorithm: 'HS512',
            expiresIn: 60
        });

        res.json({ token });
    }

}

export default new AuthenticationController();