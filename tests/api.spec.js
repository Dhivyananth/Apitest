
const { test, expect } = require('@playwright/test');




test('Get a list of all objects', async ({ request}) => {

    const response = await request.get('https://api.restful-api.dev/objects');

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Apple iPad Air');

    console.log(await response.json());


    });

    test('Add an object using POST', async ({ request}) => {
       
      const response = await request.post('https://api.restful-api.dev/objects', {
              data: {
                "id": 15,
                "name": "Apple iPad 2024",
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
              }
            })

            expect(response.status()).toBe(200);

            const text = await response.text();
            expect(text).toContain('Apple iPad 2024');
        
            console.log(await response.json());
      
    });




    test('Get a single object using the above added ID', async ({ request}) => {

      const response = await request.get('https://api.restful-api.dev/objects', {

        params:{
          "id": 10,
      }
      })
  
      expect(response.status()).toBe(200);
  
      const text = await response.text();
      expect(text).toContain('Apple iPad Mini 5th Gen');
  
      console.log(await response.json());
  
  
      });

    test(' Update the object added in Step 2 using PUT', async ({ request}) => {
       
      const response = await request.put('https://api.restful-api.dev/objects/7', {
           
            data : {
                "year": 2020,
                "price": 1842,
                "CPU model": "Intel Core i10",
                "Hard disk size": "10 TB",
                "color": "silver"
              }
            })

            expect(response.status()).toBe(200);

            const text = await response.text();
            expect(text).toContain('Apple iPad 2024 latest');
        
            console.log(await response.json());        
      
    });

     test("Delete the object using DELETE", async ({request}) => {

     const response = await request.delete('https://api.restful-api.dev/objects/6');

     expect(response.status()).toBe(200);

     
    });


    



    



    