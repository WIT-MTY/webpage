import { IconType } from "react-icons";

interface ContactIconProps {
    Icon: IconType;
    title: string;
    media: string;
    url: string;
    mail?: boolean;
}

export const ContactIcon: React.FC<ContactIconProps> = ({ Icon, media, title, url, mail }) => {
    const href = mail ? `mailto:${url}` : url;

    return (
        <div>
            <div className="text-9xl items-center">
                <Icon />
                <div className="text-sm">
                    <h2 className="font-bold">
                        {title}
                    </h2>
                    <a className="underline" href={href} target="_blank">
                        {media}
                    </a>
                </div>
            </div>
        </div>
    )
}

