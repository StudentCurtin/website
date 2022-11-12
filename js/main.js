new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    // allows anchor tags to be functional
    anchors: ['top', 'nav', 'title1', '', '', 'title2', '', '', 'error'],
    afterRender: function() {
        topSection()
    },
});

// top of page animations
function topSection() {
    //gsap create timeline for animation
    const tl  = new TimelineMax({delay: 0.5})

    // animate elements
    tl.from('.title', { x: 1500, duration: 1.5, ease: 'elastic'})
      .from('.subtitle', {y: 30, opacity: 0, duration: 1.5}, "-=2")
}