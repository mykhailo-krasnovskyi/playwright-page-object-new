import test, { expect } from "@playwright/test";
import { users } from "../../test-data/credentials";

test('/cars/models public request', async ({ request }) => {
    const response = await request.get('/api/cars/models');
    const body = await response.json();
    const allCars = body.data;
    const carTitle = allCars[10].title;
    expect(carTitle).toEqual('Fiesta');
    expect(allCars.length).toEqual(23);
    expect(body.status).toEqual('ok');
});

test('/cars private request', async ({ request }) => {
    console.log('-------------Storage State BEFORE--------------');
    console.log(await request.storageState());
    console.log('---------------------------');

    const authRequest = await request.post('/api/auth/signin', {
        data: {
            "email": users.mainUser.email,
            "password": users.mainUser.password,
            "remember": true
        }
    })


    const response = await request.get('/api/cars/');
    const body = await response.json();
    console.log(body);
    console.log('-------------Storage State AFTER--------------');
    console.log(await request.storageState());
    console.log('---------------------------');
});


//   7 passed (8.3s)
test.describe('GARAGE API TESTS with auth in BeforeEach', () => {

    test.beforeEach(async ({ request }) => {
        const authRequest = await request.post('/api/auth/signin', {
            data: {
                "email": users.mainUser.email,
                "password": users.mainUser.password,
                "remember": true
            }
        })
    })

    test('/cars private request with auth in BeforeEach 1', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 2', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 3', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 4', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 5', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });
    test('/cars private request with auth in BeforeEach 6', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

    test('/cars private request with auth in BeforeEach 7', async ({ request }) => {
        const response = await request.get('/api/cars/');
        const body = await response.json();
        console.log(body);
    });

})

test.describe('GARAGE API TESTS with auth in BeforeAll', () => {

    let sid: string;

    test.beforeAll(async ({ request }) => {
        const authRequest = await request.post('/api/auth/signin', {
            data: {
                "email": users.mainUser.email,
                "password": users.mainUser.password,
                "remember": true
            }
        })
        const cookies = authRequest.headers()['set-cookie'];
        console.log(authRequest.headers())
        if (cookies) {
            const cookieArray = cookies.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        }
    })



    test('/cars private request with auth in BeforeAll 1', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })

    
    test('/cars private request with auth in BeforeAll 2', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })

    
    test('/cars private request with auth in BeforeAll 3', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })

    
    test('/cars private request with auth in BeforeAll 4', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })

    
    test('/cars private request with auth in BeforeAll 5', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })

    
    test('/cars private request with auth in BeforeAll 6', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })

    
    test('/cars private request with auth in BeforeAll 7', async ({ request }) => {
        const response = await request.get('/api/cars/',
            {
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }
        );
        const body = await response.json();
        console.log(body);
    })



})