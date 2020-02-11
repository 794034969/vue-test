declare namespace Carousel {
    export interface PropsParams {
        carouselBanner: boolean
        carouselHeight: string
        carouselTime: number
        carouselImages: Array<{src: string, path: string}>
    }
}
declare namespace Bulletin {
    export interface PropsParams {
        bulletinChangeTime: number
        bulletinItems: Array<{text: string}>
    }
}
declare namespace Plate {
    export interface PropsParams {
        titleName: string
        titleDepict: string
    }
}