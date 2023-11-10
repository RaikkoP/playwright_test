import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    //Check connection to localhost
    await page.goto('http://localhost:5173/')
    //See if page has correct title
    await expect(page).toHaveTitle('todos');
});

//Test Case: Add new task to list
//The result we want: The program manages to add a new task and after adding
//the tasklist should open with our task now being in the list
test('Can add task to ToDo list', async ({ page }) => {
    //Check connection to localhost
    await page.goto('http://localhost:5173/')
    //Find textbox responsible for adding tasks, enter filler text and press enter to submit
    await page.getByRole('textbox').fill('Need to clean room');
    await page.keyboard.press('Enter');
    //After pressing enter the tasklist should open and we shoudl see our task added.
});

//Test Case: Check off task from tasklist
//The result we want: The program opens the tasklist and then find the first task
//and clicks the button next to the task to check it off. The style of the task should change
test('Can check off tasks that have been completed', async ({ page }) => {
    //Check connection to localhost
    await page.goto('http://localhost:5173/')
    //Find the icon that opens the task list and click it
    await page.click('img[alt="Toggle Button"]');
    //Find and press button to check off first task
    await page.locator('.checkButton').first().click();
    //The style of the task should change after being clicked.
});

//Test Case: Hide task list
//The result we want: The program creates a new task and the tasklist appears. After it appears,
//we look for the button that is used to hide it and click it. The tasklist should now be hidden.
test('Can hide task list', async ({ page }) => {
    //Check connection to localhost
    await page.goto('http://localhost:5173/')
    //Create new task, this automatically opens task list
    await page.getByRole('textbox').fill('Need to clean room');
    await page.keyboard.press('Enter');
    //Attempts to close task list after being opened.
    await page.click('img[alt="Toggle Button"]');
    //Task list should now be hidden
})