export function sortDate(a, b) {
  const v1 = new Date(a);
  const v2 = new Date(b);
  if (v1 > v2) {
    return 1;
  } else if (v1 < v2) {
    return -1;
  } else {
    return 0;
  }
}

export function sortStr(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

export function getChartConfig() {
  return {
    chart: {
      animation: false,
      backgroundColor: "transparent",
      plotBorderWidth: 1,
      plotBorderColor: "#46637F",
    },
    credits: { enabled: false },
    title: { text: undefined },
    annotations: [
      {
        draggable: "",
        shapes: [
          {
            point: "mockBuy",
            type: "rect",
            widt: 100,
            height: 30,
          },
          {
            point: "mockSell",
            type: "rect",
            widt: 100,
            height: 30,
          },
        ],
        labels: [
          {
            point: function (annotation) {
              return {
                id: "mockBuy",
                x:
                  annotation.chart.xAxis[0].max +
                  annotation.chart.xAxis[0].tickInterval / 3,
                xAxis: 0,
                y: 0,
                yAxis: 0,
              };
            },
            text: "Buy",
            backgroundColor: "transparent",
            borderColor: "transparent",
            style: {
              color: "#FFFFFF",
            },
          },
          {
            point: function (annotation) {
              return {
                id: "mockSell",
                x:
                  annotation.chart.xAxis[0].max +
                  annotation.chart.xAxis[0].tickInterval / 3,
                xAxis: 0,
                y: 0,
                yAxis: 0,
              };
            },
            verticalAlign: "top",
            text: "Sell",
            backgroundColor: "transparent",
            borderColor: "transparent",
            style: {
              color: "#FFFFFF",
            },
            y: 10,
          },
        ],
        events: {
          click: () => {},
        },
      },
    ],
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        return `${this.points.reduce(function (s, point) {
          const symbolStyle =
            point.series.index === 2
              ? `background-color: #97AFC6; border-color: ${point.color}`
              : `background-color: ${point.color}`;
          return `<div>${s}</div><div><span class="symbol-icon symbol-series-${point.series.index}" style="${symbolStyle}"></span>${point.series.name}: <b>${point.y}</b><div>`;
        }, new Date(this.x).toLocaleDateString().split(",")[0])}`;
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: 0,
      y: 50,
      itemStyle: {
        color: "#FFFFFF",
        fontSize: "12px",
      },
      itemHoverStyle: {
        color: "#FFFFFF",
      },
      floating: true,
      backgroundColor: "transparent",
    },
    xAxis: {
      opposite: true,
      type: "datetime",
      tickLength: 0,
      gridLineWidth: 1,
      gridLineColor: "#46637F",
      lineColor: "#46637F",
      labels: {
        format: "{value:%m/%d/%Y}",
        style: {
          color: "#97AFC6",
        },
      },
    },
    yAxis: {
      title: { text: undefined },
      gridLineColor: "#46637f",
      labels: {
        format: "{value}",
        style: {
          color: "#97AFC6",
        },
      },
    },
    plotOptions: {
      column: {
        showInLegend: false,
        stacking: "normal",
        color: "#00B0B9",
        borderColor: "#00B0B9",
        states: {
          hover: {
            brightness: 0.3,
          },
        },
      },
      line: {
        marker: {
          symbol: "square",
          fillColor: "white",
        },
      },
      series: {
        marker: { enabled: true },
      },
    },
    series: [],
  };
}
