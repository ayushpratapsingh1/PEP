import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponent = ({ data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
