import{
    axios
} from "../../tests/index";

export class petEndpoint{
    addPet(){
        let url = "https://petstore.swagger.io/v2";
        url+="/pet";

        return new Promise((resolve) => {
            axios({
                method: 'post',
                url:url

            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                resolve(error.response);
            });
        });
    }

}