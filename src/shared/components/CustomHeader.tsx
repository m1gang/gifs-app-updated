import gifSearchLogo from '../../../public/gif-white-logo.png'

interface Props {
    title: string;
    description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
    return (
        <div className='content-center'>
            <h1>
                <img src={gifSearchLogo} alt="logo-gif-search" />
                {title}
            </h1>
            {
                description && (
                    <p>{description}</p>
                )
            }
        </div>
    )
}

