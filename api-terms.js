/* 
    CRUD operations
        CREATE
        READ
        UPDATE
        DELETE


    REQUEST METHODS
        GET -  READ
        POST - CREATE
        PUT / PATCH - UPDATE
        DELETE


    STATUS CODES
        2   // successfull operations
            200

        3 - redirect

        4  // error -> CLIENT error
            - 400 // bad request  -> form data mission , invaid data
            - 401 // not logged in 
            - 403 // forbidden // access denied
            - 404  // resource not found

        5 // error -> BAckend error 
            - 500 // server error


    API Endpoints
        /api/todos
        /api/users
        /api/products

*/