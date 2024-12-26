
const { test, expect } = require('@playwright/test');

var userid;


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
                "name":"Apple iPad 2024",
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "color": "silver"
              }
            })
            
            
            expect(response.status()).toBe(200);

            const text = await response.text();
            expect(text).toContain('Apple iPad 2024');
        
            console.log(await response.json());

            var res = await response.json();

            userid = res.id;
      
    });




    test('Get a single object using the above added ID', async ({ request}) => {

      const response = await request.get('https://api.restful-api.dev/objects', {

        params:{
          "id": userid,
      }
      })
  
      expect(response.status()).toBe(200);
  
      const text = await response.text();
      expect(text).toContain('Apple iPad 2024');
  
      console.log(await response.json());
  
  
      });

    test(' Update the object added in Step 2 using PUT', async ({ request}) => {
       
      const response = await request.put('https://api.restful-api.dev/objects/'+userid, {
           
            data : {
                "name" : "latest device",
                "year": 2020,
                "price": 1842,
                "CPU model": "Intel Core i10",
                "Hard disk size": "10 TB",
                "color": "silver"
              }
            })

            expect(response.status()).toBe(200);

            const text = await response.text();
            expect(text).toContain('latest device');
        
            console.log(await response.json());        
      
    });

     test("Delete the object using DELETE", async ({request}) => {

     const response = await request.delete('https://api.restful-api.dev/objects/'+userid);

     expect(response.status()).toBe(200);

     
    });


    



    



    