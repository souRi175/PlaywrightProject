const { test,chromium } = require('@playwright/test')

test("CommarTest",async function({page}){
 // Step 1: Navigate to the URL
 await page.goto('https://www.comar.tn/');

 // Step 2: Click on the "Actualités" section
 await page.click('text="Actualités"');

 // Step 3: Verify if the page is opened by checking the existence of the "ACTUALITÉS" text
 await page.waitForSelector('text="Actualités"');

 // Step 4: Enter "COMAR Assurances partenaire" into the search form and submit the search
 await page.fill('input[name="searchMeta"]', 'COMAR');
 await page.waitForTimeout(1000);
 await page.press('input[name="searchMeta"]', 'Enter');
 await page.waitForTimeout(2000);

 // Step 5: Verify the appearance of the text "COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba"
 await page.waitForSelector('text="COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba"');
 console.log("Text 'COMAR Assurances partenaire du Semi-Marathon Ulysse Djerba' found!");

});
