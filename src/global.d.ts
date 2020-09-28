declare module Global {
    type VideoDescription = {
        name: string
        location: string
    }

    type Video = {
        url: string
        id: string
        description: VideoDescription
    }
}

export { Global }