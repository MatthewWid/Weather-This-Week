# Weather This Week

A small single-page-application (SPA) weather viewer using [React](https://reactjs.org/), bootstrapped with [Create-React-App](https://facebook.github.io/create-react-app/).

Automatically fetches your location and displays today's weather and a five-day forecast. Alternatively, search by city to receive up-to-date weather information about anywhere in the world.

### [View the live demo](https://matthewwid.github.io/Weather-This-Week/)

Implements [CSS-BEM methodologies](http://getbem.com/).

Live weather and forecast data pulled from the [OpenWeatherMap API](https://openweathermap.org/).

<p align="center">
    <img src="./doc/preview_demo.gif" alt="preview gif" width="90%" />
</p>

# Run Locally

For development you may run this project on your own machine to build it yourself and make changes.

1. Clone the repository with `git clone <remote url>` and navigate into the folder with `cd Weather-This-Week`.
2. Install dependencies with `yarn install` or `npm install`.
3. Create an account with [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and [get an API key](https://home.openweathermap.org/api_keys).
4. Create a file called `config.js` inside the `src/` directory with the following contents:
    ```javascript
    const config = {
      API_KEY: "YOUR_API_KEY_HERE"
    };

    export default config;
    ```
    and replace `YOUR_API_KEY_HERE` with your API key.
5. Run `yarn start` or `npm run start` to start up the local development server and navigate to `localhost:3000`.

# Deploy

Deployment is done using the [gh-pages NPM module](https://www.npmjs.com/package/gh-pages).

Simply fork the repository, [set up locally](#run-locally) and run `yarn deploy` or `npm run deploy`.
