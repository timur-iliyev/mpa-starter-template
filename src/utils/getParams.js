import getDataAttrNameFromSelector from './getDataAttrNameFromSelector'

export default function getParams(element, dataAttrSelector) {
  return JSON.parse(
    element.getAttribute(
      getDataAttrNameFromSelector(dataAttrSelector)
    )
  )
}
