import React, { useEffect } from 'react'
import Chart from 'chart.js'

const VoteBar = props => {
  const { labels, votes } = props

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d')
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: votes,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ]
          }
        ]
      }
    })
  })

  return (
    <div>
      <canvas id='myChart' />
    </div>
  )
}

export default VoteBar
