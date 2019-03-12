import * as express from "express";
import {Routes} from './routes/routes';
import * as bodyParser from "body-parser";
import * as requestLib from 'request';

class App {

    public app: express.Application;
    public route: Routes = new Routes();

    constructor() {
        this.app = express(); 
        this.config(); 
        this.route.routes(this.app);
        
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set('view engine', 'ejs');

    }

}

export default new App().app;