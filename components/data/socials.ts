import { IconType } from 'react-icons/lib'
import { FaDiscord, FaEnvelope, FaGithub, FaInstagram, FaSteam } from 'react-icons/fa'

type Socials = {
    id: number,
    ref: string
    icon: IconType,
    copyValue?: boolean,
}

export const socials: Array<Socials> = [
    {
        id: 1,
        ref: 'https://github.com/cxtboyz',
        icon: FaGithub,
    },
    {
        id: 2,
        ref: 'https://steamcommunity.com/id/mzp4president/',
        icon: FaSteam,
    },
    {
        id: 3,
        ref: 'pter@felveszemacigit.hu',
        icon: FaEnvelope,
        copyValue: true,
    },
    {
        id: 4,
        ref: 'https://www.instagram.com/ogpter/',
        icon: FaInstagram,
    },
    {
        id: 5,
        ref: 'ass kedd#0642',
        icon: FaDiscord,
        copyValue: true,
    }
]