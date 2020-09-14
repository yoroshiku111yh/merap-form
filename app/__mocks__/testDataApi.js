export const customers = [
    {
        "_id": "5f59e2f5d279373c000a4765",
        "fullname": "tester",
        "role": "coder",
        "gender": "male",
        "phone": "0123456789",
        "birthday": "01-01-2020",
        "id": 21
    },
    {
        "_id": "5f59e2f5d279373c000a4765",
        "fullname": "tester 2",
        "role": "coder",
        "gender": "male",
        "phone": "0123456781",
        "birthday": "01-01-2020",
        "id": 22
    },
    {
        "_id": "5f59e2f5d279373c000a4765",
        "fullname": "tester 3",
        "role": "coder",
        "gender": "male",
        "phone": "0123456782",
        "birthday": "01-01-2020",
        "id": 23
    },
]

export const formBodyRegisterDuplicatePhoneNumber = {
    "fullname": "tester",
    "birthday": "01-01-2020",
    "phone": "0123456789",
    "role": "coder",
    "gender": "male"
}

export const formBodyRegisterMissingField = {
    "fullname": "tester",
    "birthday": "01-01-2020",
    "phone": "0123456700",
    "role": "coder",
    "gender": ""
}

export const formBodyRegister = {
    "fullname": "tester",
    "birthday": "01-01-2020",
    "phone": "0123456700",
    "role": "coder",
    "gender": "male"
}

export const listProfile = [
    {
        "id_customer": 21,
        "cmnd": "0123456789",
        "facebook_id": "doodle",
        "email": "125@gmail.com",
        "company_name": "company dummy loorsum",
        "company_address": "test dummy company address",
        "province": "TP. Hồ Chí Minh",
        "district": "Q.3"
    }
]

export const formBodyProfile = {
    "id_customer": 22,
    "cmnd": "0123456781",
    "facebook_id": "doodle",
    "email": "125@gmail.com",
    "company_name": "company dummy loorsum",
    "company_address": "test dummy company address",
    "province": "TP. Hồ Chí Minh",
    "district": "Q.3"
}

export const formBodyProfileDuplicateIdCustomer = {
    "id_customer": 21,
    "cmnd": "0123456781",
    "facebook_id": "doodle",
    "email": "125@gmail.com",
    "company_name": "company dummy loorsum",
    "company_address": "test dummy company address",
    "province": "TP. Hồ Chí Minh",
    "district": "Q.3"
}

export const formBodyProfileMissingField = {
    "id_customer": 23,
    "cmnd": "",
    "facebook_id": "doodle",
    "email": "125@gmail.com",
    "company_name": "company dummy loorsum",
    "company_address": "test dummy company address",
    "province": "TP. Hồ Chí Minh",
    "district": "Q.3"
}