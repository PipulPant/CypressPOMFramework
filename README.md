## Proshore Cypress Automation Framework

Cypress automation framework with Page Object Model to perform UI testing with Typescript support .

## How to do the setup of the automation framework

## 1. Clone the repo

## 2.Install the dependencies

      cd ${project_directory}
      yarn install
      Editor of the Choice
      Visual Studio Code

For any other editor of choice make sure you config below dependencies yourself

For formatting code This project use prettier for code formatting. For VScode install extension quick guide

## 3.Running the test scripts

## Headed Mode(Opens cypress test runner):

        yarn open

## Headless Mode(Runs test in headless):

        yarn run:test

## Test Structure

      Cypress latest version i.e 10.10.0 is followed for folder structure. Further we have added page object model for maintenance of the selectors and various user action.
      All the test data inputs , error message are added in the fixture folder.

## Additional Information

     I have added Prettier to beautify the test code during development phase.
     
## Automated Test cases Status

Login -Passed
Retrieve Quotation - Passed
Recieve Quotation - Passed
Edit Profile - Failed
Profile - Failed
LOgout - Passed

![image](https://user-images.githubusercontent.com/74281996/199217141-30a198a2-7741-4d13-82fa-0a9d2a0a6e87.png)

![image](https://user-images.githubusercontent.com/74281996/199214683-0940feeb-da24-4d9f-8bea-3f7d5decac5e.png)

![image](https://user-images.githubusercontent.com/74281996/199214757-82815203-2834-4976-bab5-59164164ecaa.png)




