


module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"],
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    },
    compiler: {
        styledComponents: true,
      },
      
experimental:{
    appDir: true
},
    // webpack(config) {
    //     config.infrastructureLogging = { debug: /PackFileCache/ }
    //     return config;
    //   }
};

