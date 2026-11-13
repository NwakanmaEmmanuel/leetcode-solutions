function firstUniqChar(s: string): number {

    const frequency = new Array(26).fill(0)

    for(let i = 0; i < s.length; i++){
        frequency[s.charCodeAt(i) - 97]++
    }

    for(let i = 0; i < s.length; i++){
        if(frequency[s.charCodeAt(i) - 97] === 1){
            return i
        }
    }

    return -1

    
}

const word = "leetcodel"


const answer = firstUniqChar(word);

console.log(answer);