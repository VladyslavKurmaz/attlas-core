
module.exports = function(express, app, jsv, reply, helpers) {

  this.routerPath = '/api/v1';
  this.router = express.Router({mergeParams: true});
  // component specific declarations ===========================================
  
  // api enpoint info ==========================================================
  this.router.route('/')
    // version info
    .get(function (req, res) {
      return res.json(reply.success({id:'v1'}));
    });

  // component specific routers ================================================
  //
  const validate = require('express-validation');
  const validations = require('./validations');

  this.router.route('/*')
    // get list of available flows
    .get(validate(validations.get), function (req, res) {
      console.log(req.query);
      // check requested path
      const path = req.params[0];
      const filtered = path.split('/').filter(x => x);
      // check depth
      let depth = req.query.depth;
      // create root entiry
      const Entity = require('./entity');
      let root = new Entity(null, 'data', null);
      if (filtered.every( item => {
        root = root.dive(item);
        return (root != null);
      })) {
        const f = (d, e) => {
          const r = {};
          if (d > 0) {
            r.props = e.props;
          }
          if (d > 1) {
            r.items = {};
            const items = e.enum( (id) => { return true; });
            Object.keys(items).forEach((k) => {
              r.items[k] = f(d-1, items[k])
            });
          }
          return r;
        };
        /*
        const r = {
          props: e.props,
          items: e.enum( (id) => {
            return true;
          })
        };
        */
        return res.json(reply.success(f(depth, root)));
      }
      return res.status(404).json(reply.fail(`object not found: ${path}`));
    })
    .post(function (req, res) {
      let r = [];
      return res.json(reply.success(r));
    })
    .put(function (req, res) {
      let r = [];
      return res.json(reply.success(r));
    })
    .delete(function (req, res) {
      let r = [];
      return res.json(reply.success(r));
    });

  // register router ===========================================================
  app.use(this.routerPath, this.router);
  return this;
}

