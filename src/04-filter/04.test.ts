test('should take men older than 90', () => {
    const ages = [2, 10, 50, 39, 45, 90, 95]
    const predicate = (age: number) => age > 90
    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(95);
})