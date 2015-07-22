# Barcode scanner for Ionic

A full open-source code, you can add this code to your project with Ionic, this is just the /www & /plugins folders, so you must add this yourself on a new (or older) project which use Ionic. There is just a function : scan any barcode or qrcode... Retrieve the full list on the plugin barcode Github [page](https://github.com/zxing/zxing)

##Notes

Please check the code, if you don't need any plug-ins of my project (statusbar for example) or other: remove it because if you have a project already up, you can have some plugins or code uncompatible ... so don't copy / paste into your editor and run, check the code before, after that, you can use it!

##Modifications

If you want to add a tab you can check this:

```javascript
// in app.js:66
/* Remove this comment if u want to use more than one Tab
$scope.goForward = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1) {
        $ionicTabsDelegate.select(selected + 1);
    }
}

$scope.goBack = function () {
    var selected = $ionicTabsDelegate.selectedIndex();
    if (selected != -1 && selected != 0) {
        $ionicTabsDelegate.select(selected - 1);
    }
}
*/
```

```html
<!-- in /templates/tabs.html:12 -->
<!-- Remove this comment if u want to use more than one Tab
<ion-tab title="About" icon-off="ion-ios-people-outline" icon-on="ion-ios-people" href="#/tab/account">
    <ion-nav-view name="tab-account"></ion-nav-view>
</ion-tab>
-->
```

##Screenshots

![home](http://i.imgur.com/4SF1mKr.png)

![scan](http://i.imgur.com/mysVKwh.png)
