
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

Clone this repository.

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

![Reporting](https://lh3.googleusercontent.com/sEP4bbl1MBMVfyR0Rehbt_7AsmhN3tYjReLdqFwlQSHKN5ujGzpRCX9optcP6JHVSB87Ukxy4pPdeVrr8XwyJJx-dYl8PkJ0wNae0aLD7ROuJBGyVAxzgAYH1N9viE6rCzS9L2P831Vex5fRAFFSkpe905aDLLvYgO0-1Q20k7TwLeQ8we6lUx5LmdVlKGCZ9Mw3OjdqS-UwxGhGQYJMwhGCc3WshqBr-GO-jTJhew_d90TbYrO-BawqpABXPJ78x6bgQyMX4pvQo7kk3qEaOkdvAwvLhSl7uk_eFq5gpVMWYKC19-kPTlcNtWvtzWIb8b1IITXmUC65RN7T7QHeJHmiEC357YzOYaNg4YZbCu_XT7puh_9OBEnIX3CVDkj4ilIV_vR_u2flby1b1IWDhaElwQTPm2z6NYewJrvvS7DyZyfHSU2AUSKxYTdOXQgsT3m6VHh_xZ9EgvEYsiKLXbmEOBDvmzUrg08kOf79zOIb6fgWOguhNMG5FENgOo7-CaODQ79VZqA-vDLwFinMpfNDlKxaXRRk0KHG_Wb5RK0Pse0ylx_Das-H6TYd9c5TLv6UlQWC4nQf7iCQopCXxlmJ_6G9R7RVvK98IfLw0jlMQZm-8ZwnjPdXYXP_Wv5hRI_1Hfr4ZZIJcaXihlBjcn17DUmEhw_MYTSPi1OZZJrbg9KbZKBQFfV4kzzyZKmN75Qlkyk8o8uobG0vCid03jzrzR3JUJ27V7X0PKtwqkBKJF-I7Oo4iuvpJwtnhtM9E2sd9m6nwu8d8qijddx8FxbPKDFj6Qb5Fck2klxfVJNAM9hOBFusZTvN0uDsvGQ_49jS-rCKdAvA8pRUHbRa8q-3j94y3zlDRT-26u_OIQaQrvk7J5TtztSapNo8GdYqGkJBbKP1PQZqSecS6Xib_lQv7dEXpirbd1CntfbUk4pq=w1594-h1332-s-no?authuser=0)

![Reporting](https://lh3.googleusercontent.com/uwKbMbpA7AjczYv1uNT9kiWOnpeE0pheQaLVbvvsIk8p7pFIhWnizOAQdsuyObJZf5I-NQW7ChgbBaSpju502ka5-MlCtyE7CGMNQbQMFwqj7T83lCmKFpud9qFTxy7nkIBnBoMPMX4LYsfO783CYzE-tK3ThF2Ex5W89t3h1YLPJx8-ey1Z7-rGfxH7kmNyMkj9QuER_fs0JHxfp_tJXsG09hkDXDtJfvsjskXAmuTTjn1ZHBr6cb8_Cx1UEtHXLQXBBS-Qsj1uHiZmmK3OwK-bMDfDq1habVvENUXsKgbW8ivIk_eb9FKHAD-3k3a9wc7FJ3DTg_ZR4UPk4aZ_GS9sRUYGLRrmsOocroacAP_y8Oc4m9Up1ydyxpHaEjifbkal_Ldcs5mH9cwn6tib3I57x_1lZTsFqZEbgHYjWHi7sHZrRK7Y09BOOM1tWZ-aEhCjFD6N7u9UdgXR82bI2yRly5hvMxTN2QIy-Yl4ztgkWCZIYCOHErEfpnZSxChkYNEhBjP-eO2NaAkhHYWzZpDsbsg3uTQz0aKtz5HqCpskK1suVib1sBalF-ut-xMq3ewD2mDg5xUzGtkXwnZeBgK4PGbNTmvjaBQmdsm53wSpexizq9YCiwNw4z3aV7zpfvrCNQl9TMmTiPP3bHLA26jTQBgVX_MsWr2vtTf6Cxz1zIPL8_1VcgrZb6bu1E3tZje72IcW6PL8Ae0IwWuj8vUOo7z57OJugDGUoz7aBWeXZoxij1wx4nSNVJ9qOwBWqASXbXD_cMt90C6xg4Ksf8wyDFWb7ALm2S6-N4BCp6GqPY1SMe7twKA_0VwzZ0ulxyCGLUV_EiL2_uSXbmAqwIgWvtQk6iLNd6WxET1bxLSLhvhP9CYhm7Ie7vj0_qnzU9acu1WPKY8JAh9hGkn1W6CUKV4JKXOUlCJc51E_M5q5=w3188-h1826-s-no?authuser=0)

![Accessibility analysis](https://lh3.googleusercontent.com/DNb7LsFfYjUp4RxKYUbCATvWv1EOYXFJIA3LEaaQPulXgrEMkonWui2sSkH0TMveeYD-_ErNpIdqOq4WMTpWu0H_75duPkdOony9crNLkwlm_RVc9nH_lU377C3kQA8GkxtfsTiTpMWOxvpN7ohBSqCuN4BJTW9LFNYOBXnHTlvuvEHE8cvQzb5U7k-ShCPknhYTZKsawU9AMkOZeSHa6jP29a-84Fk8rO7DBeQujzGg3Tqw1ErmDnB4bZvhY5WYbBmqfMfKarX0VQUwjAk6gOgScBSruXZV6ErACckyt4eCGQP8y8MmDdz6VSgAEgZ48BIShIp9PUS9pDIG0-lrrhlLjjDw58LNHBOay1TSpyMw5B_ts2bMkUnbGVwCP5VxKc8Z-31HHi4TTILWUSIDjzfUXGVQb6Zh4OkmixFNos1jSKp7zFRARX8nRAwzSkDBaXOT5kWYcuLlaHA74I7Yt6Pzwj-mhOYpS5Kklgysv6gkmQXYIlbIStQhpGOGa4_kozA7TfIzt-wD8l7J8uWJRbKuWeO3919F6V59fG0aVqG1sGSqMm7cj51OCWGTFVFxKUft6RodAJTxgxTpGjFLJ2N9B1_DUyZN9vHWVN84C8uziogyyi7cvzzylzMLF6dXV8easOn4M-dxqwSFLHrhPfOloDcvDkgt-jSm5npOwQ0-RFk5Mm-4zixXynOuOq8L8CyUMzwFAilt6Auj75PPREHiHIqp0o3J5DsJKHEIRb9qBhWFAnMBVaUGd_NDN3XkuWAo7A4xDKo86L6a3u36ug_9aeY2GZfzb9ln_9b_SDsIgstzPz9EB-1KiHoC7s8euUVwhDCf037CE8soEGE8ldLt3QF8SuDtK5AL7txeTiigksFWXgVLpM3LlMZQKmUm5AOIFtkZg3QkvI5KykwlWJYmjPi5-wSCNfkagdQVMkRO=w3332-h1598-s-no?authuser=0)


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
