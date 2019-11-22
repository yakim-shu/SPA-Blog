import { getDate } from './../src/utils';


test('empty date', () => {
 expect(getDate()).toBe('who knows ?');
});

test('NaN date', () => {
 expect(getDate('ddd')).toBe('who knows ?');
});

test('fixed date', () => {
 expect(getDate(1569571974593)).toBe('Sep 27');
});

