var findDuplicate = function(nums) {
    var freq = {} 
    
    for (var n of nums) {
        if (n in freq) {return n}
        else {freq[n] = 1}
    }
};