import React, { useState } from "react"
import Survey from "material-survey/components/Survey"
import getTaskDescription from "../../utils/get-task-description.js"
import SampleContainer from "../SampleContainer"

export const DataEntry = props => {
  const [currentSampleIndex, changeCurrentSampleIndex] = useState(0)
  return (
    <SampleContainer
      {...props.containerProps}
      currentSampleIndex={currentSampleIndex}
      totalSamples={props.taskData.length}
      description={
        getTaskDescription(props.taskData[currentSampleIndex]) ||
        props.interface.description
      }
      onChangeSample={sampleIndex => changeCurrentSampleIndex(sampleIndex)}
    >
      <Survey
        key={currentSampleIndex}
        variant="flat"
        form={
          props.taskData[currentSampleIndex].surveyjs ||
          props.interface.surveyjs
        }
        completeText="Save"
        onFinish={answers => {
          props.onSaveTaskOutput(currentSampleIndex, answers)
        }}
      />
    </SampleContainer>
  )
}

export default DataEntry