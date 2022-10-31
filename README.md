## Proshore Cypress Automation Framework
   Cypress automation framework with Typescript to perform e2e testing .
   
## Setup

1. Clone the repo

2.Install the dependencies
   cd ${project_directory}
   yarn install
   Editor of the Choice
   Visual Studio Code

   For any other editor of choice make sure you config below dependencies yourself

   For formatting code This project use prettier for code formatting. For VScode install extension quick guide


#How to Run the Tests Locally
   ## Headed Mode:
        yarn cypress open

   ## Headless Mode:
        yarn cypress run 
        
#Test Structure
      cypress101.spec.js which contains the Test Scenario 1 and Test Scenario 2.

#Additonal Information
     For logging the accessibility test in console, I have added terminalLog() function which will display the accessibility voilation error in the            terminal.
      
