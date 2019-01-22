**Show One User**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `{
    "address": "Jalan Sari Asih No. 54, Sarijadi, Sukasari, Kota Bandung, Jawa Barat 40151, Indonesia",
    "current_buyer_id": "EFeypYsvmoSjasWulbPBL3O7r273",
    "current_restauarnt_id": "38bf068c-ee24-4e35-91a8-4a5cec78f50c",
    "email": "ulumuzumaki@gmail.com",
    "latitude": -6.873955983501656,
    "longitude": 107.57553900378666,
    "name": "uzumaki ulum"
}`
 
* **Error Response:**

  * **Status:** 404 NOT FOUND 
    **Content:** `{ error : "User doesn't exist" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/users/xaxas12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```

**Show Users**
----
  Returns json data about all users.

* **URL**

  /users

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `[{
    "address": "Jalan Sari Asih No. 54, Sarijadi, Sukasari, Kota Bandung, Jawa Barat 40151, Indonesia",
    "current_buyer_id": "EFeypYsvmoSjasWulbPBL3O7r273",
    "current_restauarnt_id": "38bf068c-ee24-4e35-91a8-4a5cec78f50c",
    "email": "ulumuzumaki@gmail.com",
    "latitude": -6.873955983501656,
    "longitude": 107.57553900378666,
    "name": "uzumaki ulum",
    "uid": "1TwWWDNu1TVgAgY6bL2skt4eCar1"
}]`
 
* **Error Response:**

  * **Status:** 500 Internal Server Error 
    **Content:** `{ error : "Error Happening" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/users')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```


**Show Users Location**
----
  Returns json data about  users locations.

* **URL**

  /users/location/all

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `[{
      "g": "9q9hvumnuw",
      "l": [
        -7.402895000000001,
        112.67360500000001
      ],
      "uid": "IJnkrhwH3UfnzyyGBrhqv8dAqq03"
    },
    {
      "g": "qqu2zfstxf",
      "l": [
        -6.881004884309942,
        107.57623126701274
      ],
      "uid": "1hcPgpmvycTKVcxlZ3UgqVIHStP2"
    },
]`
 
* **Error Response:**

  * **Status:** 500 Internal Server Error 
    **Content:** `{ error : "Error Happening" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for a users location
axios.get('/users/location/all')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```


**Show One User Location**
----
  Returns json data about a single user location.

* **URL**

  /users/location/user/:id

* **Method:**

  `GET`
  
*  **URL Params**

    **Required:**
 
   `id=[string]`

* **Data Params**

    None

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `{
    "g": "9q9hvumnuw",
    "l": [
      -7.402895000000001,
      112.67360500000001
    ]
  }`
 
* **Error Response:**

  * **Status:** 500 Internal Server Error 
    **Content:** `{ error : "Error Happening" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for a user location with a given ID
axios.get('/users/location/user/1e12ejweh')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```


  **Show One Restaurant**
  ----
    Returns json data about a single restaurant.
  
  * **URL**
  
    /restaurant/:id
  
  * **Method:**
  
    `GET`
    
  *  **URL Params**
  
     **Required:**
   
     `id=[string]`
  
  * **Data Params**
  
    None
  
  * **Success Response:**
  
    * **Status:** 200 <br />
      **Content:** `{
    "address": "Jl. Merdeka",
    "img_url": "https://firebasestorage.googleapis.com/v0/b/food-delivery-e9a7e.appspot.com/o/images/restaurants/38bf068c-ee24-4e35-91a8-4a5cec78f50c/img01.png?alt=media&token=d59fd28c-b38f-490f-9c32-e288fcd4e6cf",
    "latitude": -6.8732908135282,
    "longitude": 107.57576323114336,
    "name": "La Piazza Cafe Jakbar",
    "open_hours": [
      null,
      "07:00-16:00"
    ],
    "rating": "4.4",
    "seller_id": "IJnkrhwH3UfnzyyGBrhqv8dAqq03"
  },`
   
  * **Error Response:**
  
    * **Status:** 404 NOT FOUND 
      **Content:** `{ error : "Restaurant doesn't exist" }`
  
  * **Sample Call:**
  
  ```js
  const axios = require('axios');
  
  // Make a request for a restaurant with a given ID
  axios.get('/restaurants/38bf068c-ee24-4e35-91a8-4a5cec78f50c')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  ```
  
   **Show All Restaurant**
  ----
    Returns json data about all restaurant.
  
  * **URL**
  
    /restaurant
  
  * **Method:**
  
    `GET`
    
  *  **URL Params**
  
    None
  
  * **Data Params**
  
    None
  
  * **Success Response:**
  
    * **Status:** 200 <br />
      **Content:** `[{
    "address": "Jl. Merdeka",
    "img_url": "https://firebasestorage.googleapis.com/v0/b/food-delivery-e9a7e.appspot.com/o/images/restaurants/38bf068c-ee24-4e35-91a8-4a5cec78f50c/img01.png?alt=media&token=d59fd28c-b38f-490f-9c32-e288fcd4e6cf",
    "latitude": -6.8732908135282,
    "longitude": 107.57576323114336,
    "name": "La Piazza Cafe Jakbar",
    "open_hours": [
      null,
      "07:00-16:00"
    ],
    "rating": "4.4",
    "seller_id": "IJnkrhwH3UfnzyyGBrhqv8dAqq03"
  }],`
   
  * **Error Response:**
  
    * **Status:** 500 Bad Request
      **Content:** `{ error : "Internal Server Error" }`
  
  * **Sample Call:**
  
  ```js
  const axios = require('axios');
  
  // Make a request for all Restaurant
  axios.get('/restaurants')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  
  ```
  
  
  **Add Food Restaurant**
