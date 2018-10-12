const path = require('path');

module.exports = {
    configureWebpack: () => ({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@store': path.resolve(__dirname, 'src/store'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@router': path.resolve(__dirname, 'src/router'),
            }
        },

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