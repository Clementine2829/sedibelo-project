
- **models**: Contains the data models and logic for reading/writing data.
- **controllers**: Implements the business logic for various operations.
- **routes**: Defines the API endpoints and maps them to controller functions.
- **data**: Contains the JSON files used for storing user data.
- **server.js**: Entry point of the application.
- **processUsers.js**: Logic for processing user data and removing duplicates.
- **generateCSV.js**: Logic for generating CSV files from user data.
- **orderUsers.js**: Logic for ordering users alphabetically.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the server with `npm start`.

## Endpoints

- **GET /api/v1/process-users**: Process users and generate CSV file.
- **GET /api/v1/order-users**: Order users alphabetically.
- **GET /api/v1/report-to-michael**: Generate a report of users reporting to Michael Phalane.
- **GET /api/v1/uniqueUsers**: Get unique users.
- **GET /api/v1/orderedUsers**: Get users ordered alphabetically by name.
- **GET /api/v1/users/:id**: Get a unique user by their ID.
- **POST /api/v1/adduser**: Add a new user.
- **PUT /api/v1/updateuser/:id**: Update an existing user.

## Usage

- Use a tool like Postman to interact with the API endpoints.
- Send HTTP requests to the respective endpoints to perform CRUD operations on user data.

## Dependencies

- Express.js: Web framework for Node.js.
- json2csv: Convert JSON data to CSV format.
- uuid: Generate unique IDs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
