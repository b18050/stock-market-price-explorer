# stock-market-price-explorer-Zenskar

https://user-images.githubusercontent.com/45814442/195994062-9435e7cb-1525-49f3-9f63-66e5299d1a33.mov

## Dependencies :
<ul> 
	<li> Node </li>
	<li> MySql </li>
    <li> ReactJs </li>
</ul>

## Resources used :
References : [Doc link](https://www.bezkoder.com/node-js-upload-csv-file-database/)

## 🚀 Quick start

In this project, local database is used `MySQL` srver is used.
Database config:
```shell
    HOST: "localhost"
    USER: "root"
    PASSWORD: "password"
    DB: "stockdb"
    dialect: "mysql"
```
Please make sure to have a local database named  `stockdb` and MySQL server to be running.

Useful commands: 
```shell
    export PATH=${PATH}:/usr/local/mysql/bin
    mysql -u root -p
```

Start the backend express server:
```shell
    cd backend/
    npm install
    node src/server.js
```

Start the frontend in the browser:
```shell
    cd frontend/
    npm install
    npm start
```

You will see something like this:

## 🧐  Quick brief about the codebase

1.  **Clone this repository**

    ```shell
    # Clone the repo
    git clone https://github.com/b18050/stock-market-price-explorer-Zenskar.git
    ```

1. **Navigate into the folder**

    Navigate into your new site’s directory, install node modules and start it up:

    ```shell
    cd stock-market-price-explorer-Zenskar/
    ```

    You will see contents like this:

    ```shell
    frontend
    backend
    README.md
    ```

1. **Navigate into the frontend**
    ```shell
    cd frontend
    npm install
    npm start
    ```

1.  **Open the front end source code and start editing.**

    Your site is now running at `http://localhost:3000`!

    Open the `src` directory in your code editor of choice and edit away. Save your changes and the browser will update in real time!

    Folder structure (frontend) which are useful:

    ```shell
    components
    services
    App.css
    ```
    In services folder, you will find `stocks.js` file which contains code to fetch/post data from our backend `MySQL` server. It uses `axios` for `GET`, `POST` operations.

    Example: 
    ```shell
    const getStocksSummary = async () => {
        const url = `${baseUrl}/summary`
        const response = await axios.get(url);
        return response.data;
    }
    ```
    
    Inside `components` directory, one can find all the components used in the project.

    Main components are:
    ```shell
    UserScreen
    AdminScreen
    ```

1. **Navigate into the backend**
    ```shell
    cd backend
    npm install
    node src/server.js
    ```
1.  **Open the back end source code and start editing.**
    Your site is now running at `http://localhost:8080` !

    Folder structure (backend) which are useful:

    ```shell
    resources/uploads
    src/
        config/
            db.config.js
        controllers/
            stock.controller.js
        middleware/
            upload.js
        models/
            index.js
            stock.model.js
        routes/
            stock.routes.js
        server.js
    package.json
    ```

    

  



