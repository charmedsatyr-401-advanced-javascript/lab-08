'use strict';

const Categories = require('../categories.js');
const categories = new Categories();
const { word } = require('faker').lorem;

describe('`Categories` class', () => {
  describe('`post` method', () => {
    it('add a record to the database and return what was posted', () => {
      const record = { name: word() };
      expect(categories.post(record).name).toBe(record.name);
    });
  });
  describe('`get` method', () => {
    it('should return a record if given a valid `_id`', () => {
      const record = { name: word() };
      const { _id } = categories.post(record);
      expect(categories.get(_id).name).toBe(record.name);
    });
    it('should return an array if given an invalid `_id`', () => {
      const record = { name: word() };
      categories.post(record);
      const fakeId = 0;
      expect(Array.isArray(categories.get(fakeId))).toBeTruthy();
    });
    it('should return an array if not given an argument', () => {
      expect(Array.isArray(categories.get())).toBeTruthy();
    });
  });
  describe('`put` method', () => {
    it('should return a modified record if given a valid `_id` and `record`', () => {
      const record = { name: word() };
      const modified = { name: word() };
      categories.post(record);
      const { _id } = categories.get()[0];
      expect(categories.put(_id, modified)).toEqual(expect.objectContaining(modified));
      expect(categories.put(_id, modified)).not.toEqual(expect.objectContaining(record));
    });
    it('should return an empty object if given an invalid `_id`', () => {
      const record = { name: word() };
      const modified = { name: word() };
      categories.post(record);
      const fakeId = 0;
      expect(categories.put(fakeId, modified)).not.toEqual(expect.objectContaining(record));
    });
  });
  describe('`delete` method', () => {
    it('should return the element with the given `_id`', () => {
      const record = { name: word() };
      categories.post(record);
      const { _id } = categories.get().find(r => r.name === record.name);
      expect(categories.delete(_id)).toEqual(expect.objectContaining(record));
    });
    it('should remove the element with the given `_id` from the database', () => {
      const record = { name: word() };
      categories.post(record);
      const { _id } = categories.get().find(r => r.name === record.name);
      categories.delete(_id);
      const db = categories.get();
      expect(db.find(record => record._id === _id)).toBeFalsy();
    });
    it('should return an empty object if given an invalid `_id`', () => {
      const fakeId = 0;
      expect(categories.delete(fakeId)).toEqual({});
    });
  });
});
