async function f() {

    const createTestCafe = require('testcafe');
    const testCafe = await createTestCafe('localhost', 1337, 1338);
    const brs = ['chrome', 'safari']

    for (const b of brs) {
        const runner = testCafe.createRunner();
        const failedCount = await runner
            .src('test.ts')
            .browsers(b)
            .run();
        console.log("Failed tests: " + failedCount);
    }

}


f()
