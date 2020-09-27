import { average } from "./functions";

describe('Test Average', () => {
    it('Should work', () => {
        expect(average(2, '2')).toEqual(`Average is 2`);
        expect(average('3', 3)).toEqual(`Average is 3`);
        expect(average(2, 4, 3)).toEqual(`Average is 3`);
    })
})
