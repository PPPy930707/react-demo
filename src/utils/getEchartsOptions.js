/**
 * 根据传入的数据，生产不同的echarts options配置对象
 * data 数据           数据
 * type echart的类型   增加类型
 * config 配置项       自行添加配置
 */

const getEchartsOptions = (data, type, config) => {
  let options = {}

  switch (type) {
    case 'bar':
      options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data
          }
        ]
      }
      break
    default:
      break
  }
  return options
}

export default getEchartsOptions
