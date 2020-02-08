// Importando model do controller
import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({ id, name, email, provider });
  }

  async update(req, res) {
    const id = req.userId;
    const {email, oldPassword} = req.body;

    const usuario = await User.findByPk(id);

    if (email && email !== usuario.email) {
      const userExists = await User.findOne({where: {email}});

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (email && email === usuario.email) {
      return res.status(400).json({ error: 'It is your current e-mail' });
    }

    if (oldPassword && !(await usuario.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { name, provider } = await usuario.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider
    });
  }
}

export default new UserController();
