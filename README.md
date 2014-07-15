#Meteor-Polymer

Add the magic of web components and [Polymer](http://polymer-project.org) to [Meteor](http://meteor.com)!

##How to Install

As of now, Meteor-Polymer has not been added to [atmosphere](http://atmosphere.meteor.com)/[mrt](http://oortcloud.github.io/meteorite/)

To install:

1. Clone or download + unzip the project into the `/packages` subdirectory of your project.
2. Rename the folder from `meteor-polymer` to `polymer`
3. Copy the `elements` folder from the package into the `public` subdirectory of your project
4. Update `import.html` to include any web components you are using in your project
5. Use the web components in your project and watch the magic happen

```
/
+--.meteor
+--packages
  +--polymer
    +--package.js
    +--import.js
    +--platform.js
    +--smart.json
+--public
  +--elements
    +--...
    +--...
    +--import.html (this must be updated for your project-specific needs)
```