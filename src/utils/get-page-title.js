import defaultSettings from '@/settings'

const title = defaultSettings.title || '股权尽调'

export default function getPageTitle(pageTitle) { //调用此方法可以传入对应的标题
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
