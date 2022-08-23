$(document).ready(function () {
    $('#fullpage').fullpage({
        slidesNavigation: true,
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'Nav', '봄', '여름', '가을', '겨울'],
        showActiveTooltip: true,
        anchors: ['intro', 'nav', 'AboutMe', 'Skill', 'Project', 'Contact']
    });
})