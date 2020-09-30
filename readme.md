# Accessibiliy Automation

## Disclaimer: These scripts are purely for informative purposes and should not be used as a workaround for ADA compliance. They do not promise an accessible website.

## To use

To sample this app, make a config.js within the public directory with the authentication recieved from Imagga.com.


```npm init```
```npm install```
```npm start```

## Synopsis 
This are some sample scripts to automate accessibility. 

These repo uses https://imagga.com/ for image recognition (alt-tags.js). This requires authentication, so may not be ideal for automating accessibility within an older static site. Hopefully an open one comes soon and you can use this as a template.

This repo has scripts to make the HTML tags for bold and italicizing purely CSS (font-styles.js). This is recommended by most accessibility checkers, as these tags can clutter if used purely for decoration.

Lastly, this repo has code to add aria-labels to buttons that read 'learn more' or 'read more' (aria-labels.js). These links are too broad for Screen Readers to understand where they go.

## Note
These scripts are obviously not ideal, as some SR's dont load JS scripts. This is meant as a temporary fix while remediation is being done. It is preferable to first enable accessibility within server side loops and manually where needed. 

There are some edge cases, such as popups, I have not yet covered. Could configure Roles 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles 

There will likely be issues I missed or that are specific to your site. If they are broad, or if my code could be improved, feel free to make a PR.

Let's build a more accessibile web so everyone can enjoy the entertainment, information, and connections that we may take for granted. 