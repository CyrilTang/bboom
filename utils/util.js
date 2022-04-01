const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[hour, minute+"\n"].map(formatNumber).join(':')} ${[year+'年', month+'月', day+'日'].map(formatNumber).join('')} `
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const wallpaperUrl = "https://wallpaper.mxbizhi.com/"
module.exports = {
  formatTime,
  wallpaperUrl
}
