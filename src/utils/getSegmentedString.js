export default function getSegmentedString(string) {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    try {
      const segmenter = new Intl.Segmenter({
        granularity: 'grapheme',
      })
      return [...segmenter.segment(string)].map(
        ({ segment }) => segment
      )
    } catch (err) {
      console.warn(
        'Intl.Segmenter failed, falling back to Array.from',
        err
      )
    }
  }

  return [...string]
}
