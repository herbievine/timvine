// @ts-ignore
import FontAwesomeRenderer from '@/modules/FontAwesomeRenderer'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTwitter,
    faSpotify,
    faSoundcloud
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faTwitter,
    faSpotify,
    faSoundcloud
)

export { FontAwesomeRenderer }