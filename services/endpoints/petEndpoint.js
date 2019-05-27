import{ axios } from "../../tests/index";

const DATAPOINT = "pet/";

export class PetEndpoint{
    getPet(petId){
        let url = `${process.env.API_SERVICE}${DATAPOINT}`;
        url+=petId;

        return new Promise((resolve) => {
            axios({
                method: 'get',
                url:url
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                resolve(error.response);
            });
        });
    }

}