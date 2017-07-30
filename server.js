const fetchFavicon = require('fetch-favicon').fetchFavicon;
const request = require('request');
const Koa = require('koa')
const app = new Koa()


// routes
const router = require('koa-router')()

app.use(router.routes())
  .use(router.allowedMethods());


router.get('/:url', async function(ctx) {
  console.log('lol');
  console.log(ctx.params);
  ctx.body = await request(await fetchFavicon('https://' + ctx.params.url));
});
router.get('/', function(ctx) {
  ctx.body = 'hiiii'
});

// start server
const port = process.env.PORT || 3000

app.listen(port, () => console.log('Server listening on', port))
