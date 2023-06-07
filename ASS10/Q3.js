function powerSet(str,index,curr)
{
    let n = str.length;
    if (index == n)
    {
        return;
    }
 
    document.write(curr+"<br>");
    for (let i = index + 1; i < n; i++)
    {
        curr += str[i];
        powerSet(str, i, curr);
        curr = curr.substring(0, curr.length - 1);
    }
}