export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end();
  }

  const uptime = typeof process !== 'undefined' && process.uptime ? Math.floor(process.uptime()) : null;

  return res.status(200).json({
    status: 'ok',
    uptime,
    timestamp: new Date().toISOString(),
  });
}
