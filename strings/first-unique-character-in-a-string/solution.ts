function firstUniqChar(s: string): number {

    const frequency = new Map<string, number>()

    for(const char of s){
        frequency.set(char, (frequency.get(char) || 0) + 1)
    }

    for(let i = 0; i < s.length; i++){
        if(frequency.get(s[i]) === 1){
            return i
        }
    }

    return -1

}

const word = "aabb"


const answer = firstUniqChar(word);

console.log(answer);