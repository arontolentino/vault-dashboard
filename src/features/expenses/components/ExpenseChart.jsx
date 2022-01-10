import Chart from 'react-apexcharts';

export default function ExpenseChart() {
  const series = [
    {
      name: 'Total Expenses',
      data: [3923.23, 2039.39, 3020.23, 1400.22, 2321.23, 4320.23, 3021.21],
    },
  ];

  const options = {
    dataLabels: {
      enabled: false,
    },
    colors: ['#251C8B'],
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
