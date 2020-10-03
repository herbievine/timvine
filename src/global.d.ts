declare module Global {
    type VideoDescription = {
        name: string
        location: string
    }

    type Video = {
        id: string
        description: VideoDescription
    }
}

export { Global }