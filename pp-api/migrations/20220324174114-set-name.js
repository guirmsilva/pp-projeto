module.exports = {
  async up(db) {
    return db.collection('users').updateMany({}, {$rename: {name: "fullName"}});
  },

  async down(db) {
    return db.collection('users').updateMany({}, {$rename: {fullName: "name"}});
  }
};
