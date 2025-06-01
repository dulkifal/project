import validateAdmin from '../../../lib/validateAdmin';

export default async function handler(req, res) {
  const isValid = await validateAdmin(req, res);
  
  if (!isValid) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Your protected API route logic here
}