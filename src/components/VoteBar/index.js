import React from 'react'
import Chart from 'chart.js'

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
      <div>
        <canvas ref={this.chartRef} />
      </div>
    )
  }
}

export default VoteBar
