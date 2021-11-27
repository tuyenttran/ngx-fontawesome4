**NOTE: This library supports FontAwesome version 4 ONLY.<br/>
If you are using FontAwesome version 5+, please use [@ui4ngx/fontawesome](https://github.com/tuyenttran/ngx-fontawesome).**

# @ui4ngx/fontawesome4


[![npm Version](https://img.shields.io/npm/v/@ui4ngx/fontawesome4.svg)](https://www.npmjs.com/package/@ui4ngx/fontawesome4)
[![Build Status](https://app.travis-ci.com/tuyenttran/ngx-fontawesome4.svg?branch=master)](https://app.travis-ci.com/tuyenttran/ngx-fontawesome4)
> Another Angular way to display FontAwesome (v4 only)

## Demo

Check out the **[demo](https://tuyenttran.github.io/ngx-fontawesome4/)**.


## Install

**1. Install Packages**

`npm install font-awesome@^4.7.0`

`npm install @ui4ngx/fontawesome4`

**2. Import the module:**

_If you're using [Angular CLI](https://github.com/angular/angular-cli), add to `styles` inside the `angular.json` (Angular CLI v6.0.0+) or `angular-cli.json` (older version of Angular CLI)_
```json
"styles": [

    "node_modules/font-awesome/css/font-awesome.css",
    "node_modules/@ui4ngx/fontawesome4/css/ngx-fontawesome.scss"
    
],
```

_If you're NOT using the CLI, import the stylesheet to your `index.html` file. <br/>
This way CSS styles and Web Fonts will be downloaded automatically._
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

```typescript
//...
import { NgxFontAwesomeModule } from '@ui4ngx/fontawesome4';

@NgModule({
  //...
  imports: [
    //...
    NgxFontAwesomeModule
  ],
  //...
})
export class AppModule { }
```


## Features

**&lt;fa&gt;** Component and i[fa]Directive 


*Attributes*

Name      | Type               | Options                                   | Optional
---       | ---                | ---                                       | ---
name      | `String`           | Icon [Name](http://fontawesome.io/icons/) | No
title     | `String`           | Tooltip to display when hovered           | Yes
alt       | `String`           | Text alternative to support screen reader | Yes
animation | `String`           | `spin, pulse`                             | Yes
cssClass  | `String`           | Additional CSS classes                    | Yes
pull      | `String`           | `left, right`                             | Yes
scale     | `Number`           | `2 - 10`                                  | Yes
size      | `String`           | `lg, sm, xs`                              | Yes
stack     | `Number`           | `1,2`                                     | Yes
rotate    | `Number`           | `90, 180, 270`                            | Yes
rotateBy  | `Number`           | Angle in degree,  etc `45, 30,...`        | Yes
flip      | `String`           | `horizontal, vertical, both`              | Yes
border    | `Boolean`          | `true, false`                             | Yes
fixedWidth| `Boolean`          | `true, false`                             | Yes
inverse   | `Boolean`          | `true, false`                             | Yes

*Syntax*

**&lt;fa&gt;** Component 

```html
<fa     name="..."
        title="..."
        alt="..."
        cssClass="..."
        pull="left|right"
        scale="2|3|4|5|6|7|8|9|10"
        size="xs|sm|lg"
        stack="1|2"
        rotate="90|180|270"
        rotateBy="45"
        flip="horizontal|vertical|both"
        animation="pulse|spin"
        border="true"
        fixedWidth="true"
        inverse="true"></fa>
```


**i[fa]** Directive 


```html
<i fa   name="..."
        title="..."
        alt="..."
        cssClass="..."
        pull="left|right"
        scale="2|3|4|5|6|7|8|9|10"
        size="xs|sm|lg"
        stack="1|2"
        rotate="90|180|270"
        rotateBy="45"
        flip="horizontal|vertical|both"
        animation="pulse|spin"
        border="true"
        fixedWidth="true"
        inverse="true"></i>
```

## Extras

You can add custom animations by using [font-awesome-animation](https://l-lin.github.io/font-awesome-animation/) library along with <b>@ui4ngx/fontawesome4</b> library.<br/>

**1. Install Packages**

`npm install font-awesome-animation`

**2. Import the module:**

_If you're using [Angular CLI](https://github.com/angular/angular-cli), add to `styles` inside the `angular.json` (Angular CLI v6.0.0+) or `angular-cli.json` (older version of Angular CLI)_
```json
"styles": [

    "node_modules/font-awesome-animation/css/font-awesome-animation.css",

],
```

_If you're NOT using the CLI, import the stylesheet to your `index.html` file. <br/>
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.3.0/font-awesome-animation.min.css">
```

*Syntax*

**&lt;fa&gt;** Component

```html
<fa name="..."
    cssClass="animated faa-* faa-reverse faa-fast faa-slow"></fa>
```

**i[fa]** Directive 


```html
<i fa name="..."
   cssClass="animated faa-* faa-reverse faa-fast faa-slow"></i>
```

For more details, please check out Extras tab in the **[demo](https://tuyenttran.github.io/ngx-fontawesome4/)** page. 

## NPM version explained

NPM Version will be used to identify 
<li>the version of Angular (Major Version number)</li> 
<li>the version of the libray (Minor Version number)</li>


####For example:

Version   | Angular Version    | Library version
---       | ---                | ---
`5.1.1`   | `^5.0.0`           | `1.1` Initial commit
`6.2.2`   | `^6.0.0`           | `2.2` Major bug fixes or new feature ...
`13.3.1`  | `^13.0.0`          | `3.1` Upgrade and new feature ...

## TODO

- Add unit tests and integration test
- Improve **[demo](https://tuyenttran.github.io/ngx-fontawesome4/)** page

## License

MIT © [Tuyen T Tran](mailto:anhtuyen.tran@gmail.com)