----

* **URL**

  /restaurants/:id

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

    `img=[string]-url_image`
    `name=[string]`
    `price=[number]`

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `{
    {
  "msg": "Add some food",
}`
 
* **Error Response:**

  * **Status:** 404 NOT FOUND 
    **Content:** `{ error : "Restaurant Not Found" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for Add food with given resto and food id
axios.put('/restaurant/xaxas12345', {
    img: 'image-url',
    name: 'food-name',
    price: 'food-price Number'
})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```

  **Edit Food Restaurant**
----

* **URL**

  /restaurants/update/:res_id/food/:food_id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `res_id=[string]`
   `food_id=[string]`

* **Data Params**

    `img=[string]-url_image`
    `name=[string]`
    `price=[number]`

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `{
    {
  "msg": ""Berhasil Edit Food"",
}`
 
* **Error Response:**

  * **Status:** 404 NOT FOUND 
    **Content:** `{ error : "Restaurant/Food Not Found" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for Add food with given resto and food id
axios.post('/restaurant/xaxas12345/foods/1231awjfhwa', {
    img: 'image-url',
    name: 'food-name',
    price: 'food-price Number'
})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```



  **Delete Food Restaurant**
----

* **URL**

  /restaurants/update/:res_id/food/:food_id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `res_id=[string]`
   `food_id=[string]`

* **Data Params**

    None

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `{
    {
  "msg": ""Berhasil Delete Food"",
}`
 
* **Error Response:**

  * **Status:** 404 NOT FOUND 
    **Content:** `{ error : "Restaurant/Food Not Found" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.delete('/restaurant/xaxas12345/foods/1231awjfhwa')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```


  **Edit Restaurant**
----

* **URL**

  /restaurants/update/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

    `address=[string]`
   `img_url=[string]`
   `latitude=[string]`
   `longitude=[string]`
   `rating=[string]`
   `name=[string]`
   `seller_id=[string]`
   `key=[string]`//key for open hours
   `open_hours=[string]`

* **Success Response:**

  * **Status:** 202 <br />
    **Content:** `{
    {
  "msg": "msg": "Berhasil Edit Restaurant" ,
}`
 
* **Error Response:**

  * **Status:** 404 NOT FOUND 
    **Content:** `{ error : "Restaurant Not Found" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for resturant with given id
axios.put('/restaurant/update/wfafwj12213', {
    address: 'image-url',
    img_url: 'food-name',
    latitude: 'food-price Number'
    longitude: 'food-price Number'
    rating: 'food-price Number'
    name: 'food-price Number'
    seller_id: 'food-price Number'
    key: 'food-price Number'
    open_hours: 'food-price Number'
})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```


**Show Chats**
----
  Returns json data about a Chat.

* **URL**

  /chats

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Status:** 200 <br />
    **Content:** `[{
      "IJnkrhwH3UfnzyyGBrhqv8dAqq03": [
        {
          "message": "hai",
          "replier": "gM1lrvaZFAfEJAYeIFkXeyJTQYu1",
          "uid": "1548053507491"
        },
        {
          "last_message": "hai"
        }
      ]
    }]`
 
* **Error Response:**

  * **Status:** 500 Internal Server Error 
    **Content:** `{ error : "Error Happening" }`

* **Sample Call:**

```js
const axios = require('axios');

// Make a request for a chats 
axios.get('/chats')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

```



  