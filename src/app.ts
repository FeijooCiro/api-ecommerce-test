import express, { Application } from 'express'

import categoryRoute from './routes/categories.routes'
import productRoute from './routes/products.routes'

class App {
    private App: Application

    constructor(private PORT?: number | string){
        this.App = express()
        this.settings()
        this.routes()
    }

    settings() {
        this.App.set("port", this.PORT || process.env.PORT || 5000)
    }

    routes() {
        this.App.use('/categories', categoryRoute)
        this.App.use('/products', productRoute)
    }

    async Listen() {
        await this.App.listen(this.App.get('port'))
        console.log('Running server in port ', this.App.get('port'))
    }
}

export default App