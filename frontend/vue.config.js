module.exports = {
    configureWebpack: () => ({
        devServer: {
            host: 'localhost',
            port: 8080,
            proxy: {
                '/api': {
                    target: 'http://localhost:3000/api',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                },
            }
        },
    }),
};