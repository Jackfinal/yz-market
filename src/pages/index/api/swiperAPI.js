/**
 * Created by Orainsink on 2019/3/11.
 * 请求模板
 */
import * as API from '../../../modules/js/api/config.js'

export default {
    //新增
    get: params => {
        return API.GET(`/index/banner`, params)
    },
}