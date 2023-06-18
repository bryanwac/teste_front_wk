import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js';
import { DashBoardService } from './dashboard.service';
import { MatDialog } from '@angular/material/dialog';

interface Estatisticas {
  totalPessoas: number;
  totalHomens: number;
  totalMulheres: number;
  obesosHomens: number;
  obesosMulheres: number;
  estatisticaPorTipoSang: {
    tipoSanguineo: string;
    mediaIdade: number;
  }[];
  relacaoDoadores: {
    tipo: string;
    possiveisDoadores: number;
  }[];
  candidatosPorEstado: {
    pes_estado: string,
		quantidade: number;
  }[];
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  estatisticasCompleto: Estatisticas | undefined;

  regioesBrasil: string[] = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];

  constructor(
    private dashService: DashBoardService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buscaEstatisticas();
  }

  buscaEstatisticas() {
    this.dashService.buscaEstatisticas().subscribe((todas) => {
      if (todas) {
        this.estatisticasCompleto = todas;
        this.renderAgeChart();
        this.renderDonorChart();
      }
    });
  }

  renderAgeChart() {
    const ageData = this.estatisticasCompleto.estatisticaPorTipoSang.map((item) => ({
      tipoSanguineo: item.tipoSanguineo,
      mediaIdade: item.mediaIdade.toFixed(2)
    }));

    const ageLabels = ageData.map((item) => item.tipoSanguineo);
    const ageValues = ageData.map((item) => item.mediaIdade);

    const ageChart = new Chart('age-chart', {
      type: 'bar',
      data: {
        labels: ageLabels,
        datasets: [
          {
            label: 'Média de Idade',
            data: ageValues,
            backgroundColor: 'rgba(75, 192, 192, 0.8)'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  renderDonorChart() {
    const donorData = this.estatisticasCompleto.relacaoDoadores.map((item) => ({
      tipo: item.tipo,
      possiveisDoadores: item.possiveisDoadores
    }));

    const donorLabels = donorData.map((item) => item.tipo);
    const donorValues = donorData.map((item) => item.possiveisDoadores);

    const donorChart = new Chart('donor-chart', {
      type: 'bar',
      data: {
        labels: donorLabels,
        datasets: [
          {
            label: 'Possíveis Doadores',
            data: donorValues,
            backgroundColor: 'rgba(54, 162, 235, 0.8)'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getCandidatosPorRegiao(regiao: string) {
    return this.estatisticasCompleto?.candidatosPorEstado.filter(
      (candidatoEstado) => this.getRegiao(candidatoEstado.pes_estado) === regiao
    );
  }  

  getRegiao(estado: string): string {
    const regioes = {
      AC: 'Norte',
      AL: 'Nordeste',
      AM: 'Norte',
      AP: 'Norte',
      BA: 'Nordeste',
      CE: 'Nordeste',
      DF: 'Centro-Oeste',
      ES: 'Sudeste',
      GO: 'Centro-Oeste',
      MA: 'Nordeste',
      MG: 'Sudeste',
      MS: 'Centro-Oeste',
      MT: 'Centro-Oeste',
      PA: 'Norte',
      PB: 'Nordeste',
      PE: 'Nordeste',
      PI: 'Nordeste',
      PR: 'Sul',
      RJ: 'Sudeste',
      RN: 'Nordeste',
      RO: 'Norte',
      RR: 'Norte',
      RS: 'Sul',
      SC: 'Sul',
      SE: 'Nordeste',
      SP: 'Sudeste',
      TO: 'Norte'
    };
  
    return regioes[estado] || '';
  }
  
}
