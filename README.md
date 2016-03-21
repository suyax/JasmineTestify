#Feed Reader Jasmine Testing#

  __Single Page Application use Jasmine 2.1.2 to test features of the Feed Reader__

## Get Started
  * run ```git clone https://github.com/suyax/JasmineTestify.git``` in shell
  * open index.html in browser
  * toggle menu icon to open or close side menu
  * click on menu items to select from different topics
  * click on the link on the page to navigate to the website

## Test & Development

  __Pull request are welcome @ https://github.com/suyax/JasmineTestify.git__
    * main function logic are in js folder app.js file
    * style please refer to css and fonts folder
    * test suites are in jasmine spec folder

  __Suites Include:__

    1. RSS Feeds
      * are defined
      * each feed has a URL defined
      * each feed has a name defined

    2. The menu
      * menu element is hidden by default
      * should toggle side menu display when menu icon is clicked

    3. Initial Entries
      * when the loadFeed function is called and completes, there is at least a single .entry element within the .feed container.

    4. New Feed Selection
      * when a new feed is loaded the content changes

    5.Title Change
      * when a new feed is loaded the title changes (added)

## License
  The MIT License (MIT)
  Copyright (c) <2016> <Suya Xu>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

