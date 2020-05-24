const port = 60474

export const config = {
    proxy: {
        host:
            (+global.location.port === port || !global.location.port)
                ? global.location.origin
            : (global.location.port && +global.location.port !== port)
                ? `http://localhost:60474`
            : `http://cr-dev.dock7.66bit.ru`
    },
    get: (key) => {
        return config.proxy[key]
    }
}