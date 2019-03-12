import { Request, Response } from "express";
import * as request from 'request-promise-native';

export class Routes {
    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).json({ data: { everything: true } });
            })

        app.route('/movies')
            .get((req: Request, res: Response) => {
                res.status(200).json({
                    movies: {
                        'deadpool': {
                            director: 'idk',
                            year: 2016
                        },
                        'deadpool2': {
                            director: 'me',
                            year: 2019
                        }
                    }
                })
            })

        app.route('/ask').get(async (req: Request, res: Response) => {
            let variable;
            const callback = (err, rsp, body) => {
                if (err) {
                    console.error('Error has occured', err);
                    res.status(500);
                }
                res.render('ask', { data: body })
            }

            request('http://localhost:3000/movies', callback);

            // request('http://localhost:3000/movies')
            //     .then(body => {
            //         console.log(body);
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });

            // try {
            //     const body = await request('http://localhost:3000/movies')
            // } catch (err) {
            //     console.error(err);
            // }



            // res.render('ask', { data: data })
        })

    }
}