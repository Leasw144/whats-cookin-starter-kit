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
* Display information on the page while maintaining ability to test class properties and methods.
* Create a user interface that is easy to use and displays information in a clear way.

## Setup/Install

* Clone down this repo from the command line with the command:

```bash
 git clone git@github.com:Leasw144/whats-cookin-starter-kit.git whats-cookin
```

* Once you have cloned the repo, run `cd whats-cookin` to change into the directory.

* Run `npm install` to install the library dependencies.

* Run `open index.html` in your terminal to open the application in your browser. 

## Application in Action

* When a user clicks the details button on a recipe card, a detailed view of the recipe is displayed including an enlarged image, ingredients, instructions to cook and a list of still needed ingredients.


![gif of recipe details card](assets/details.gif)

* When a user clicks on the heart icon on a card, the recipe is added to their favorites and can be viewd by clicking on the view favorite recipes button.


![gif of favoriting and unfavoriting recipes](assets/realFavorites.gif)

* When a user types an input into the search bar, page will return a list of recipes that match it by description and/or tag.


![gif of the search bar in use](assets/search.gif)


## Challenges/Wins

This project was certainly the most open to interpretation of any project to date in our experience at Turing, and at first it make approaching it very intimidating and overwhelming. It really pushed us to take advantage of our organizational tools, and use things like Github Projects to break down the larger task at hand into bite-sized, do-able chunks. Learning how to work together to decide what kind of MVP we wanted to produce was challenging for the same reasons: the spec for this project was very intentionally vague, especially when compared to what we have worked on leading up to this point in the program. By using the project board to outline each next step, we were also able to get a much clearer picture of what this application actually needed to look like. 

### Future Iterations

Due to some of the challenges we faced, we only had so much time to implement the features that we wanted. Given more time, future iterations would contain some of the following:

 * Users are currently able to click on any recipe where needed ingredients are listed below the picture. Future iterations would include an aggregate price as well as specified amounts.
 * Users are currently unable to add recipes to their menu list. Future iterations would include this functionality that would provide users an option to get a grocery list of the missing ingredients they still need to cook what's on their menu including an estimated cost of those items still needed.
 * More robust testing could be used for sad path tests for instances where the data being inputted was faulty or not available.
 * Providing users the ability to choose different user profiles would also be included. As of right now, the current user is randomized upon page load.
 * In future iterations, the search engine would also be able to search by ingredient and include non-alphbetical characters in its search.
## Contributors

* This project was submitted on 7/15/2020 by [Linus Leas](https://github.com/Leasw144) and [Aaron Burris-DeBoskey](https://github.com/Abdeboskey).
