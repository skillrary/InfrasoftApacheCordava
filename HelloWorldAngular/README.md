Create a new project
--------------------
ng new <project-name>


Run existing angular project
----------------------------
ng serve


Home Exercise
-------------
ngSwitch

ngClass

ngStyle

https://stackoverflow.com/questions/35269179/angular-conditional-class-with-ngclass

---------


http://zerocodeform.com

Form builder of reactive form for angular/ionic/


How to create a build of angular project

ng build --configuration=production
ng build --configuration=qa
ng build --configuration=development


Use this build command whne you have to ship that angular project into the cordova based project
------------------------
ng build --prod

add this to app.module.ts

import { LocationStrategy, HashLocationStrategy} from '@angular/common';


@NgModule({
 ...
 ],
 providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})


Once you copied www folder into iOS or android www replace <href>

`<bare href="/">
to this
<script>document.write('<base href="' + document.location + '" />');</script>`


How to run dist folder in local machine.
----------------------------------------
npm install -g http-server

Run http-server command in dist>project name folder


Learn angular example
---------------------

http://keepnote.cc/

https://stackblitz.com/



