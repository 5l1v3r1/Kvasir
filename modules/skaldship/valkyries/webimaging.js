/* Capture a screenshot of a URL and save it to a file using phantomjs
 *
 * (c) 2010-2014 Cisco Systems, Inc.
 * (c) 2015 Kurt Grutzmacher
 */

var page = require('webpage').create(),
    system = require('system'),
    url, outputfile;

if (system.args.length <= 2) {
    console.log("Usage: webimaging.js <url> <outputfile>");
    phantom.exit();
}

url = system.args[1];
outputfile = system.args[2];
useragent = system.args[3];

if (!useragent) {
    useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/534.34 (KHTML, like Gecko) Kvasir'
}

page.settings.userAgent = useragent;
page.viewportSize = { width: 1024, height: 768 };
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };
page.timeout = 200;
page.open(url, function () {
    page.render(outputfile);
    phantom.exit();
});
