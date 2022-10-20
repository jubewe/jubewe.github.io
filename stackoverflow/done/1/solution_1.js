function isodd(n) { return ((n / 2).toString() === (n / 2).toFixed(0).toString() ? false : true) };
function gethalf(n) { return (isodd(n / 2) ? n - 1 : n) };
function factorial(n) {
    let a = 1;
    for (i = 0; i < n; i++) {
        a = (a * (i + 1));
    }
    return a;
};
function getfull(n){return (n.toString().includes(".") ? parseInt(n.toString().split(".")[0])+1 : n)};
function combinations(n, r) { return (factorial(n) / (factorial(r) * factorial((n - r)))) };

function pairs(participants, rounds) {
    let rounds_ = {};
    let participants_ = [];
    // console.log(combinations(participants.length, rounds));
    for (p = 0; p < participants.length - 1; p++) {
        for (p2 = p + 1; p2 < participants.length; p2++) {
            participants_.push([participants[p], participants[p2]]);
        }
    }
    for(r = 0; r < rounds; r++){
        // console.log((participants_.length/rounds))
        for(i = 0; i < getfull((participants_.length/rounds)); i++){
            console.log(i)
        }
        rounds_[r] = participants_[r]
    }
    console.log(rounds_)

    return participants_;
};

console.log(pairs(["a", "b", "c"], 4))