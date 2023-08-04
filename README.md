# React Validation Application

This application is a base React application, which integrates a comprehensive string validation functionality. The application uses a predefined regex to validate a string, based on certain conditions such as string length, existence of uppercase and lowercase letters, digits, and special characters.

## Regex Implementation

The `validateString` function in the application validates a string based on several conditions. First, it checks if the length of the string is within the predefined limit, rejecting any string longer than the set maximum length. Second, it utilizes a regular expression to ensure that the string contains at least one lowercase letter, one uppercase letter, one digit, and one special character. Furthermore, the function strictly disallows any whitespace characters in any position in the string. The regex tests the string and returns a boolean value indicating if the string meets all these conditions.

## Running the Application Locally

Follow the steps below to run the application on your local machine:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/ecl1psyao/use-case-10-regex.git
    ```

2. Navigate to the project directory:
    ```
    cd use-case-10-regex
    ```

3. Install the necessary npm packages:
    ```
    npm install
    ```

4. Start the application:
    ```
    npm start
    ```

The application will start, and by default will be available at `http://localhost:3000` on your browser.

If you wish to see the validation test outputs, please check your browser's console while running the application. The application executes a set of predefined tests on the validation function at the start, and logs the output in the console if some of the tests are failed.
