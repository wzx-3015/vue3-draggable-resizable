/*
 * @Description: 请输入当前文件描述
 * @Author: @Xin (834529118@qq.com)
 * @Date: 2021-06-03 17:13:01
 * @LastEditTime: 2021-06-03 17:19:02
 * @LastEditors: @Xin (834529118@qq.com)
 */
export function snapToGrid (pendingX: number, pendingY: number, scale: number = 1) {
  const [scaleX, scaleY] = typeof scale === 'number' ? [scale, scale] : scale
  const x = Math.round(pendingX / scaleX)
  const y = Math.round(pendingY / scaleY)
  return [x, y]
}
