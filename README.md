# Cumulocity Widget - Event Chart [<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-event-chart-widget/releases/download/2.0.0/event-chart-runtime-widget-2.0.0.zip)

  This is an Angular widget, which is designed to display the chart for the specific event type. It groups the events based on the entered group by parameter and displays the count for each group by parameter value. To display event chart for days enter the group by parameter as 'days' in configuration.

### ⚠️ This project is no longer under development. Please use [cumulocity-event-chart-widget-plugin](https://github.com/SoftwareAG/cumulocity-event-chart-widget-plugin) for Application Builder >=2.x.x and Cumulocity >=1016.x.x⚠️


  The charts available include
  * Vertical Bar Chart

  * Horizontal Bar Chart

  * Donut Chart

  * Pie Chart

  * Radar Chart

  * Polar Chart

  * Stack Chart

  The widget also comes with an inbuilt color picker, which helps one to customize chart/border colors.
### Please choose Event Chart Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY | EVENT CHART WIDGET |
|--------------------|------------|-----------------------|
| 1.3.x              | >= 1011.x.x| 2.x.x                 |
| 1.2.x              | 1010.x.x   | 1.x.x                 |  


![eventchart](https://user-images.githubusercontent.com/89508319/155273813-dbb310c6-78d4-49f6-b258-1fb7916e2c53.JPG)

## Features

*  **Support single device and group devices:** Based on widget configuration.
*  **Supports Event Chart:** It displays the Event chart for the selected Event Type and group by parameter in configuration.
*  **Supports Grouped charts and stack Charts:** Based on filter type selected in configuration.
*  **Supports different flavors charts:** Based on chart type field in configuration.

## Supported Cumulocity Environments:
  
*  **App Builder:** Tested with Cumulocity App Builder version 1.3.0
  
## Installation
   
### Runtime Widget Deployment?

* This widget support runtime deployment. Download [Runtime Binary](https://github.com/SoftwareAG/cumulocity-event-chart-widget/releases/download/2.0.0/event-chart-runtime-widget-2.0.0.zip) and use application builder to install your runtime widget.

### Installation of widget through Appbuilder 

**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v14.18.0`)
  
* NPM (Included with NodeJS)
  
**External dependencies:**

```

 "@angular/cdk": "^11.2.13",

 "@angular/material": "11.2.3"

 "chart.js": "^2.9.3",

 "@angular/core": "~11.1.2",

"ng2-charts": "^2.3.2",

"@c8y/ngx-components": "1011.0.12",

"@c8y/ng1-modules": "1011.0.12",

"@c8y/style": "1011.0.12",

```

**Installation Steps For App Builder:**

**Note:** If you are new to App Builder or not yet downloaded/clone app builder code then please follow [App builder documentation(Build Instructions)](https://github.com/SoftwareAG/cumulocity-app-builder) before proceeding further.

1. Open Your existing App Builder project and install external dependencies by executing below command or install it manually.
  - Angular fontawesome version 4.7.2

    Installation command:  ```npm i @angular/fontawesome@4.7.2 ``` 

  - Angular Material version 11.2.3

     Installation command: ```npm i @angular/material@11.2.3 ``` 

  - Ng2-charts version ^2.4.3

    Installation command:  ```npm install ng2-charts@2.4.3 --save``` 

  - Chart.js version 2.9.3

      Installation command :  ```npm i chart.js@2.9.3 ``` 

2. Grab the Event Chart **[Latest Release Binary](https://github.com/SoftwareAG/cumulocity-event-chart-widget/releases/download/2.0.0/gp-event-chart-2.0.0.tgz)**

3. Install the Binary file in app builder.

```
npm i <binary  file  path>/gp-event-chart-2.0.0.tgz
```

4. Open index.less located at /cumulocity-app-builder/ui-assets/

5. Update index.less file with below theme. Import at first line in file/begining of file(Please ignore this step if it already exist).

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import '~@c8y/style/main.less';
@import '~@c8y/style/extend.less';
```
6. Import GpLibEventChartModule in app.module.ts and also place the imported Module under `@NgModule`.

```

import {GpLibEventChartModule} from 'gp-event-chart';

@NgModule({

  imports: [

    GpLibEventChartModule    

      ]

  })

```

7.  Congratulation! Installation is now completed. Now you can run app builder locally or build and deploy it into your tenant.
  
```
//Start App Builder
npm run start
// Build App
npm run build
// Deploy App
npm run deploy
```

## Build Instructions
  
**Note:** It is only necessary to follow these instructions if you are modifying/extending this widget, otherwise see the [Installation Guide](#Installation).
  
**Prerequisites:**
  
* Git
  
* NodeJS (release builds are currently built with `v14.18.0`)
  
* NPM (Included with NodeJS)

**Instructions**

1. Clone the repository:
```
git clone https://github.com/SoftwareAG/cumulocity-event-chart-widget.git
```
2. Change directory:

  ```cd gp-event-chart```

3. run npm i command to install all library files specified in source code

  ```npm i ``` 

4. run npm run buildMinor command to create a binary file under dist folder

  ```npm run buildMinor ``` 

5. (Optional) Local development server:
  
  ```npm start```

6. Build the app:

  ```npm run build```

7. Deploy the app:
  ```npm run deploy```

## QuickStart
This guide will teach you how to add widget in your existing or new dashboard.

1. Open the Application Builder from the app switcher (Next to your username in the top right)

2. Click Add application

3. Enter the application details and click Save

4. Select Add dashboard

5. Click Blank Dashboard

6. Enter the dashboard details and click Save

7. Select the dashboard from the navigation

8. Check for your widget and test it out.



Congratulations! Event Chart is configured.
  
## User Guide

![EventChartConfig](https://user-images.githubusercontent.com/67993842/92461930-76bc1b00-f1e7-11ea-9ccd-08760d34487e.PNG)

1. Target Assets/Devices - deviceid/groupid of interest
2. Group By- provide the field name from the device managed object on which you want to group.
  For eg.
    * Set the value to Process if you want to group for each process 
    * Set the value to date if you want to see the result for each date.
    * set the value to time if you want to see the time chart.
3. Event Type - name of the event type for which you want chart.
  For eg.
    * c8y_ProcessStatusUpdate
    * s7y_BeaconLocationU
4. Legend - position of legend you want or you choose none if you don't want to see legend
5. Filter - provide the field name from event object, based on whose value the data will be filtered and will be displayed for each group selected in group by.
  For eg.
    * Set the value to classification if it is there in your event object. It will display the chart with different classsification for each group.
6. Chart Type - type of chart that you want to display.
  For eg.
    * Stack chart will work only if filter ffield value is set in configuration.
                
One can also select the custom chart color and Border color to beautify the chart, if not default colors will be picked.


------------------------------
  
  
This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
  
_____________________
  
For more information you can Ask a Question in the [TECHcommunity Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).
  
  
You can find additional information in the [Software AG TECHcommunity](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).


