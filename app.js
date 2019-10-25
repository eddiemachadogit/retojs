
function maxElement(ar){
    var maxN = ar[0];
    for(var i = 1; i < ar.length; i++){
        if(ar[i] > maxN){
            maxN = ar[i];
        }
    }
    return maxN;
}

