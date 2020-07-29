import http from '@/server';
import { daysToAgoTime } from '@/util';

const baseApi = '/api/govShow';

//#region 通用接口

/**
 * 获取头部区域信息
 */
export function getLocation() {
    return http.get(`${baseApi}?optionType=location`);
}

/**
 * 获取天气信息
 */
export function getWeather() {
    return http.get(`${baseApi}?optionType=weather`);
}

/**
 * 获取侧边栏汇总信息
 */
export function getSummary() {
    return http.get(`${baseApi}?optionType=status`);
}

/**
 * 登出
 */
export function logout() {
    return http.delete(`/api/login`);
}

//#endregion


//#region 地图

/**
 * 获取街道/镇列表
 */
export function getTownList() {
    return http.get(`${baseApi}?optionType=townList`);
}

/**
 * 获取街道/镇详情
 */
export function getTownDetail() {
    return http.get(`${baseApi}?optionType=townDetail`);
}

/**
 * 获取街道/镇案件列表
 */
export function getTownWarningList() {
    return http.get(`${baseApi}?optionType=townWarningList`);
}

/**
 * 获取场所列表
 * @param {obj} query 
 */
export function getPlaceList(query = {}) {
    const { projectName, placeName } = query;
    return http.get(`${baseApi}?optionType=placeList&projectName=${projectName}&placeName=${placeName}`);
}

/**
 * 获取场所详情
 */
export function getPlaceDetail() {
    return http.get(`${baseApi}?optionType=placeDetail`);
}

/**
 * 获取场所案件列表
 */
export function getPlaceWarningList() {
    return http.get(`${baseApi}?optionType=placeWarningList`);
}

//#endregion 


//#region 单位

/**
 * 单位-单位运行情况(原report1)
 * @param {number} days 近?天 
 */
export function getCustomerOperation(days) {
    const now = new Date().format('yyyy-mm-dd');
    return http.get(`${baseApi}?optionType=customerOperation&StartTime=${daysToAgoTime(days)}&EndTime=${now}`);
}

/**
 * 单位-单位年度运行情况(原report1)
 */
export function getCustomerYearOperation() {
    return http.get(`${baseApi}?optionType=customerYearOperation`);
}

//#endregion 


//#region 行业

/**
 * 行业 - 各行业单位数占比(原report2)
 */
export function getIndustryCustomerRate() {
    return http.get(`${baseApi}?optionType=industryCustomerRate`);
}

/**
 * 行业 - 行业运行趋势图(原report2)
 */
export function getIndustryCustomerOperation() {
    return http.get(`${baseApi}?optionType=industryCustomerOperation`);
}

/**
 * 行业 - 各行业单位数占比--饼图点击-->行业详情--头部信息
 */
export function getIndustryInfo() {
    return http.get(`${baseApi}?optionType=industryInfo`);
}

//#endregion


//#region 设备

/**
 * 设备 - 各类设备数量占比(原report3)
 */
export function getEquipmentCategoryRate() {
    return http.get(`${baseApi}?optionType=equipmentCategoryRate`);
}

/**
 * 设备 - 各类设备在线率(原report3)
 */
export function getEquipmentCategoryOnlineRate() {
    return http.get(`${baseApi}?optionType=equipmentCategoryOnlineRate`);
}

/**
 * 设备 - 各类设备运行趋势图(原report3)
 */
export function getEquipmentCategoryOperation() {
    return http.get(`${baseApi}?optionType=equipmentCategoryOperation`);
}

//#endregion 设备


//#region 配电箱回路

export function getLoopDetail(){
    return http.get(`${baseApi}?optionType=loopDetail`);
}

//#endregion 


//#region 选项列表源

/**
 * 设备 - 获取设备类别列表选项
 */
export function getEquipmentCategorySelections() {
    return http.get(`${baseApi}?optionType=equipmentCategorySelections`);
}

/** 
 * 设备 - 获取配电箱类型列表选项
 */
export function getPDXCategorySelections() {
    return http.get(`${baseApi}?optionType=PDXCategorySelections`);
}

/** 
 * 场所搜索 - 获取项目列表选项
 */
export function getProjectSelections() {
    return http.get(`${baseApi}?optionType=projectSelections`);
}

//#endregion 
