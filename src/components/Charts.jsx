import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor({pokemon}) {
    super({pokemon});

    this.state = {
      options: {
        chart: {
          id: "radar"
        },
        xaxis: {
          categories: ["HP",
          "ATTACK",
          "DEFENSE",
          "SP. ATTACK",
          "SP. DEFENSE",
          "SPEED"]
        }
      },
      theme: {
        mode:'dark',
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      
      yaxis: {
        show: true,
        labels: {
          style: {
            color: ["#eee"]}}},
      series: [
        {
          name: "series-1",
          fillColor: '#008FFB',
          data: [pokemon.stats[0].base_stat,pokemon.stats[1].base_stat,pokemon.stats[2].base_stat,pokemon.stats[3].base_stat,pokemon.stats[4].base_stat,pokemon.stats[5].base_stat
            
          ]
        }
      ]
    }
  };

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}


export default Charts;