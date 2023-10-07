const { exec } = require('child_process');
const crypto = require('crypto');
// pages/api/deploy.js

export default function handler(req, res) {

  if (req.method === 'POST') {
    const payload = JSON.stringify(req.body);
    const signature = req.headers['x-hub-signature'];
    const expectedSignature = `sha1=${crypto
      .createHmac('sha1', process.env.Secret_Token)
      .update(payload)
      .digest('hex')}`;

    if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {

      const githubEvent = req.headers['x-github-event'];

      if (githubEvent === 'push') {
        // Execute a command to build the Next.js app

        exec('git pull origin master', (err, stdout, stderr) => {
          if (err) {
            console.log('Git pull err:', err);
            res.status(500).send('Git Pull failed: ' + stdout)
          }
          exec('yarn build', (buildError, buildStdout, buildStderr) => {
            if (buildError) {
              console.error(`Error building Next.js app: ${buildError}`);
              res.status(500).send('Error building Next.js app');
            } else {
              console.log('Next.js app built successfully');
              // Now trigger the deploy.sh script
              exec('pm2 restart 0', (StartError, startStdout, startStderr) => {
                if (StartError) {
                  console.error(`Error running start.sh: ${StartError}`);
                  res.status(500).send('Error running startment script');
                } else {
                  res.status(200).send('Webhook received, Next.js app built, and start initiated');
                }
              });
            }
          });

        })


        res.status(200).send('Webhook received and verified');
      } else {
        res.status(403).send('Invalid webhook signature');
      }

    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
}
