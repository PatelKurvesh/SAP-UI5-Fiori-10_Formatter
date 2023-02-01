# SAP-UI5-Fiori-10_Formatter
A formatter in SAP UI5 is a JavaScript function that helps format the value of a binding before it is displayed in the UI. It allows you to manipulate the value in a specific way, such as converting it to a specific format, before it is displayed. The formatter function takes the raw data as an input and returns the formatted value. This can be useful for tasks such as converting timestamps to dates, converting numbers to currency, or for any other formatting that needs to be applied to data before it is displayed. Formatter functions can be used in binding expressions in SAP UI5 views.

Formatter use for single or Double binding.

Syntax:-

Single Binding :-
<p>"{path: 'cName',formatter: '.formatter.makeItUpperCase'}"</p>

Double Binding:-
<p>"{parts:[{path:'cColor'},{path:'Other'}],formatter: '.formatter.formatclr'}"</p>
