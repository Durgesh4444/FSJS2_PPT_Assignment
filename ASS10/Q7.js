function permute(str) {
    if (str.length === 1) return [str];
    const permutations = [];
    
    for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    
    const subPermutations = permute(str.slice(0, i) + str.slice(i + 1));
    }
}