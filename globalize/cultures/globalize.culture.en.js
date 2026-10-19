/*
 * Globalize Culture en (English)
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * WHY THIS FILE EXISTS
 *
 * en.ini asks for it (`globalize_locale_src = "globalize.culture.en.js"`) and the panel was requesting it
 * on every page and getting a 404. Globalize already ships an `en` culture inside globalize.min.js, so the
 * page worked anyway — but a 404 on every load is noise in the console, and a browser configured to be
 * strict about it can refuse a script outright, taking the rest of the page's JavaScript with it.
 *
 * WHAT IT DECLARES, AND WHY IT IS SAFE
 *
 * The values below are EXACTLY the ones the built-in `en` culture already has — measured from it, not
 * written from memory. The call passes no base culture, so Globalize deep-extends the culture that is
 * already loaded with these values: the result is the same culture, now stated in a file instead of being
 * an implicit default.
 *
 * Add nothing here that is not already in effect, unless it is a deliberate change: this file is now what
 * `en` IS, and a value here silently replaces the built-in one.
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "en", {
	name: "en",
	englishName: "English",
	nativeName: "English",
	language: "en",
	numberFormat: {
		pattern: ["-n"],
		decimals: 2,
		",": ",",
		".": ".",
		groupSizes: [3],
		"+": "+",
		"-": "-",
		"NaN": "NaN",
		negativeInfinity: "-Infinity",
		positiveInfinity: "Infinity",
		percent: {
			pattern: ["-n %","n %"],
			decimals: 2,
			groupSizes: [3],
			",": ",",
			".": ".",
			symbol: "%"
		},
		currency: {
			pattern: ["($n)","$n"],
			decimals: 2,
			groupSizes: [3],
			",": ",",
			".": ".",
			symbol: "$"
		}
	},
	calendars: {
		standard: {
			firstDay: 0,
			days: {
				names: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
				namesAbbr: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
				namesShort: ["Su","Mo","Tu","We","Th","Fr","Sa"]
			},
			months: {
				names: ["January","February","March","April","May","June","July","August","September","October","November","December",""],
				namesAbbr: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]
			},
			AM: ["AM","am","AM"],
			PM: ["PM","pm","PM"],
			eras: [{"name":"A.D.","start":null,"offset":0}],
			patterns: {
				d: "M/d/yyyy",
				D: "dddd, MMMM dd, yyyy",
				t: "h:mm tt",
				T: "h:mm:ss tt",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				M: "MMMM dd",
				Y: "yyyy MMMM",
				S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
			}
		}
	}
});

}( this ));
