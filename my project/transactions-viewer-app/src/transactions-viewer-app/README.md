# Transactions Viewer App

This application allows users to view their transaction history and securely enter a PIN for authentication. It is designed to provide a simple and intuitive interface for managing financial transactions.

## Project Structure

- **src/index.js**: The entry point of the application that renders the main App component.
- **src/App.js**: The main application component that sets up routing and renders the main UI components.
- **src/components/TransactionsList.js**: A component that displays a list of transactions fetched from a JSON file.
- **src/components/PinEntry.js**: A component that allows users to enter a PIN for authentication.
- **src/components/SystemUI.js**: A component that represents the system user interface, including navigation and status indicators.
- **src/data/transactions.json**: A JSON file containing an array of transaction objects with details such as amount, sender, receiver, date, and type.
- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd transactions-viewer-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   npm start
   ```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.