declare namespace Carousel {
    export interface PropsParams {
        carouselHeight: string
        carouselTime: number
        carouselImages: Array<{src: string, path: string}>
    }
}
declare namespace Bulletin {
    export interface BulletinParams {
        bulletinChangeTime: number
        bulletinItems: Array<{text: string}>
    }
}