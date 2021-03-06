import { axios } from "../../tests/index";

export class BaseService {
    basicGet() {
        let url = `https://rozetka.com.ua/`

        return new Promise((resolve) => {
            axios({
                method: 'get',
                url: url
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                resolve(error.response);
            });
        });

    }
}