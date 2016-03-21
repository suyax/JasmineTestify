/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    /*this is RSS Feeds test suite: it will test RSS allFeeds functionality*/
    describe('RSS Feeds', function() {
        /*test whether allFeeds container is defined*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
       /* test whether each feed has a url property and whether the url is defined*/
        it('each feed has a URL defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /* test whether each feed has a name property and whether the name is defined*/
        it('each feed has a name defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

        /* test whether each feed has a date property and whether the date is defined*/
        xit('each feed has a date defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.date).toBeDefined();
                expect(feed.date.length).not.toBe(0);
            });
        });


    });

    /*this is The menu test suite: it will test side menu functionality*/
    describe('The menu', function() {
        /* test whether menu is hidden on page load*/
        it('menu element is hidden by default', function() {
            var bodyClass = $('body').hasClass('menu-hidden');
            expect(bodyClass).toBeTruthy();
        });
        /* test whether click on side menu icon will toggle side menu visibility */
        it('should toggle side menu display when menu icon is clicked', function() {
            $('.icon-list').trigger("click");
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.icon-list').trigger("click");
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    /*this is Initial Entries suite: it will test feed on-load functionality*/
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function(){done();});
        });
        /* when the loadFeed function is called and completes, there is at least a single .entry element within the .feed container. */
        it('feed container has more than one element', function() {
            expect($('.feed .entry').length).not.toEqual(0);
        });
    });


    /*this is New Feed Selection suite: it will test loadFeed functionality*/
    describe('New Feed Selection', function() {
        var node0, node1, title0, title1;

        beforeEach(function(done) {
            loadFeed(0, function(){
                node0 = $('.feed').html();
                title0 = $('.header-title').text();
                done();
            });
        });

        afterEach(function() {
           loadFeed(0);
        });
        /*when the new feeds selected, content will update*/
        it('when a new feed is loaded the content changes', function(done) {
            loadFeed(1, function(){
                node1 = $('.feed').html();
                expect(node1).not.toEqual(node0);
                done();
            })
        });

        /*when the new feeds selected, title will update*/
        it('when a new feed is loaded the content changes', function(done) {
            loadFeed(1, function(){
                title1 = $('.header-title').text();
                expect(title1).not.toEqual(title0);
                done();
            })
        });
    });



    /*this is Content sorted by date: it will test loadFeed with latest first*/
    describe('Content sorted by date', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        afterEach(function() {
           loadFeed(0);
        });
        /*when the new feeds loaded, content will sorted from latest to oldest*/
        xit('feed sorted from latest', function(done) {
            loadFeed(1, function(){
                var feeds = $('.feed .entry .date');
                console.log(feeds);
                feeds.forEach(function(feed) {
                    expect((new Date() - feeds[i]) <= (new Date() - feeds[i+1])).toBeTruthy;
                })
                done();
            })
        });
    });

}());
