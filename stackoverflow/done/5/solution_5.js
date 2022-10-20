let text = `
---


not fixed
number of 
lines


---

Other text
More text`

console.log(text.replace(/^\n/gm, ""));