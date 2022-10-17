const chartTypeReducer = (state = 'BAR', action) => {
    switch (action.type) {
      case 'SET_CHART_TYPE':
        return action.chartType
      default:
        return state
    }
  }
  
  export const chartTypeChange = chartType => {
    return {
      type: 'SET_CHART_TYPE',
      chartType,
    }
  }
  
  export default chartTypeReducer