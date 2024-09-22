import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  if (!event.node || !event.node.req || !event.node.res) {
    
    return;
  }

  const headers = event.node.req.headers || {};

  event.node.res.setHeader('Access-Control-Allow-Origin', '*');
  event.node.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  event.node.res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (event.node.req.method === 'OPTIONS') {
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }
});
