const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log('Break')
for (let i in nums) {
    if (i == 5) {
        break
    }
    console.log(`${i} = ${nums[i]}`)
}

console.log('Continue')
for (let i in nums) {
    if (i == 5) {
        continue
    }
    console.log(`${i} = ${nums[i]}`)
}