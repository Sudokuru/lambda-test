const d = require('../../app/services/db.service');
const bookModel = require("../../app/models/bookmodel");

describe("upload", () => {
    it('should connect to the database and return create response', async () => {
        const spy = jest.spyOn(d, 'connectToDB');
        spy.mockReturnValue(Promise);

        const spyB = jest.spyOn(bookModel, 'create');
        let res:JSON = <JSON>{};
        spyB.mockReturnValue(res);

        expect(await d.upload({title: "", description: "", published: false})).toEqual(res);
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
        spyB.mockRestore();
    });
});