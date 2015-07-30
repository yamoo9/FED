/*! main.js © yamoo9.net, 2015 */

var app          = $('#app'),
	app_header   = $('header', app),
	app_headline = $('h1', app_header);

// GET
var app_margin_top           = css(app, 'margin-top');
var app_header_padding       = css(app_header, 'padding');
var app_headline_font_weight = css(app_headline, 'font-weight');

// console.log(app_margin_top);
// console.log(app_header_padding);
// console.log(app_headline_font_weight);

// SET
// css(app, 'background-color', '#f06000');
// css(app, 'margin-top', '100px');

css(app, 'background-color: #f06000; margin-top: 100px;');


css(app_headline, 'color', '#fff');

