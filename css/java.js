function makeHeaderSticky() {
    window.pageYOffset > 0 ? document.getElementById("nav").classList.add("sticky") : document.getElementById("nav").classList.remove("sticky")
}
window.onload = function() {
    makeHeaderSticky(), window.onscroll = function() {
        makeHeaderSticky()
    }
}, !function(e, t, n, c, o, a, i) {
    e.fbq || (o = e.fbq = function() {
        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
    }, e._fbq || (e._fbq = o), o.push = o, o.loaded = !0, o.version = "2.0", o.queue = [], a = t.createElement(n), a.async = !0, a.src = c, i = t.getElementsByTagName(n)[0], i.parentNode.insertBefore(a, i))
};

