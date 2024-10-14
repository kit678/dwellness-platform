# Branching Strategy for Dwellness Platform

## Overview

This document outlines the steps to manage the Dwellness Platform project using Git and GitHub. It provides guidance on creating a trimmed-down version of the project while preserving the current state for future development.

## Step 1: Create a New Branch for the Current State

1. **Create a New Branch:**
   - Open your terminal and navigate to your project directory.
   - Create a new branch to save the current state of your project:
     ```bash
     git checkout -b full-featured-version
     ```

2. **Push the Branch to GitHub:**
   - Push this branch to your remote repository to ensure it's saved:
     ```bash
     git push origin full-featured-version
     ```

## Step 2: Create a Branch for the Trimmed-Down Version

1. **Create a New Branch for the Smaller Project:**
   - Switch back to the main branch (or the branch you want to base the smaller project on):
     ```bash
     git checkout main
     ```
   - Create a new branch for the trimmed-down version:
     ```bash
     git checkout -b minimal-version
     ```

2. **Modify the Codebase:**
   - Make the necessary changes to simplify the project. This might include removing or commenting out features, simplifying UI components, or adjusting configurations.

3. **Test Locally:**
   - Ensure that the trimmed-down version builds and runs correctly on your local machine.

## Step 3: Push the Trimmed-Down Version to GitHub

1. **Commit Your Changes:**
   - Add and commit your changes to the new branch:
     ```bash
     git add .
     git commit -m "Create minimal version of the project"
     ```

2. **Push the Branch to GitHub:**
   - Push the minimal version branch to your remote repository:
     ```bash
     git push origin minimal-version
     ```

## Step 4: Manage Deployment on Vercel

1. **Connect the Minimal Version Branch to Vercel:**
   - Log in to your Vercel account and navigate to your project settings.
   - Under the "Git" section, set the `minimal-version` branch as the production branch if you want to deploy this version.

2. **Deploy the Trimmed-Down Version:**
   - Vercel will automatically deploy the branch you set as the production branch. Ensure that the deployment is successful and the application works as expected.

## Step 5: Switching Between Versions

- **Switch to Full-Featured Version:**
  - If you need to work on the full-featured version again, switch to the `full-featured-version` branch:
    ```bash
    git checkout full-featured-version
    ```

- **Switch to Minimal Version:**
  - To continue working on the minimal version, switch back to the `minimal-version` branch:
    ```bash
    git checkout minimal-version
    ```

## Conclusion

By using branches, you can effectively manage different versions of your project without losing any work. This approach allows you to continue developing the full-featured version while launching a simplified version early.
