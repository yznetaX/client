import axios from 'axios';

const url = 'api/movies/';

class MoviesService {
    // Get Mixs
    static getMovies() {
        /*eslint-disable*/
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(movie => ({
                        ...movie,
                        createdAt: new Date(movie.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }


    // static getOneMovies() {
    //     /*eslint-disable*/
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const res = await axios.get(`${url}${name}`);
    //             const data = res.data;
    //             resolve(
    //                 data.map(movie => ({
    //                     ...movie,
    //                 }))
    //             );
    //         } catch (err) {
    //             reject(err);
    //         }
    //     })
    // }
}

export default MoviesService;