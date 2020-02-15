import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index (req, res) {
    const { page = 1 } = req.query;

    const providers = await User.findAll({
      where: { provider: true },
      order: ['id'],
      limit: 20,
      offset: (page - 1)*20,
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }
      ],
    });

    if (page > Math.trunc(1 + providers.length/20)) {
      return res
        .status(400)
        .json({ error: `There are just ${Math.trunc(1 + providers.length/20)} pages` });
    }

    return res.json(providers);
  }
}

export default new ProviderController();
