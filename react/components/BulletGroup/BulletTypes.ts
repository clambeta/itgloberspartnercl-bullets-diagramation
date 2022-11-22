export type BulletsSchema = Array<{
    image: string
    titleBullet: string
    link?: LinkStyle
}>

export interface Link {
    url: string
    attributeNoFollow?: boolean
    attributeTitle?: string
    openNewTab?: boolean
    newTab?: boolean
}