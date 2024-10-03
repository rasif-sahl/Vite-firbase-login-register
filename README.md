# Vite Application with Firebase Authentication

<div align="center">
    <img src="/public/demo.png" >
</div>

This Vite-powered web application features a streamlined and user-friendly authentication flow. It includes dedicated login and registration screens where users can sign up or sign in using Firebase Authentication. The registration process supports secure account creation with email/password or mobile number authentication, protected by Firebase’s robust security and reCAPTCHA verification.

Once authenticated, users are seamlessly redirected to a dynamic dashboard page. The dashboard serves as the primary interface, providing access to personalized features and data. This application leverages Vite's fast development capabilities and Firebase's real-time authentication to ensure a secure and responsive user experience.


## Firebase Setup

- Go to the Firebase Console:
- Select Your Project:
    - From the Firebase dashboard, select your existing project or create a new project if you haven't set one up yet.
- Navigate to Project Settings:
    - In your Firebase project, click on the gear icon next to "Project Overview" in the top left corner.
    - Click on Project settings from the dropdown menu.
- Firebase SDK Configuration:
    - Scroll down to the Your apps section.
    - If you haven't added an app yet, click on Add app (e.g., Web app) and follow the setup instructions.
    - After adding an app (or if you already have an app), you'll see your Firebase SDK configuration code snippet.
- Copy the Required Values:
    - And then create a .env and copy the variables from the env-example file and paste them in the .env and replace it with your values.

## Firebase mobile number authentication

1. Enable Phone Authentication in Firebase Console
- Go to the Firebase Console.
- Select your project.
- Navigate to the Authentication section in the left-hand menu.
- Go to the Sign-in method tab.
- Enable Phone as a sign-in provider.
- Optionally, configure reCAPTCHA settings for additional security.

2. Set Up Test Phone Numbers for Development
For development purposes, Firebase allows you to set up test phone numbers to avoid actual SMS charges.

- In the Authentication section, under Sign-in method, scroll to the Phone numbers for testing section.
- Add test phone numbers and corresponding verification codes. These numbers won't actually receive SMS messages but will return the verification code you've set.
- Example:-
    - Phone number: +1234567890
    - Verification code: 123456

3. Configure reCAPTCHA
Firebase automatically handles reCAPTCHA for mobile phone authentication. However, in development mode (localhost), you may bypass the visible reCAPTCHA challenge by configuring it as invisible.

- Ensure reCAPTCHA is set up in Phone Authentication settings.
- You don’t need to explicitly handle reCAPTCHA for testing unless you want to customize it.

4. Verify Your Domain
If your project will be deployed to a domain (non-localhost), make sure the domain is added to the Authorized domains list.
- In the Authentication section, navigate to the Settings tab.
- Add your app’s domain (e.g., localhost, your-app-domain. com) to the Authorized domains section.

5. Set Up Quota and Billing
Phone authentication comes with free usage limits, but for larger-scale usage:
- Navigate to Usage and Billing under the Project Settings.
- Upgrade your Firebase plan if needed, as phone authentication might need additional resources once you're in production.


## Set-up

- `git clone <repository-url>`
- `cd <your-project-directory>`
- `npm install` or `yarn` or `pnpm install`
- `npm run dev` or `yarn dev` or `pnpm dev`