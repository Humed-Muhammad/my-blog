const dev = process.env.NODE_ENV !== 'production'

export const url = dev ? '/api' : 'https://humedfables.net/api'
