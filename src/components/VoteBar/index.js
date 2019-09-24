import React from 'react'
import Chart from 'chart.js'

import 'chartjs-plugin-datalabels'
class VoteBar extends React.Component {
  constructor (props) {
    super(props)
    this.chartRef = React.createRef()
  }

  componentDidMount () {
    this.myChart = new Chart(this.chartRef.current, {
      type: 'doughnut',
      data: {
        labels: this.props.options.map(d => d.label),
        datasets: [
          {
            data: this.props.options.map(d => d.vote),
            backgroundColor: this.props.colors
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          callbacks: {
            label: function (tooltipItem, data) {
              var sum = data.datasets[0].data.reduce((sum, d) => {
                return sum + d
              }, 0)
              var percent =
                (data.datasets[0].data[tooltipItem.index] / sum) * 100
              percent = percent.toFixed(2) // make a nice string
              return data.labels[tooltipItem.index] + ': ' + percent + '%'
            }
          }
        },
        plugins: {
          datalabels: {
            color: 'white',
            font: {
              size: this.props.small ? '0' : '15'
            },
            formatter: function (value, context) {
              var data = context.chart.data.datasets[0].data
              var sum = data.reduce((sum, d) => {
                return sum + d
              }, 0)
              var percent = (data[context.dataIndex] / sum) * 100
              percent = percent.toFixed(1)

              return percent
            }
          }
        }
      }
    })
  }

  componentDidUpdate () {
    this.myChart.data.labels = this.props.options.map(d => d.label)
    this.myChart.data.datasets[0].data = this.props.options.map(d => d.vote)
    this.myChart.data.datasets[0].backgroundColor = this.props.colors
    this.myChart.update()
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: this.props.small ? '15%' : ''
        }}
      >
        <canvas ref={this.chartRef} />
        <div style={{ position: 'absolute', fontSize: '2rem' }}>%</div>
      </div>
    )
  }
}

export default VoteBar
