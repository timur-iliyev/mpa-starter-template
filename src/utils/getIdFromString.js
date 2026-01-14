export default function getIdFromString(string) {
  return string.toLowerCase().replaceAll(' ', '-')
}
