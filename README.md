# What's Cookin

#### What's Cookin is an application that allows users to browse through a list of recipes, and interact with those recipes in a variety of ways. Users of this application can:

* See the details of each recipe, including the names and amounts of ingredients and specific instructions.
* Get the total cost of the ingredients required for each recipe.
* Save recipes to a collection of favorites.
* Search and filter recipes by name, ingredient, or type. 
* Check to see if they have enough ingredients in their pantry to cook a recipe. 
* Add recipes to their Menu of upcoming meals.
* Get a grocery list of ingredients needed to cook what is on their menu and the total cost. 

#### This was a Mod 2 project in Turing School of Software and Design's Front End Engineering program during the 2006 inning. The project was designed to help students better understand how to:

* Follow a specification to make a working application.
* Implement ES6 classes that communicate to each other as needed.
* Write modular, reusable code that follows SRP (Single Responsibility Principle).
* Implement a robust testing suite using TDD.
* Use object and array prototype methods to perform data manipulation.
* Display information on the page while maintaining ability to test class properties and mehtods.
* Create a user interface that is easy to use and displays information in a clear way.

## Setup/Install

* Clone down this repo from the command line with the command:

```bash
 git clone git@github.com:Leasw144/whats-cookin-starter-kit.git whats-cookin
```

* Once you have cloned the repo, run `cd whats-cookin` to change into the directory.

* Run `npm install` to install the library dependencies.

* Run `open index.html` in your terminal to open the application in your browser. 



---------------------------------------------------------------------




# What's Cookin'? Starter Kit 

The details of this project are outlined in the <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

## Set Up 

1. Within your group, decide on one person to have the project repository on their Github account. This person will *fork* this repository - on the top right corner of the page, click the fork button. 
2. Both group members should then clone down the forked repository (make sure that everyone is added as a collaborator as well). Since you don't want your project to be named "whats-cookin-starter-kit", add an optional argument after the repo url when cloning. The command should look like this: `git clone [remote-address] [what you want to name the repo]`.
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run npm install to install project dependencies.
4. Run open src/index.html in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
5. Make sure both members of your team are collaborators on the forked repo.

## Testing 

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran npm install, then the tooling you need to start testing is already installed (mocha and chai).

## Linting Your Code 

Run the command in your terminal npm run lint to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit, but that's ok - the linter is still running successfully.

Your linter will look only at the JavaScript files you have within the src and the test directories.


## Data Model
### Users
```js
{
  "id": [number],
  "name": [string],
  "pantry": [array of objects with amount and ingredient id properties]
},
```

### Recipes
```js
{
  "ingredients" [array of objects with ingredients ids(connection to ingredients), ingredient names, and quantity data],
  "instructions": [array of objects with instructions properties and numbered steps],
  "name": [string],
  "tags": [array of strings representing info about the recipes]
}
```

### Ingredients
```js
{
  "estimatedCostInCents": [number],
  "id": [number -- connection to users and recipes],
  "name": [string]
}
```
