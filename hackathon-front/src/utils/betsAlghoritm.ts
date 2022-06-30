export const sortingArr = (arr: any) => {
    const shouldSort = arr.every((item: any) => item.botSettingDto.priority === 0);

    if(shouldSort) {
        arr.map((item: any, index: number) => {
            if(index === 0) {
                item.botSettingDto.priority = 1
                item.botSettingDto.timeDelay = '00:05:00'
            }
            if(index === 1) {
                item.botSettingDto.priority = 2
                item.botSettingDto.timeDelay = '00:10:00'
            }
            if(index === 2) {
                item.botSettingDto.priority = 3
                item.botSettingDto.timeDelay = '00:15:00'
            }

            return item;
        })
    } else {
        const arr1 = arr.sort((a: any, b: any) => b.botSettingDto.priority - a.botSettingDto.priority).filter((item: any) => item.botSettingDto.priority !== 0).sort((a: any, b: any) => a.botSettingDto.priority - b.botSettingDto.priority);

        const arr2 = arr.filter((item: any) => item.botSettingDto.priority === 0).map((item: any) => arr1.push(item))

        return arr1;
    }

    return arr;
}