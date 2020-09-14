import { customers, listProfile } from './testDataApi';

const required = [
    "fullname",
    "gender",
    "birthday",
    "role",
    "phone",
]

const requiredProfile = [
    "id_customer",
    "cmnd",
    "facebook_id",
    "email",
    "company_name",
    "company_address",
    "province",
    "district"
]

export const getAPIWithQueryCustomer = ({query, suffixUrl}) => {
    return new Promise((resolve, reject) => {
        let user = null;
        for (let i = 0; i < customers.length; i++) {
            if (customers[i].phone === query.phone) {
                user = customers[i];
                break;
            }
        }
        if (user) {
            resolve(user);
        }
        else {
            reject({ "error": "not found" });
        }
    })
}

export const postAPIProfile = ({body, suffixUrl}) => {
    const formBodyProfile = body;
    return new Promise((resolve, reject) => {
        for(let i = 0 ; i < requiredProfile.length; i++){
            let property = requiredProfile[i];
            if(!formBodyProfile[property]){
                reject({"error" : "Missing required field"});
                return false;
            }
        }
        for(let j = 0 ; j < listProfile.length ; j++){
            let profile = listProfile[j];
            if(profile.id_customer === formBodyProfile.id_customer){
                reject({"error" : "Already exists"});
                return false;
            }
        }
        resolve(formBodyProfile);
    });
}

export const postAPICustomer = ({body, suffixUrl}) => {
    const formBodyRegister = body;
    return new Promise ((resolve, reject) => {
        for(let i = 0 ; i < required.length ; i++){
            let property = required[i];
            if(!formBodyRegister[property]){
                reject({"error" : "Missing required field"});
                return false;
            }
        }
        for(let j = 0; j < customers.length ; j++){
            let user = customers[j];
            let userRegister = formBodyRegister;
            if(user.phone === userRegister.phone){
                reject({"error" : "Already exists"});
                return false;
            }
        }
        resolve(formBodyRegister);
    })
}