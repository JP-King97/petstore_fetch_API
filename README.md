# CRUD Tests for Swagger Petstore API

## Project Description

This project focuses on testing CRUD (Create, Read, Update, Delete) operations for the **Swagger Petstore API** using **TypeScript** and **Jest**. The tests ensure that pet-related API requests function correctly and adhere to expected behaviors.

## Project Structure

```
pet-api/
├── src/
│   └── pet_api.ts     # API client functions
├── test/
│   └── crud.test.ts # Test suite for API functions
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
```

## Technologies Used

- **TypeScript**: Provides static typing and improved code quality.
- **Jest**: JavaScript testing framework for API validation.
- **Fetch API**: Used for making HTTP requests to the Petstore API.

## CRUD Methods

- **Create a pet** (`createANewPet`): Sends a `POST` request to add a new pet to the Petstore.
- **Read a pet by ID** (`getAPetById`): Sends a `GET` request to retrieve a pet by its ID.
- **Update pet details** (`updateAPet`): Sends a `PUT` request to modify pet details.
- **Delete a pet** (`deleteAPet`): Sends a `DELETE` request to remove a pet from the Petstore.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JP-King97/petstore_fetch_API.git
   ```
2. Navigate to the project directory:
   ```sh
   cd petstore_fetch_API
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

The test suite in `crud.test.ts` validates all CRUD operations.

### Execute the tests

```sh
npm run tests
```

## About the Swagger Petstore API

The **Swagger Petstore API** is a publicly available API that allows users to manage pet data. It provides endpoints for creating, reading, updating, and deleting pet records.

- **API Documentation:** [Swagger Petstore](https://petstore3.swagger.io/)

## .gitignore Recommendations

Include the following files and folders in `.gitignore`:

```
node_modules/
dist/
.env
coverage/
```
