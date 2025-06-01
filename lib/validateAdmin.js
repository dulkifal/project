import { auth } from './firebase';

export default async function validateAdmin(req, res) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return false;
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await auth.verifyIdToken(token);
    
    if (!decodedToken) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Auth error:', error);
    return false;
  }
}