import Chart from 'react-apexcharts';

export default function RevenueChart() {
  const series = [
    {
      name: 'Total Revenue',
      data: [
        10293.23, 20039.39, 39020.23, 14200.22, 23321.23, 41320.23, 32021.21,
      ],
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    colors: ['#26d277'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan',
      ],
    },
  };

  return <Chart options={options} series={series} type="area" />;
}
