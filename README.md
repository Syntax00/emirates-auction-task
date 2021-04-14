# Emirates Auction Task

<br />

<p align="center"> 
<img src="https://i.imgur.com/oFcOZq1.png" style="width: 200%">
</p>


The task project uses ```create-react-app``` to initialize the React.js ecosystem. So, it's so simple to get the project up and running, simply by installing the required NPM packages and then start the server:

```javascript
npm install
```

```javascript
npm start
```

## Used Technologies, Third-party Packages, and Libraries
1. For the UI, `SASS/SCSS` along with `CSS Modules` are being used with native SASS/CSS, no UI frameworks were utilized.
2. Responsive design is handled using native `CSS Media Query`. Each component includes its own required Media Query handling.
3. Animations are also natively handled using `CSS Transitions`.
4. For the form and validations, `react-final-form` is utilized along with `react-select` for enhanced Select fields.

## Project Structure
```javascript
-- components (contains all the components being utilized and composed to render the application)
        |- CarForm
                |- CarForm.js
                |- CarForm.module.scss
        |- TopHeader
                |- TopHeader.js
                |- TopHeader.module.scss
        |- HeaderBanner
        |- ServicesSection
        |- FormElements
                |- FormFieldWrapper
                |- SelectField
                |- TextInput
        |- UIElements
                |- CustomButton
                |- SectionTitle
                |- ...
-- assets (contains the assets utilized by the components, e.g. images)
        |- images
                |- logo.png
                |- header_bg.png
                |- ...
-- common.scss (contains all the SASS variables, mixens ..etc globally and frequently used by the components)
-- utils
-- App.js (composes all the sections components to form the application and finally render it to the DOM)

```
