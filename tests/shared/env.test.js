import * as env from "../../src/shared/env";

describe('env test', () => {
    test('should not 0', () => {
        expect(env.cpus.length).not.toBe(0);
    })
})
