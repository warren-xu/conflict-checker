# Conflict Checker

Conflict Checker is a web application designed to assist in urban planning by visually identifying and displaying project addresses from an uploaded CSV file on an interactive map. This tool leverages the Google Maps API to geocode addresses and present them as markers, providing a clear overview of project locations.

This repository contains the React.js frontend for the application. The frontend communicates with a Node.js backend to handle file uploads, data storage, and geocoding services.

## Features

*   **CSV Upload**: Easily upload a CSV file containing a list of addresses.
*   **Interactive Map**: View all uploaded addresses as pins on a Google Map.
*   **Dynamic Geocoding**: Automatically converts addresses into latitude and longitude coordinates for map placement.
*   **Location Search**: An integrated search bar to quickly find and pan to specific locations on the map.
*   **Address Details**: Click on a map marker to view its corresponding address in an information window.

## Technology Stack

*   **Frontend**:
    *   React.js
    *   React Router
    *   Axios for HTTP requests
    *   Bootstrap for styling
    *   [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api) for Google Maps integration
*   **Backend**: (Separate Repository)
    *   Node.js with Express.js for REST APIs
    *   MySQL for data storage
    *   Google Places API for geocoding

## Getting Started

To get a local copy of the frontend up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm installed on your machine.
*   A running instance of the backend service. The backend is responsible for file processing, database interaction, and serving the Google Maps API key.

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/warren-xu/conflict-checker.git
    cd conflict-checker
    ```

2.  **Install NPM packages**
    ```sh
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the root directory of the project and add the URL of your backend server.

    ```env
    REACT_APP_API_URL=https://your-backend-api-url.com
    ```
    The proxy in `package.json` (`"proxy": "https://maps-locator.onrender.com"`) is used for development to forward API requests.

4.  **Run the application**
    ```sh
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1.  Navigate to the **Upload** page using the top navigation bar.
2.  Click the "Choose File" button to select a CSV file containing addresses.
3.  Click the **Upload** button to process the file.
4.  Navigate back to the **Home** page to see the addresses displayed as markers on the map.
5.  Use the search bar at the top of the map to search for any location.
6.  Click on any marker to view its address details.

## License

Distributed under the MIT License. See `LICENSE` for more information.
