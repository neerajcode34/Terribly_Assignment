# Terribly Tiny Tales

This is a React app that creates a word frequency histogram from text data fetched from an external URL.

It is hosted on netlify. click on link to visit: https://amazing-boba-2704b0.netlify.app

## Components

The app consists of the following components:

### App

This is the main component that renders the entire app. It contains the state variables `loaded` and `histogramData`, which are used to manage the app's loading state and the data for the histogram, respectively. It also contains the `handleButtonClick` function, which is called when the user clicks the "Submit" button to fetch and process the text data. Once the data is processed, the `histogramData` state is updated with the sorted word frequency data and the `loaded` state is set to `true`.

### BarChart

This is a component from the Recharts library that renders the histogram chart. It receives the `histogramData` state as its data source and uses the `Bar` component to render the individual bars. It also includes the `CartesianGrid`, `XAxis`, `YAxis`, `Tooltip`, and `Legend` components to provide additional features to the chart.

## Libraries and Plugins

The app uses the following libraries and plugins:

- React: A JavaScript library for building user interfaces.
- axios: A JavaScript library for making HTTP requests.
- Recharts: A React charting library based on D3.
- CSS Modules: A CSS styling solution that allows for local scoping of CSS class names.

## Acknowledgments

This app was built as part of a coding Assignment. Thanks to Terribly Tiny Tales for the opportunity!


## Getting Started

To run the app, first clone the repository to your local machine:

```
git clone  https://github.com/neerajcode34/Terribly_Assignment.git
```

Then, navigate to the project directory and install the required dependencies:

```
cd Terribly_Assignment
npm install
```

Finally, start the development server:

```
npm start
```

This will open the app in your default browser at http://localhost:3000.


