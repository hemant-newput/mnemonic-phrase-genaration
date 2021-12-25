export const convertBinaryToHex = function bin2hex(b: string) {
    return b.match(/.{4}/g)?.reduce(function (acc, i) {
        return acc + parseInt(i, 2).toString(16);
    }, '')
}

export const convertHexToBinary = function hex2bin(h: string) {
    return h.split('').reduce(function (acc, i) {
        return acc + ('000' + parseInt(i, 16).toString(2)).substr(-4, 4);
    }, '')
}

export const splitWord = (data: string, interval: number): string[] => {
    const output = []
    if (data.length > interval) {
        const iteration = data.length / interval;
        let start = 0;
        let end = interval;
        for (let i = 0; i < iteration; i++) {
            output.push(data.substring(start, end))
            start += interval
            end += interval
        }
    } else {
        output.push(data)
    }
    return output
}

export const getEntropy = () => {
    let value: string = "";
    for (let i = 0; i < 128; i++) {
        if (Math.random() < 0.5) {
            value += "1"
        } else {
            value += "0"
        }
    }
    return value
}

export const fixedLengthValue = (binary: string, length: number) => {
    const zero = "0"
    let zeroString ="";
    if (binary.length < length) {
        for(let i=0;i< length - binary.length ;i++){
            zeroString+=zero
        }
    }
    return zeroString+binary
}