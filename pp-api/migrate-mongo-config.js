const config = {
  mongodb: {
    url: "mongodb+srv://guirmsilva:2902bloodc2902@portifoliocluster.cwcxt.mongodb.net/portifoliodb?retryWrites=true&w=majority",

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false
};

module.exports = config;
