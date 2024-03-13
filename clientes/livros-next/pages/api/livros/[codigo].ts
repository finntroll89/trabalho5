import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      const codigoLivro = Number(codigo);

      if (isNaN(codigoLivro)) {
        res.status(400).end(); 
        return;
      }

      controleLivro.excluir(codigoLivro);
      res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};
