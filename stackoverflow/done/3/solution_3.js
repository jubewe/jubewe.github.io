let data = {
    "a": {"date": "2022-10-13 02:07:11"},
    "b": {"date": "2022-10-13 00:00:00"},
    "c": {"date": "2022-10-10 02:07:11"}
};

let sorted = {};

for(key in data){
    if(!sorted[data[key].date]){
        sorted[data[key].date] = [];
    }

    sorted[data[key].date].push({key: data[key]});
}

console.log(sorted);