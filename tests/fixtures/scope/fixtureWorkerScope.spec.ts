import {test as base} from '@playwright/test';

let counter = 0;
type workerFixtures = {
    counterFixture: number;
}

const test = base.extend<{}, workerFixtures>({
    //The generic syntax: extend<TestFixtures, WorkerFixtures>
    counterFixture: [async({}, use) => {
        counter++;
        await use(counter);
    },
    {scope: 'worker'}
    ]
})

test('test1', async ({counterFixture}) => {
    console.log(`test1: ${counterFixture}`);
});

test('test2', async ({counterFixture}) => {
    console.log(`test1: ${counterFixture}`);
});

test('test3', async ({counterFixture}) => {
    console.log(`test2: ${counterFixture}`);
});