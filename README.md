
# Test Automation with Cypress and POM 🌳

In this project, I aim to develop a robust and maintainable test automation framework using Cypress, implementing the best practices of the Page Object Model (POM) design pattern. Additionally, I will integrate Allure report and Axe for comprehensive accessibility analysis.


* Login (this application has captcha, so it could fail. In a testing environment they should be disabled to focus the testing on the functionality of the software.)
* Accessibility analysis of home, login and signup pages.

---

## Pre-requisites 📋

_What things do you need to run this demo_ 

* Node
* Java 8+
* IDE (visual studio or any)
* Browser like Google Chrome or Firefox.

## Installation 🔧

Clone this repository
I leave here the file "cypress.env.json" as an example, in a real project you should not upload env files.

```
npm install
```
    
## Running Tests 🔬

To run tests, run the following command

```
  npm run cy:test-allure (to generate allure report)
  npm run cy:headless" (to run headless mode)
```

## Reporting 📊 

```
1. npm run allure:report
2. npm run allure:open
```

---

## Screenshots

![Reporting](https://photos.app.goo.gl/UrLm6yxGJ8Kfzc7V8)

![Reporting](https://photos.app.goo.gl/fUrQC6QtQ7cGxLLJA)

![Accessibility analysis](https://photos.app.goo.gl/B3NjF4zKUNtJ89kh9)


---

## Contributing 🫶

1. Create your feature branch (git checkout -b new-feature)
2. Run the tests or make changes
3. Commit your changes (git add . , Git commit -m "About the new feature")
4. Push the branch (git push origin new-feature)
5. Create a new pull request

---

## Feedback 📨

If you have any comments, please let me know.


## Documentation ℹ️

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)
