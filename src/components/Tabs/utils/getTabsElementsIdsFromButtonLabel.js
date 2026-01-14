import getIdFromString from '@/utils/getIdFromString'

export default function getTabsElementsIdsFromButtonLabel(
  buttonLabel
) {
  const titleFormatted = getIdFromString(buttonLabel)

  return {
    buttonId: `${titleFormatted}-tab-button`,
    contentId: `${titleFormatted}-tab-content`,
    headingId: `${titleFormatted}-tab-heading`,
  }
}
