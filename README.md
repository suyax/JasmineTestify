#Jasmine Test#

__Application use Jasmine 2.1.2 to test features of the Feed Reader__

Suites Include:

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
