import profile from "../../src/shared/profile";

describe('profile test', () => {
    test('should equal to predefined', () => {
        expect(profile).toEqual({
            name: 'Ginkgoch',
            website: 'https://ginkgoch.com',
            email: 'ginkgoch@outlook.com'
        });
    })
})
