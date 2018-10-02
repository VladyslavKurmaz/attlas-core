module.exports = class Entity {

  //
  constructor(parent, id, descs){
    this.fs = require('fs');
    this.path = require('path');
    this.merger = require("object-merge-advanced");
    //
    this.parent = parent;
    this.items = {};
    this.id = id;
    this.props = {};
    this.descs = [];
    this.addDescs(descs);
    //
    // TODO add try/catch
    let f2read = null;
    const home = this.getHome();
    if (this.fs.lstatSync(home).isFile()) {
      // TOTHINK file can be non-json
      f2read = home;
    } else {
      const fn = this.path.join(home, '.content');
      if (this.fs.existsSync(fn)) {
        f2read = fn;
      }
    }
    if (f2read) {
      this.addDescs([JSON.parse(this.fs.readFileSync(f2read, 'utf8'))]);
    }
    // merge props section from all provided descs
    this.descs.forEach(function(desc) {
      if (desc.props) {
        this.props = this.merger(desc.props, this.props);
      }
    }.bind(this));
  }

  //
  dive(id) {
    // check if entity was already created
    if (this.items[id]) {
      return this.items[id];
    } else {
      const descs = [];
      this.descs.forEach(function(desc) {
        if (desc.items && desc.items[id]) {
          descs.push(desc.items[id]);
        }
      });
      if (this.fs.existsSync(this.path.join(this.getHome(), id)) || descs.length) {
        const e = new Entity(this, id, descs);
        this.items[id] = e;
        return e;
      }
    }
    return null;
  }

  //
  enum(cb) {
    const items = {};
    let ids = [];
    // merge ids from descs
    this.descs.forEach(function(desc) {
      if (desc.items) {
        ids = this.merger(ids, Object.keys(desc.items));
      }
    }.bind(this));
    // add ids from fs
    let fsIds = []
    this.fs.readdirSync(this.getHome()).forEach(file => {
      if (!['.content'].includes(file)) {
        fsIds.push(file);
      }
    });
    ids = this.merger(ids, fsIds);
    //
    ids.forEach(function(id) {
      if (cb(id)) {
        items[id] = this.dive(id);
      }
    }.bind(this));
    return items;
  }

  //
  getHome() {
    if (this.parent) {
      return this.path.join(this.parent.getHome(), this.id);
    }
    return this.id;
  }

  //
  addDescs(descs) {
    if (descs && descs.length){
      this.descs = descs.concat(this.descs);
    }
  }

  process(){
    return this.content;
  }
}