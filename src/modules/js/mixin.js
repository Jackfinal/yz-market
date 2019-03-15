/**
 * Created by Orainsink on 2019/3/15.
 * 混入
 */
let mixin = {
    filters: {
        currency(price) {
            let priceStr = '' + price
            if (priceStr.indexOf('.') > -1) {
                let arr = priceStr.split('.')
                return arr[0] + '.' + (arr[1] + '0').substr(0, 2)
            } else {
                return priceStr + '.00'
            }
        }
    }
}

export default mixin