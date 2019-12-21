
var idBlog= "1264493221965067337"; // معرف المدونة التي وضعت عليها لوحة التفعيل
var idPage= "2685368397469857303"; // معرف الصفحة التي وضعت عليها لوحة التفعيل
$.ajax({
    dataType: "json",
    url: "https://www.blogger.com/feeds/"+idBlog+"/pages/default/"+idPage+"?alt=json-in-script",
    method: "GET",
    dataType: "jsonp",
    success: function(e) {
        var o, t = $(e.entry.content.$t),
            n = t.find("li"),
            a = t.find("script"),
            l = [];
            $allow = !0, $("body").append(a);
        for (o = 0; o < n.length; o += 1) l.push($(n[o]).text());
        o = window.location.hostname.toLowerCase(), n = window.location.href.toLowerCase();
        var s;
        l.length;
        for (s = 0; s < l.length; s += 1) {
            if (-1 != o.indexOf(l[s])) {
                break
            }
  s == l.length - 1 && $('body *').remove() && $('body').addClass('RE').append("<style>body.RE {background: url(//lh3.googleusercontent.com/-NJjHq7hjGJI/XcqC_wjfejI/AAAAAAAAAJQ/tYB0vUvWvR48ANJLukXQKqayogsdHS3rwCLcBGAsYHQ/h120/%25D9%25A2%25D9%25A0%25D9%25A1%25D9%25A9%25D9%25A1%25D9%25A1%25D9%25A1%25D9%25A2_%25D9%25A1%25D9%25A1%25D9%25A5%25D9%25A9%25D9%25A5%25D9%25A1.jpg) no-repeat center #eee;background-position: center center;height: 98vh;}</style>")
        }
    }
});

