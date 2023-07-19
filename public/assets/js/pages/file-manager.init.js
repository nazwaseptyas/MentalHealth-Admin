function getChartColorsArray(e) {
  if (null !== document.getElementById(e)) {
    var t = document.getElementById(e).getAttribute('data-colors');
    if (t)
      return (t = JSON.parse(t)).map(function (e) {
        var t = e.replace(' ', '');
        if (-1 === t.indexOf(',')) {
          var r = getComputedStyle(document.documentElement).getPropertyValue(
            t,
          );
          return r || t;
        }
        var o = e.split(',');
        return 2 != o.length
          ? t
          : 'rgba(' +
              getComputedStyle(document.documentElement).getPropertyValue(
                o[0],
              ) +
              ',' +
              o[1] +
              ')';
      });
  }
}
var options,
  chart,
  BarchartOverviewColors = getChartColorsArray('overview');
BarchartOverviewColors &&
  ((options = {
    series: [{ data: [30, 14, 26, 32, 24] }],
    chart: {
      toolbar: { show: !1 },
      offsetX: -14,
      offsetY: 14,
      height: 250,
      type: 'bar',
      events: { click: function (e, t, r) {} },
    },
    plotOptions: {
      bar: { columnWidth: '55%', distributed: !0, endingShape: 'rounded' },
    },
    fill: { opacity: 1 },
    stroke: { show: !1 },
    dataLabels: { enabled: !1 },
    legend: { show: !1 },
    colors: BarchartOverviewColors,
    xaxis: { categories: ['Images', 'Video', 'Music', 'Document', 'Others'] },
  }),
  (chart = new ApexCharts(
    document.querySelector('#overview'),
    options,
  )).render());