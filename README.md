# Weather This Week

A small single-page-application (SPA) using [React](https://reactjs.org/) and bootstrapped with [Create-React-App](https://facebook.github.io/create-react-app/).

### [View the live demo](https://matthewwid.github.io/Weather-This-Week/)

Implements CSS-BEM methodologies.

Live weather and forecast data pulled from the [OpenWeatherMap API](https://openweathermap.org/).

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
