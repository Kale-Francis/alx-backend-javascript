export default function cleanSet(set, startString){
    if(!(set instanceof set) || typeof startString !== 'string' || startString.length === 0){
        return '';
    }
    const result = [];
    for (const value of set) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            result.push(value.slice(startString.length));
        }
    }
    return result.join('-');
}