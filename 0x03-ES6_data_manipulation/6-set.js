export default function setFromArray(array){
    if (!Array.isArray(array)){
        return new Set();
    }
    return new Set(array);
}