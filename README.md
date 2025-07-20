## How to Run the Project

To set up and run this project locally on your machine:

1.  **Clone the repository / Unzip the project folder:**
    * If shared as a Git repository: `git clone [Your_Repo_URL_Here]`
    * If shared as a ZIP file: Unzip the `YourName_ProgrammingChallengeApp.zip` file to your desired directory.
    * **Navigate into the project directory:**
        ```bash
        cd programming-challenge
        ```
        (Replace `programming-challenge` with the actual folder name if you renamed it after unzipping).

2.  **Ensure Node.js and npm are Installed:**
    * Download and install the latest LTS version of Node.js from [nodejs.org](https://nodejs.org/). This will also install npm.

3.  **Install Project Dependencies:**
    * In the project directory, open your terminal and run:
        ```bash
        npm install
        ```
        This command will download and install all the necessary libraries and tools for the project (as listed in `package.json`).

4.  **Firebase Project Setup (Crucial for Functionality):**
    * **Create Your Firebase Project:**
        * Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
        * Add a **web app** to your Firebase project and copy the `firebaseConfig` object.
    * **Configure Firebase in Your App:**
        * Open `src/firebase.js` in the project.
        * **Replace the placeholder `firebaseConfig` object** with your own copied configuration.
    * **Enable Google Sign-In:**
        * In Firebase Console, navigate to `Authentication > Sign-in method`.
        * Enable **Google** as a sign-in provider.
    * **Create Firestore Database:**
        * In Firebase Console, navigate to `Firestore Database`.
        * Click "Create database" and choose **"Start in production mode"**. Choose a suitable location.
    * **Apply Firebase Security Rules:**
        * Go to `Firestore Database > Rules` tab in the Firebase Console.
        * **Copy and paste the `Firebase Firestore Security Rules` provided in this `README.md` below** into the editor and click **"Publish"**.
    * **Set up the First Admin User:**
        * After the above Firebase setup, run the app locally (`npm run dev`) and log in using your desired Google account.
        * Go to your Firebase Console -> `Authentication > Users` tab. Copy the "User UID" for your logged-in account.
        * Go to your Firebase Console -> `Firestore Database`. Create a new collection named `admins`.
        * Add a new document to the `admins` collection. Set its **Document ID** to the UID you just copied. This marks that UID as an admin.

5.  **Set Firebase Project ID in Environment Variables (for Admin Dashboard link):**
    * Create a file named `.env` in the root of your project.
    * Add the following line, replacing `YOUR_PROJECT_ID_HERE` with your actual Firebase Project ID:
        ```
        VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID_HERE"
        ```
    * **Important:** Restart your development server (`npm run dev`) any time you modify the `.env` file for changes to take effect.

6.  **Run the Application (Development Mode):**
    * In the project directory, run:
        ```bash
        npm run dev
        ```
    * The application will typically be accessible in your web browser at `http://localhost:5173/` (check your terminal output for the exact URL).