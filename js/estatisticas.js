// ====== GRÁFICO DE LINHA ======
const graficoVolumeOptions = {
  series: [{
    name: "Recorrências",
    data: [20, 45, 80, 65, 50] // valores simulados
  }],
  chart: {
    type: 'area',
    height: 300,
    toolbar: { show: false }
  },
  xaxis: {
    categories: ['11h', '12h', '13h', '14h', '15h'],
    labels: { style: { colors: '#555' } }
  },
  colors: ['#7b4eff'],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },
  stroke: { curve: 'smooth', width: 2 }
};

const graficoVolume = new ApexCharts(
  document.querySelector("#grafico-volume"),
  graficoVolumeOptions
);
graficoVolume.render();

// ====== GRÁFICO DE PIZZA (DONUT) ======
const graficoEmocoesOptions = {
  series: [40, 25, 15, 10, 10], // porcentagens simuladas
  chart: {
    type: 'donut',
    height: 250
  },
  labels: ['Felicidade', 'Pensando', 'Refletindo', 'Dúvida', 'Dor'],
  colors: ['#7b4eff', '#ffb84d', '#ff6b6b', '#1abc9c', '#e056fd'],
  legend: {
    position: 'bottom',
    labels: { colors: '#333' }
  },
  plotOptions: {
    pie: {
      donut: { size: '65%' }
    }
  }
};

const graficoEmocoes = new ApexCharts(
  document.querySelector("#grafico-emocoes"),
  graficoEmocoesOptions
);
graficoEmocoes.render();
