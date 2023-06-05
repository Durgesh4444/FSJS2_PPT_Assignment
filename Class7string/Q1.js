s=["h","e","l","l","o"]
// s.reverse()
// console.log(s);

const reverstring = (s) =>{
    let left =0 ;
    let right =0;
    while(left<right){
        const exl = s[left]
        s[left++]=s[right]
        s[right--]=exl
    }
}
console.log(reverstring(s));