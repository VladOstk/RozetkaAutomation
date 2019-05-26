import{
    axios
} from "../../tests/index";

export class petEndpoint{
    getPet(petId){
        let url = "https://petstore.swagger.io/v2/pet/";
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