
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,

        // Aws settings
        STORAGE_LOCATIONS:"local,aws",

        STORAGE_LOCAL_DRIVER:"local",
        STORAGE_LOCAL_ROOT:"local",

        STORAGE_AWS_KEY:"AKIAWJE2OQ3YDIV4VXN4",
        STORAGE_AWS_SECRET:"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",
        STORAGE_AWS_REGION:"eu-west-3",
        STORAGE_AWS_BUCKET:"charles-cantin",

        //CORS settings
        CORS_ENABLED: "true",
        CORS_ORIGIN: "true"
    };
};
