# PropertyGram - a telegram bot for Real Estate

Intenteded to display real estate properties concisely via a Telegram Bot


[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=QuantGeekDev_PropertyGram-telegram-bot&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=QuantGeekDev_PropertyGram-telegram-bot)


## Features

- Built with TypeScript for static typing and enhanced code quality.
- Integrates MongoDB for database solutions.
- Uses `grammy` as the bot framework to interact with the Telegram Bot API.
- Easy-to-use script commands for compiling, starting, and managing the bot process.
- Prettier integrated for code formatting.

## Usage

After cloning the repository, you can use the following npm scripts:


- `compile`: Compiles the TypeScript files to JavaScript, placing the compiled files in the `dist` directory.
- `postcompile`: Copies the locales from the `src` directory to the `dist` directory.
- `bg:start`: Prepares the environment and starts the bot in the background using pm2.
- `bg:restart`: Restarts the bot service.
- `bg:logs`: Fetches logs for the bot, defaulting to the last 1000 lines.
- `start`: Compiles the TypeScript files and starts the bot.
- `lint`: Formats the code using Prettier.

## Installation

To use this project:

1. Ensure you have Node.js (version 4 or higher) and npm (version 2 or higher) installed.
2. Clone the repository.
3. Run `npm install` to install all the dependencies and devDependencies listed.

## Dependencies

- `@grammyjs/i18n`: For internationalization support.
- `dotenv`: To manage environment variables.
- `grammy`: The framework used to create the bot.
- `mongodb`: To interact with MongoDB databases.

## DevDependencies

Includes various types, ESLint configurations, Prettier, and TypeScript for linting, formatting, and compiling the code.

## Configuration

Modify the `.env` file to include your bot tokens and any other environment-specific configurations. Additionally, tailor the `src/locales` as needed for internationalization.

## License

This project is licensed under the GPL-3.0-or-later. Please ensure you comply with the license terms while using or modifying the template.

## Contributions

Contributions are welcome. Please fork the repository, make your changes, and submit a pull request.

---

This README provides a basic outline of the ts-tg-bot package. You can expand each section with more detailed information about configuration, usage, and development practices as needed for your particular bot implementation.
