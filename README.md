# 🧱 Cement JS? 
A logic based reactive JavaScript library that binds your application together.

## Features

Coming soon.

## Setup

Setting up Cement on your local machine is easy. There's two folders to look out for. The `lib` folder contains the framework code that compliles into `dist`. The `dist` folder is what you would use in your node_modules folder.

The `debug` folder is its own project running within Cement to test the framework. Here's a quick guide on how to set it up.

1. First of all we need all our dependencies installed.
Run `npm install` in both the root directory and in the `debug` folder.

2. To compile our `lib` folder into `dist` with our config file we have to run `rollup -c` in the root directory.

3. Now let's create a node_module link for Cement. Go to the root folder and run `npm link`, then head to the `dist` folder and run `npm link cement`. This creates a cement folder in your node_modules folder.

4. Lastly go to your `debug` folder and run this command to start the test project   `npm start`

Woila! Project should now be running on `http://localhost:8080/`.