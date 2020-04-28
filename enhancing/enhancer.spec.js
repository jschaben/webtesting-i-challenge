const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
    
    describe('the succeed function', () => {

        it('should enhance the item by 10', () => {
            const item = {
                name: 'sword',
                enhancement: 7,
                level: 3
            };
            const success = enhancer.success(item)
            expect(success.enhancement).toBe(7)
        })    

        it('should not enhance and return the item', () => {
            const item = {
                name: 'sword',
                enhancement: 7,
                level: 10
            };
            const success = enhancer.success(item)
            expect(success.enhancement).toBe(17)
        })
    })

    describe('the fail status', () => {
        it('should lower enhancement level by 1 if not high enough level', () => {
            const item = {
                name: 'sword',
                enhancement: 7,
                level: 3
            };
            const fail = enhancer.fail(item)
            expect(fail.enhancement).toBe(6)
        })
    })

    describe('the repair status', () => {
        it('should repaire the durabilty of the item', () => {
            const item = {
                name: 'sword',
                durability: 2
            };
            const repair = enhancer.repair(item)
            expect(repair.durability).toBe(100)
        })
    })
})