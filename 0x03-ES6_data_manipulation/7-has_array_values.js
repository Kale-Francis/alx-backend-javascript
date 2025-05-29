export default function hasValuesFromArray(set, array){
    if (!Array.isArray(array) || !(set instanceof Set)) {
        return false;
    }
    for (const value of array){
        if (!set.has(value)){
            return false;
        }
    }
    return true;
}
