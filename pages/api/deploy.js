// pages/api/deploy.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the POST request here
      res.status(200).json({ message: 'Deployment endpoint accessed successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
}
  