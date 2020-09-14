export function generatorListDropDown(objClassName, array){
    let ar = [];
    for(let i = 0 ; i < array.length ; i++){
        let update = {
            "value" : array[i].value,
            "text" : array[i].text
        }
        let _obj = Object.assign({}, objClassName, update);
        ar.push(_obj);
    }
    return ar;
}

export function generatorArrayProvinces(arProvinces){
    let obj = {
        "className" : "dropdown__item",
        "classNameText" : "dropdown__item__txt"
    }
    let ar = []; 
    for(let i = 0 ; i < arProvinces.length ; i++){
        ar.push({value : arProvinces[i].id, text : arProvinces[i].name});
    };
    return generatorListDropDown(obj, ar);
}

export function generatorArrayDays(){
    let obj = {
        "className" : "dropdown__item",
        "classNameText" : "dropdown__item__txt"
    }
    let ar = [];
    for(let i = 1 ; i < 32 ; i++){
        ar.push({value : i, text : i});
    }
    return generatorListDropDown(obj, ar);
}

export function generatorArrayMonths(){
    let obj = {
        "className" : "dropdown__item",
        "classNameText" : "dropdown__item__txt"
    }
    let ar = [];
    for(let i = 1 ; i < 13 ; i++){
        ar.push({value : i, text : i});
    }
    return generatorListDropDown(obj, ar);
}

export function generatorArrayYears(){
    let obj = {
        "className" : "dropdown__item",
        "classNameText" : "dropdown__item__txt"
    }
    let ar = [];
    for(let i = 1950 ; i < 2001 ; i++){
        ar.push({value : i, text : i});
    }
    return generatorListDropDown(obj, ar);
}