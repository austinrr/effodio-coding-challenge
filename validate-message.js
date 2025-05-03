
// rough approximation of a record from a topic
function message(key, data) {
    this.key=key;
    this.data=data;
  }
  
// messages
const message1 = new message("1", null);
const message2 = new message("2", {"labelName0": "labelValue0", "labelName1": "labelValue1"})
const message3 = new message("3", [("labelName0", "labelValue0") , ("labelName1", "labelValue1") ])
const message4 = new message("4", "labelValue0")
const message5 = new message("5", [ "labelValue0", "labelValue1" ])
const messages = [message1, message2, message3, message4, message5]

let serialize_null_to_arr = (data) => {
    // console.log(data)

    if (!data) return [null];
    return undefined
}

let serialize_kvp_to_arr = (data) => {
    // console.log(data);

    if (!!data && data.constructor === ({}).constructor) {
        try {
            return Object.values(data);
        } catch (e) { }
    }
    return undefined;
}

let serialize_tuple_to_arr = (data) => {
    // console.log(data);

    try {
        return data.map(tuple => new String(tuple)).map(s => s.replace('(', '{')).map(s => s.replace(')', '}'));
    } catch (e) {
        return undefined;
    }
}

let serializeAs_string_to_arr = (data) => {
    // console.log(data);

    if ((typeof data) === "string") return [data];
    return undefined;
}

let serialize_arrString = (data) => {
    // console.log(data);
    
    if (Array.isArray(data)) data;
    return undefined;
}

let tryParseToStrArr = (message) => {
    let funcs = [
        serialize_null_to_arr,
        serialize_kvp_to_arr,
        serialize_tuple_to_arr,
        serializeAs_string_to_arr,
        serialize_arrString
    ]

    let results = funcs.map(f =>  f(message.data)).filter(r => !!r)
    if (results.length > 1) throw new Error("Data matched to multiple validators")
    if (results.length < 1) throw new Error("Data matched to 0 validators")
    return results[0];
}


messages.map(m => tryParseToStrArr(m)).forEach(arr => console.log(arr));